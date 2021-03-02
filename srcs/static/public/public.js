export const getSeason = (data, season) => {
	return data.filter(data => data.seasonId === season);
}
export const getMode = (data, mode) => {
	return data.filter(data => data.matchingTeamMode === mode);
}
export const getCharacter = (data, chCode) => {
	return data.filter(data => data.characterNum === chCode)
}
export const getTier = (data, tier) => {
	if (tier === 'iron')
		return data.filter(data => data.mmrBefore < 400);
	if (tier === 'bronze')
		return data.filter(data => data.mmrBefore < 800);
	if (tier === 'silver')
		return data.filter(data => data.mmrBefore < 1200);
	if (tier === 'gold')
		return data.filter(data => data.mmrBefore < 1600);
	if (tier === 'platinum')
		return data.filter(data => data.mmrBefore < 2000);
	if (tier === 'diamond')
		return data.filter(data => data.mmrBefore < 2400);
	if (tier === 'eternity')
		return data.filter(data => data.mmrBefore >= 2400);
	return [];
}
export const getTime = (data, time) => {
	return data.filter(data => data.playTime >= time)
}
export const getKill = (data, kill) => {
	return data.filter(data => data.playerKill >= kill)
}
export const getRank = (data, rank) => {
	return data.filter(data => data.gameRank <= rank)
}
