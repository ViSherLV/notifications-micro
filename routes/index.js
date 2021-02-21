const express = require("express");
const jsonParser = express.json();
const { addUser } = require('../mongo/helpers');
const { events } = require('../enums');
const axios = require('axios');
module.exports = function (app) {

    app.post("/addUser", jsonParser, async function (req, res) {
        if (!req.body) return res.sendStatus(400);
        console.log(`reqbody`, req.body)
        const email = req.body.email;
        const result = await addUser({ email })
        console.log(`events.addUser`, events.addUser)
        axios.post('http://localhost:3003/events', { event: events.addUser, data: null });
        res.send(result);
    });
    app.post('/events', jsonParser, async function (req, res) {
        const { event, data } = req.body;
        switch (event) {
            case 'addPost':
                console.log(`event addPost`)
                break;
            case 'getPosts':
                console.log(`event getPosts`)
                break;
            case 'addUser':
                console.log(`event addUser`)
                break;
            default:
                console.log(`Event: ${event}`)
        }
    })
}