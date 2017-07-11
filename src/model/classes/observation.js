import BaseModel from './baseModel';
import Professor from './professor';

const Observation = BaseModel.extend({
	tableName: 'observations',
	professor: function() {
		return this.hasOne(Professor);
	}
});

export default Observation;

// import { Model } from 'objection';
// import Professor from './professor';

// class Observation extends Model {
	
// 	//	Table name
// 	get tableName() {
// 		return 'observations';
// 	}

// 	constructor(professor, description) {
// 		super();
// 		this.professor = professor;
// 		this.description = description;
// 	}

// 	// Table relations
// 	professor() {
// 		return this.hasOne(Professor);
// 	}

// 	// Transient methods
// 	toString() {
// 		return description;
// 	}
// }

// export default Observation;