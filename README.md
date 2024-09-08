# QuikDef

**QuikDef** is a simple Node.js program designed to quickly fetch the definitions of multiple words. It allows you to either type in the words or read them from a file. You can also choose to write the definitions into a file for future reference. This project was inspired by a homework assignment where definitions for given words were needed.

## Features

- Fetch the definitions for multiple words.
- Option to input words manually or read them from a file.
- Write the definitions to a file if desired.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Raamzeez/QuikDef.git
   cd QuikDef
   
2. Install the dependencies:
  ```bash
  npm install
  ```

3. Run the program:
  ```bash
  node index.js
  ```
## Usage
Choose between typing the words or reading them from a file:

- Type the words manually:
  - When prompted, enter the words separated by a comma and space (e.g., apple, banana, orange).
- Read from a file:
  - Provide the name of the file that contains one word per line. The file must be located in the same directory as the program.
    
You can choose whether to write the definitions to a file. If yes, it will create or overwrite definitions.txt by default, or a file you specify.

## Example 1: Typing Words
```console
Do you want to type the words, or do you want to get the words from a file (type/read)? type
Type the words you want the definitions of by separating each word with a comma and space: apple, banana, orange

Do you want to write the definitions into a file (y/n)? n

Apple: A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.
Banana: An elongated curved tropical fruit that grows in bunches and has a creamy flesh and a smooth skin.
Orange: An evergreen tree of the genus Citrus such as Citrus sinensis.
```

## Example 2: Reading from a File
```console
Do you want to type the words, or do you want to get the words from a file (type/read)? read
Type the exact name of the file in this directory that you want to read from (ex: definitions.txt): words.txt

Do you want to write the definitions into a file (y/n)? y
```

If you choose to write to a file, the definitions.txt file will be created or updated with the word definitions.

## Dependencies
- axios - For making API requests to fetch word definitions.
- Node.js
- Dictionary API - [https://dictionaryapi.dev/](url)

## Contributing
Feel free to open issues or submit pull requests. Contributions are welcome!

## Author
Mohammed Raamiz Abbasi
