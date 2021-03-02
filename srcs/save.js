import axios from 'axios'
import fs from 'fs'
import {key, userNum} from './key'

const getAPI = async (userNum, next) => {
	const response = await axios({
		url : `https://open-api.bser.io/v1/user/games/${userNum}?next=${next ? next : ""}`,
		method : 'get',
		headers : {
			'accept' : 'application/json',
			'x-api-key' : key
		}
	})
	return response.data;
}

const sleep = (ms) => new Promise((res) => setTimeout(res, ms))

const getData = async (filename, userNum) => {
	const set = [];
	let str = "";

	let data = await getAPI(userNum);
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
		data = await getAPI(userNum, data.next);
		if (data.code !== 200)
			return "Error occur";
		str = JSON.stringify(data, null, 2);
		console.log(str);
		fs.appendFileSync(filename, str, (err) => {
			console.log("file error");
			console.log(err);
		})
		await sleep(1100);
	}
}

const save = async (filename, userNum) => {
	await getData(filename, userNum);
}

export default save;
