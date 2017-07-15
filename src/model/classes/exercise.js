import BaseModel from './baseModel';

const ExerciseModel = BaseModel.extend({
	tableName: 'exercises'
});

class Exercise {

	constructor(classroom, name, description, result, level) {
		this.name = name;
		this.description = description;
		this.result = result;
		this.level = level;
		this.model = new ExerciseModel({
			name: name,
			description: description,
			result: result,
			level: level,
			idClassroom: classroom.id
		});
	}

	populate(data) {
		let { name, description, result, level } = data;
		
		if (name) {
			this.name = name;
		}
		if (description) {
			this.description = description;
		}
		if (result) {
			this.result = result;
		}
		if (level) {
			this.level = level;
		}
	}

	toString() {
		return description;
	}

}

export default Exercise;
export { ExerciseModel };