import fs from 'fs'
import sleep from '../module/sleep'
import getGamesAPI from '../api/getGamesAPI'

const GamesDataToFile = async (filename, userNum) => {
	let str = "";

	let data = await getGamesAPI(userNum);
	if (data.code !== 200)
		return "Error occur";
	str = JSON.stringify(data, null, 2);
	console.log(str);
	fs.appendFileSync(filename, str, (err) => {
		console.log("file error");
		console.log(err);
	})
	await sleep(1100);
	while (data.next)
	{
		data = await getGamesAPI(userNum, data.next);
		if (data.code !== 200)
			return "Error occur"
		str = JSON.stringify(data, null, 2);
		console.log(str);
		fs.appendFileSync(filename, str, (err) => {
			console.log("file error")
			console.log(err)
		})
		await sleep(1100)
	}
}

const save = async (filename, userNum) => {
	await GamesDataToFile(filename, userNum)
}

export default save
