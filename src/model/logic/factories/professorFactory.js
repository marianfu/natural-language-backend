import BasicDao from '../../persistence/basicDao';
import Professor from '../../classes/professor';
import encryptor from '../authentication/passwordEncryptor';

export default (firstName, lastName, email, password) => {
	return new Promise((resolve, reject) => {
		if (!firstName || !lastName || !email || !password) {
			reject('Some parameters are missing')
		}

		encryptor.encrypt(password).then((encryptedPassword) => {
			new BasicDao().save(new Professor(firstName, lastName, email, encryptedPassword)).then(resolve);
		});
	})
}