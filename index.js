const express = require('express');
const WebPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

const publicVapidKey = PUBLIC_VAPIDKEY;
const privateVapidKey = PRIVATEVAPIDKEY;

WebPush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe',(req, res) => {
    const subscription = req.body;

    res.status(201).json({});

    const payload = JSON.stringify({title:'Push Test'});

    WebPush.sendNotification(subscription, payload).catch(err => console.error(err));
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));