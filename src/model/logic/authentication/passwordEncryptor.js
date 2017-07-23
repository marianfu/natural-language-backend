import bcrypt from 'bcrypt';


const saltRounds = 10;

const encrypt = (plainPassword) => {
	return new Promise((resolve, reject) => {
		bcrypt.genSalt(saltRounds, (err, salt) => {
		    bcrypt.hash(plainPassword, salt, (err, hash) => {
		        if (err) {
		        	reject(err);
		        }
		        resolve(hash);
		    });
		});
	});
}

const compare = (plainPassword, hash) => {
	return new Promise((resolve, reject) => {
		bcrypt.compare(plainPassword, hash, (err, res) => {
			if (err) {
		        reject(err);
			}
			resolve(res);
		});
	});
}

export default { encrypt, compare };