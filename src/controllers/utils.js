import BasicDao from '../model/persistence/basicDao';

const getList = (req, res, clazz) => {
	new BasicDao().fetch(clazz).then((models) => {
		res.status(200).json(models);
	});
};

const getOne = (req, res, clazz) => {
	new BasicDao().fetch(clazz, {
		where: [['id', req.params.id]]
	}).then((models) => {
		res.status(200).json(models.length > 0 ? models[0] : null);
	});
};

export { getList, getOne } ;