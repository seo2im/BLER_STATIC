import load from './srcs/load'
import { getData } from './srcs/static/rank_solo'

const main = () => {
	const data = load('seolim.json');
	getData(data);
}

main();