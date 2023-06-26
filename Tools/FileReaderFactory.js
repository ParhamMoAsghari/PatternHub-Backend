const MarkdownFileReader = require('./MarkdownFileReader');
const path = require("path");
const JsonFileReader = require("./JsonFileReader");
const ImageFileReader = require("./ImageFileReader");

class FileReaderFactory {
    createFileReader(filePath) {
        const fileExtension = path.extname(filePath);
        switch (fileExtension) {
            case '.md':
                return new MarkdownFileReader(filePath);
            case '.json':
                return new JsonFileReader(filePath);
            case '.jpg':
                return new ImageFileReader(filePath);
            default:
                throw new Error(`Unsupported file extension: ${fileExtension}`);
        }
    }
}

module.exports = FileReaderFactory;