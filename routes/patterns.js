const express = require("express");
const FileReaderFactory = require("../Tools/FileReaderFactory");
const DirectoryReader = require("../Tools/DirectoryReader")
const router = express.Router();
const fileReaderFactory = new FileReaderFactory();

router.get('/behavioral', async (req, res) => {
    const {pattern} = req.query;
    const filePath = `PatternsData/behavioral/${pattern}.md`;

    const fileReader = fileReaderFactory.createFileReader(filePath);
    try {
        const content = await fileReader.read(filePath);
        res.send(content);
    } catch (error) {
        res.status(500).send('Error reading file.');
    }
});

router.get('/structural', async (req, res) => {
    const {pattern} = req.query;
    const filePath = `PatternsData/structural/${pattern}.md`;

    const fileReader = fileReaderFactory.createFileReader(filePath);
    try {
        const content = await fileReader.read(filePath);
        res.send(content);
    } catch (error) {
        res.status(500).send('Error reading file.');
    }
});

router.get('/creational', async (req, res) => {
    const {pattern} = req.query;
    const filePath = `PatternsData/creational/${pattern}.md`;
    console.log(filePath)

    const fileReader = fileReaderFactory.createFileReader(filePath);
    try {
        const content = await fileReader.read(filePath);
        res.send(content);
    } catch (error) {
        res.status(500).send('Error reading file.');
    }
});

router.get('/list', async (req, res) => {
    const {type} = req.query;
    if (type === null || type === undefined)
        res.status(400).send("Patterns type is")
    const filePath = `PatternsData/${type}`;

    const fileReader = new DirectoryReader(filePath);
    try {
        const content = await fileReader.read();
        res.json(content);
    } catch (error) {
        res.status(500).send('Error reading file.');
    }
});


module.exports = router;