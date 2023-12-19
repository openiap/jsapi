var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.use(express.json());
var schema = require('./apischema.json');
app.post('/*', function (req, res) {
    var _a;
    var urlPath = req.path;
    var path = (_a = schema.paths[urlPath]) === null || _a === void 0 ? void 0 : _a.post;
    if (!path) {
        return res.status(404).send('Path not found in schema');
    }
    var response = path.responses[200];
    var _schema = response.content['*/*'].schema;
    var responseschema = schema.components.schemas[_schema.$ref.replace('#/components/schemas/', '')];
    var reply = {};
    var keys = Object.keys(responseschema.properties);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var prop = responseschema.properties[key];
        if (prop.type === 'string') {
            reply[key] = key + " goes here";
        }
        else if (prop.type === 'integer' || prop.type === 'number') {
            reply[key] = 1;
        }
        else if (prop.type === 'boolean') {
            reply[key] = true;
        }
        else if (prop.type == null) {
            reply[key] = "a " + prop.$ref.replace('#/components/schemas/', '') + " goes here";
        }
        else {
            reply[key] = "a " + prop.type + " goes here";
        }
    }
    return res.json(reply);
});
app.listen(3000);
console.info('Served at port 3000');
//# sourceMappingURL=index.js.map