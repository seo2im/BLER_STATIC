import save from './srcs/users/users'

const main = () => {
	save('./data/users.json', 2000, 3000)
}

main();