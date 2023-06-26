const express = require("express");
const FileReaderFactory = require("../Tools/FileReaderFactory");
const DirectoryReader = require("../Tools/DirectoryReader")
const path = require("path");
const fs = require("fs");
const {log} = require("debug");
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
    console.log(desc)
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
    const { type } = req.query;
    if (type === null || type === undefined) {
        res.status(400).send("Patterns type is not defined!");
        return;
    }

    const filePath = `PatternsData/${type}`;
    const fileReader = new DirectoryReader(filePath);
    const jsonReader = fileReaderFactory.createFileReader(path.join(filePath, "descriptions.json"));
    const desc = await jsonReader.read()
    try {
        const content = await fileReader.read()
        const patternsObject = await Promise.all(content.map(async (pattern) => {
            const imagePath = path.join('PatternsData/images', `${pattern.name}.jpg`);
            try {
                pattern.description = desc[pattern.name];
                pattern.image = await fileReaderFactory.createFileReader(imagePath).read();
            } catch (error) {
                console.error(error);
            }

            return pattern;
        }));
        res.json(patternsObject);
    } catch (error) {
        res.status(500).send('Error reading file.');
    }
});


module.exports = router;