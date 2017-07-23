import BasicDao from '../../persistence/basicDao';
import Student from '../../classes/student';
import encryptor from '../authentication/passwordEncryptor';

export default (firstName, lastName, email, password) => {
	return new Promise((resolve, reject) => {
		if (!firstName || !lastName || !email || !password) {
			reject('Some parameters are missing')
		}

		encryptor.encrypt(password).then((encryptedPassword) => {
			new BasicDao().save(new Student(firstName, lastName, email, encryptedPassword)).then(resolve);
		});
	});
}