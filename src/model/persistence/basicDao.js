import _ from 'lodash';

class BasicDao {

	save(obj) {
		const saveOne = (obj) => {
			return obj.model.save().then((model) => {
				obj.populate(model.attributes);
				console.log('Object saved: ' + obj.toString());
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

		return modelQuery.fetchAll().then((data) => {
			let objects = [];
			 _.each(data.models, function (model) { //I am looping over models using underscore, you can use any loop
				var obj = new clazz();
				obj.populate(model.attributes);
				objects.push(obj);
	        });
			return objects;
		});
	}

	remove(obj, callback) {
		return obj.model.destroy();
	}

}

export default BasicDao;