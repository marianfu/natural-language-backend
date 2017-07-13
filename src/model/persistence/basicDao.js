import ModelProxy from '../classes/modelProxy';

class BasicDao {

	save(obj, callback) {
		obj.model.save().then((model) => {
			obj.populate(model.attributes);

			if (callback) {
				callback(obj);
			}
		});
	}

	fetch(clazz, query, callback) {
		let modelQuery = clazz.dbModel();

		if (query) {
			const { where, orderBy } = query;

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
		} else {
			modelQuery = modelQuery.forge();
		}

		modelQuery.fetch().then((model) => {
			var obj = new clazz();
			obj.populate(model.attributes);
			if (callback) {
				callback(obj);
			}
		});
	}

	remove(obj, callback) {
		obj.model.destroy().then(callback);
	}

}

export default BasicDao;