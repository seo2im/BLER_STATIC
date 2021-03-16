import fs from 'fs'
import sleep from '../module/sleep'
import getGamesAPI from '../api/getGamesAPI'

const saveUserData = async (filename, start, end) => {
    let data
    let str = ""

    for (let i = start; i < end; i++) {
        try {
            data = await getGamesAPI(i)
            str = JSON.stringify(
                {
                    userNum : data.userGames[0].userNum,
                    nickname : data.userGames[0].nickname,
                })
            console.log(str)
            fs.appendFileSync(filename, str + ",\n", err => console.log(err))
        } catch (err) {
            console.log(err)
        }
        await sleep(1100)
    }
}

const save = async (filename, start, end) => {
    await saveUserData(filename, start, end)
}

export default save