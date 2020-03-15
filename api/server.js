const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./DB');

const imagesRoute = require('./routes/image.route');
var version=process.env.version || "1.0"

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname,'../dist/angular7crud')));

app.get('/getversion',function(req,res){
  console.log('Version '+version);
  res.status(200).json({version:version})
});
app.use('/image', imagesRoute);

app.use('/',function(req,res){
  res.sendFile(path.join(__dirname,'../dist/angular7crud'))
});
const port = 4000;

const server = app.listen(port, function(){
  console.log('Listening on port ' + port);
  console.log('Version '+version);
});