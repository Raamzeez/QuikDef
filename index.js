const axios = require('axios')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const getData = async (array) => {
	array.forEach(async (word) => {
		const result = await axios.get(baseURL + word)
		const definition = result.data[0].meanings[0].definitions[0].definition
		console.log('\n' + definition + '\n')
	})
}

rl.question(
	'Input all the words you want the definition of with a comma and space separating each word: ',
	(rawWords) => {
		const words = rawWords.split(', ')
		getData(words)
	}
)
