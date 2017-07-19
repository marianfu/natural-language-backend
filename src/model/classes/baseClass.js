class BaseClass {
	
	populate(data) {
		Object.assign(this, data);
	}

	toString() {
		let _self = this;
		return JSON.stringify(
			_self,
			(key, value) => {
				if (key === 'model') {
					return undefined;
				}
				return value;
			},
			'  '
		);
	}

}

export default BaseClass;