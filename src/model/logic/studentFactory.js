import BasicDao from '../persistence/basicDao';
import Student from '../classes/student';

export default (firstName, lastName) => {
	return new BasicDao().save(new Student(firstName, lastName));
}