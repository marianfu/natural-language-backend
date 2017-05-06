import { exercises } from '../utils/examples';

const get_exercises_list = (req, res) => {
  res.json(exercises);
};

const get_exercise = (req, res) => {
  res.send('NOT IMPLEMENTED yet');
}

export default { get_exercises_list, get_exercise };