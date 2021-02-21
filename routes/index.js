const { Posts } = require('../mongo/Schemas')
const { addPost } = require('../mongo/helpers');
const express = require("express");
const jsonParser = express.json();
const { v4: uuidv4 } = require('uuid');
const { addUser } = require('../mongo/helpers');
module.exports = function (app) {

    app.get("/", function (req, res) {

        res.send('hello world')
    });
    app.post("/addUser", jsonParser, async function (req, res) {
        if (!req.body) return res.sendStatus(400);
        console.log(`reqbody`, req.body)
        const email = req.body.email;
        const result = await addUser({ email })
        res.send(result);
    });
    app.get('/getPosts/:id', async function (req, res) {
        const id = req.params.id;
        const posts = await Posts.findOne({ id });
        res.send(posts)

    });

    app.get("/getPosts", async function (req, res) {

        //const id = req.params.id;
        const posts = await Posts.find({});
        res.send(posts)
    });
}