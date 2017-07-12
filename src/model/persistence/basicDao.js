class BasicDao {

	save(obj, callback) {
		obj.model.save().then(callback);
	}

	fetch(model, query, callback) {
		const { where, orderBy } = query;

		let modelQuery = model;

		if (where) {
			for (let w of where) {
				modelQuery = modelQuery.where(...w);
			}
		}

		if (orderBy) {
			for (let o of orderBy) {
				modelQuery = modelQuery.orderBy(...o);	
			}
		}

		modelQuery.fetch().then(callback);
	}

	remove(obj, callback) {
		obj.model.destroy().then(callback);
	}

}

export default BasicDao;