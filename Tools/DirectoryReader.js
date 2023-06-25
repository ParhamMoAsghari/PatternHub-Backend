const fs = require("fs").promises;
const FileReaderStrategy = require("./FileReaderStrategy")
const path = require("path");

class DirectoryReader extends FileReaderStrategy {
    constructor(path) {
        super(path);
    }

    async read() {
        try {
            const files = await fs.readdir(this.filePath);
            const fileObjects = await Promise.all(files.map(async file => {
                const fileExtension = path.extname(file);
                const fileName = path.basename(file, fileExtension);
                const { mtime } = await fs.stat(path.join(this.filePath, file));
                return { name: fileName, extension: fileExtension, lastModification: mtime };
            }));
            return fileObjects;
        } catch (e) {
            console.error(e);
            return;
        }
    };
}

module.exports = DirectoryReader;