const Decorator = require("./Decorator");
const path = require("path");
const FileReaderFactory = require("./FileReaderFactory");

class DescriptionDecorator extends Decorator {
    constructor(pattern) {
        super(pattern);
    }

    async addData() {
        if (this.pattern instanceof Decorator) {
            await this.pattern.addData();
            this.pattern = this.pattern.pattern
        }
        const filePath = `PatternsData/${this.pattern.type}`;
        const fileReaderFactory = new FileReaderFactory();
        const jsonReader = fileReaderFactory.createFileReader(path.join(filePath, "descriptions.json"));
        const desc = await jsonReader.read()
        this.pattern.description = desc[this.pattern.name];
    }
}

module.exports = DescriptionDecorator;
