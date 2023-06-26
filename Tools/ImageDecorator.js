const FileReaderFactory = require("../Tools/FileReaderFactory");
const Decorator = require("./Decorator");

class ImageDecorator extends Decorator {
    constructor(pattern) {
        super(pattern);
    }

    async addData() {
        if (this.pattern instanceof Decorator) {
            await this.pattern.addData();
            this.pattern = this.pattern.pattern
        }
        const filePath = `PatternsData/images/${this.pattern.name}.jpg`;
        const fileReaderFactory = new FileReaderFactory();
        const imageReader = fileReaderFactory.createFileReader(filePath);
        this.pattern.image = await imageReader.read();
    }
}

module.exports = ImageDecorator;