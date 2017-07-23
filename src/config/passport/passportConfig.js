import { Strategy as LocalStrategy } from 'passport-local';
import BasicDao from '../../model/persistence/basicDao';
import Professor from '../../model/classes/professor';
import Student from '../../model/classes/student';
import authenticate from '../../model/logic/authentication/userAuthenticator';


const configPassport = (passport) => {
	passport.use(buildStrategy());
	passport.serializeUser(serializeUser);
	passport.deserializeUser(deserializeUser);
}

const buildStrategy = () => {
	return new LocalStrategy(
		{
		    usernameField: 'email',
		    passwordField: 'password',
		    session: false
		},
		(email, password, done) => {
			authenticate(email, password)
				.then((user) => {
					return done(null, user);
				})
				.catch((err) => {
					return done(err);	
				});
		}
	);
}

const serializeUser = (user, done) => {
	done(null, user.id);
}

const deserializeUser = (id, done) => {
	new BasicDao().fetch(Student, {
		where: [['id', id]]
	}).then((students) => {
		if (!students || students.length === 0) {
			return done(err);
		}

		return done(null, students[0]);
	});
}

export default configPassport;