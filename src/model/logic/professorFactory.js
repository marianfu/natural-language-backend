import BasicDao from '../persistence/basicDao';
import Professor from '../classes/professor';

export default (firstName, lastName) => {
	return new BasicDao().save(new Professor(firstName, lastName));
}