import axios from 'axios'
import { key } from '../key'

const getGamesAPI = async (userNum, next) => {
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

export default getGamesAPI