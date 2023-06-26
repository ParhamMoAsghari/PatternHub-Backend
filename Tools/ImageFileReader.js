const FileReaderStrategy = require("./FileReaderStrategy");
const fs = require("fs");

class ImageFileReader extends FileReaderStrategy {
    constructor(filePath) {
        super(filePath);
    }

    async read() {
        try {
            const image = await fs.promises.readFile(this.filePath);
            return image.toString('base64');
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

module.exports = ImageFileReader;
