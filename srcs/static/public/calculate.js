export const average = (data, key) => {
	data.reduce((acc, cur) => acc + cur[key], 0) / data.length
}
