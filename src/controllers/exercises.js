import { exercises } from '../utils/examples';

const getExerciseList = (req, res) => {
  res.json(exercises);
};

const getExercise = (req, res) => {
  res.send('NOT IMPLEMENTED yet');
}

export default { getExerciseList, getExercise };