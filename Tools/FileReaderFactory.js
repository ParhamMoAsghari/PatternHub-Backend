const MarkdownFileReader = require('./MarkdownFileReader');
const path = require("path");

class FileReaderFactory {
    createFileReader(filePath) {
        const fileExtension = path.extname(filePath);
        switch (fileExtension) {
            case '.md':
                return new MarkdownFileReader(filePath);
            // Add more cases for other file types if needed
            default:
                throw new Error(`Unsupported file extension: ${fileExtension}`);
        }
    }
}

module.exports = FileReaderFactory;