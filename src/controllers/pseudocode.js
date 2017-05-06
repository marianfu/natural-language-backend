import prose from 'prose-js';
import { natural } from '../utils/examples';

const getPseudocodeFromNatural = (req, res) => {
	const { text } = req.body;
	console.log(text);
	const pseudocode = prose.compileToPseudocode(text);
	res.send(pseudocode);
};

// Remove this later
const getPseudocodeExample = (req, res) => {
	const pseudocode = prose.compileToPseudocode(natural.toString());
	console.log(natural);
	res.send(pseudocode);
};

export default { getPseudocodeFromNatural, getPseudocodeExample };