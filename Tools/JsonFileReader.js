const FileReaderStrategy = require('./FileReaderStrategy');
const fs = require('fs');

class JsonFileReader extends FileReaderStrategy {
    constructor(filePath) {
        super(filePath);
    }

    async read() {
        const promise = new Promise((resolve, reject) => {
            fs.readFile(this.filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    try {
                        const jsonData = JSON.parse(data);
                        resolve(jsonData);
                    } catch (error) {
                        console.error(error);
                        reject(error);
                    }
                }
            });
        });

        const jsonData = await promise;
        return jsonData;
    }
}

module.exports = JsonFileReader;
