import BaseClass from './baseClass';
import BaseModel from './baseModel';

const ExerciseModel = BaseModel.extend({
	tableName: 'exercises'
});

class Exercise extends BaseClass {

	constructor(classroom, name, description, result, level) {
		super();
		this.name = name;
		this.description = description;
		this.result = result;
		this.level = level;
		this.model = new ExerciseModel({
			name: name,
			description: description,
			result: result,
			level: level,
			idClassroom: classroom ? classroom.id : null
		});
	}

	static dbModel() {
		return ExerciseModel;
	}

}

export default Exercise;
export { ExerciseModel };