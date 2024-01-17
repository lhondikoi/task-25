const express = require('express');
const fs = require('fs');
const { createTimestamp } = require('./utils');
const { emit } = require('nodemon');

const port = 8001
const timestamp_dir = "./timestamp-files/"


const app = express()

app.get('/', (req, res) => {
    res.send("Hello, World!")
})

app.get('/log', (req, res) => {
    try {
        fs.writeFile(`./timestamp-files/${createTimestamp()}.txt`, "", (e)=>console.log(e))
        res.send("Successfully created timestamp.")
    } catch (e) {
        res.send({
            "msg": "There was an error creating the timestamp."
        })
    }
})

app.get('/list', (req, res) => {
    // const files = []
    try {
        fs.readdir(timestamp_dir, (err, files) => {
            res.send({
                "msg": `Successfully retrieved ${files.length} files.`,
                "files": files
            })
        })
    } catch(e) {
        console.log(e)
        res.send({
            "msg": "There was an error retriving the list of files."
        })
    }
})

app.listen(port, () => {
    console.log(`Server running. Listening on port ${port}.`)
})