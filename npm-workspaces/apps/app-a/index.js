const hello = require('lib-a');
const {onRequest} = require("firebase-functions/v2/https");

exports.sayhello = onRequest(async (req, res) => {
    res.json({result: hello('World')});
});