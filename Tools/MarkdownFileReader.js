const FileReaderStrategy = require('./FileReaderStrategy');
const fs = require('fs');
const marked = require('marked');

class MarkdownFileReader extends FileReaderStrategy {
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
                    resolve(data);
                }
            });
        });
        const htmlContent = await promise;
        return htmlContent;
    }
}

module.exports = MarkdownFileReader;