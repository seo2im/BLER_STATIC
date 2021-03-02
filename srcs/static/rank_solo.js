export const getCharacter = (data, code) => {
	return data.filter(game => game.characterNum === code);
	
}

export const getData = (data) => {
	const rank_solo = data.filter(game => game.seasonId === 1 && game.matchingTeamMode === 1)

	const ch_data = getCharacter(rank_solo, 1);
	console.log(ch_data.length);
}