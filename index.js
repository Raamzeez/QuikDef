const axios = require('axios')
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

const operate = async (words, filePath) => {
	rl.question(
		'\nDo you want to write the definitions into a file (y/n)? ',
		(writeFile) => {
			if (writeFile === 'y') {
				fs.truncate(filePath || 'definitions.txt', 0, (err) => {
					if (err) {
						console.log('Unable to delete data in the file')
					}
				})
			}
			words.forEach(async (word) => {
				const updatedWord = word.charAt(0).toUpperCase() + word.slice(1)
				let string
				try {
					const result = await axios.get(baseURL + word)
					const definition = result.data[0].meanings[0].definitions[0].definition
					const writeString = `\n${updatedWord}: ${definition}\n`
					string = writeString
				} catch (err) {
					const errorString = `\nError in finding the definition for the word: ${word}\n`
					string = errorString
				}
				if (writeFile === 'y') {
					fs.appendFile(filePath || 'definitions.txt', string, (err) => {
						if (err) {
							console.error('Error writing to file for the word ' + word)
						}
					})
				}
				console.log(string)
			})
		}
	)
}

rl.question(
	'\nDo you want to type the words, or do  you want to get the words from a file (type/read)? ',
	(typeOrRead) => {
		if (typeOrRead === 'type') {
			rl.question(
				'\nType the words you want the definitions of by separating each word with a comma and space: ',
				(rawWords) => {
					const words = rawWords.split(', ')
					operate(words, 'definitions.txt')
				}
			)
		} else if (typeOrRead === 'read') {
			rl.question(
				'\nType the exact name of the file in this directory that you want to read from (ex: definitions.txt): ',
				(filePath) => {
					fs.readFile(filePath, 'utf8', (err, data) => {
						if (err) {
							console.log(
								'Error reading the file. Please make sure it is in the same directory and that there are no restrictions on it'
							)
						} else {
							const words = data.split('\n')
							operate(words, filePath)
						}
					})
				}
			)
		} else {
			console.log('You entered an incorrect answer. Please run the program again')
			process.exit(1)
		}
	}
)
