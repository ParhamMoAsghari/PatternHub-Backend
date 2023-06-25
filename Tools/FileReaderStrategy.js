class FileReaderStrategy {
    constructor(filepath) {
        this.filePath = filepath;
    }
    read() {
        throw new Error('readFile method must be implemented');
    }
}

module.exports = FileReaderStrategy;