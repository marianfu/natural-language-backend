import ModelProxy from '../classes/modelProxy';

class BasicDao {

	save(obj) {
		const saveOne = (obj) => {
			return obj.model.save().then((model) => {
				obj.populate(model.attributes);
				console.log('Object saved: ' + JSON.stringify(obj));
			});
		}

		if (Array.isArray(obj)) {
			let promises = [];
			for (let o of obj) {
				promises.push(saveOne(o));
			}
			return Promise.all(promises);
		} else {
			return saveOne(obj);
		}
	}

	fetch(clazz, query) {
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

		return modelQuery.fetch().then((model) => {
			var obj = new clazz();
			obj.populate(model.attributes);
		});
	}

	remove(obj, callback) {
		return obj.model.destroy();
	}

}

export default BasicDao;