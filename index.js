const axios = require('axios')
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const operate = async (array, write) => {
	array.forEach(async (word) => {
		const updatedWord = word.charAt(0).toUpperCase() + word.slice(1)
		try {
			const result = await axios.get(baseURL + word)
			const definition = result.data[0].meanings[0].definitions[0].definition
			const string = `\n${updatedWord}: ${definition}\n`
			if (write === 'y') {
				fs.appendFile('definitions.txt', string, () => {
					console.log(string)
				})
			}
		} catch (err) {
			const errorString = `\nError in retrieving the definition of the word: ${updatedWord}\n`
			if (write === 'y') {
				fs.appendFile('definitions.txt', errorString, () => {
					console.log(errorString)
				})
			}
		}
	})
}

rl.question(
	'Input all the words you want the definition of with a comma and space separating each word: ',
	(rawWords) => {
		const words = rawWords.split(', ')
		rl.question(
			'Do you want to write the definitions in a file? (y/n) ',
			(writeToFile) => {
				operate(words, writeToFile)
			}
		)
	}
)
