class Decorator {
    constructor(pattern) {
        this._pattern = pattern;
    }

    set pattern(value) {
        this._pattern = value;
    }

    get pattern() {
        return this._pattern;
    }

    addData() {
        throw new Error("This method must be implemented by concrete decorators.");
    }
}
module.exports = Decorator;