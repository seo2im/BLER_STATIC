import fs from 'fs'

const load = (filename) => {
	const data = JSON.parse(fs.readFileSync('./data/' + filename, 'utf8'));
	return data.map(msg => msg.userGames).flat();
}

export default load;