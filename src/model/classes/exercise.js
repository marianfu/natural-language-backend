import BaseModel from './baseModel';

const ExerciseModel = BaseModel.extend({
	tableName: 'exercises'
});

class Exercise {

	constructor(description, result) {
		this.description = description;
		this.result = result;
		this.model = new ExerciseModel({description, result});
	}

	populate(data) {
		let { description, result } = data;
		
		if (description) {
			this.description = description;
		}
		if (result) {
			this.result = result;
		}
	}

	toString() {
		return description;
	}

}

export default Exercise;
export { ExerciseModel };