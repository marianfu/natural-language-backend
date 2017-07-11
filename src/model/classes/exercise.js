import BaseModel from './baseModel';

const Exercise = BaseModel.extend({
	tableName: 'exercises'
});

export default Exercise;

// import { Model } from 'objection';

// class Exercise extends Model {
	
// 	//	Table name
// 	get tableName() {
// 		return 'exercises';
// 	}

// 	constructor(description, result) {
// 		super();
// 		this.description = description;
// 		this.result = result;
// 	}

// 	// Transient methods
// 	toString() {
// 		return description;
// 	}

// }

// export default Exercise;