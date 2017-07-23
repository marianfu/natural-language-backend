import BasicDao from '../../persistence/basicDao';
import Student from '../../classes/student';
import Professor from '../../classes/professor';
import encryptor from '../authentication/passwordEncryptor';


const authenticate = (email, password) => {
	return new Promise((resolve, reject) => {
		if (!email || !password) {
			reject('Some parameters are missing');
		}

		const basicDao = new BasicDao();

		basicDao.fetch(Student, {
			where: [['email', email]]
		}).then((students) => {
			if (students && students.length > 0) {
				let student = students[0];
				encryptor.compare(password, student.password).then((isValid) => {
					if (!isValid) {
						reject('Password invalid');
					}
					resolve(student);
				});
			} else {
				basicDao.fetch(Professor, {
					where: [['email', email]]
				}).then((professors) => {
					if (professors && professors.length > 0) {
						let professor = professors[0];
						encryptor.compare(password, professor.password).then((isValid) => {
							if (!isValid) {
								reject('Password invalid');
							}
							resolve(professor);
						});
					} else {
						reject('No users found with given email');
					}
				});
			}
		});
	});
}

export default authenticate;