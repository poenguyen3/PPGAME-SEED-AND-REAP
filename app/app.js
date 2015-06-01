var app = require('express')(),
    http = require('http').Server(app),
    skio = require('socket.io')(http);

var config = {
      port: 8888,
      devDir: '/builds/dev',
      env: process.env.NODE_ENV
    }


switch (config.env) {
  case 'development': {
    app.get('/', function(req, res){
      res.sendFile(__dirname + config.devDir + '/index.html');
    });
    app.use(function(req, res) {
      if (req._parsedUrl != null) {
        res.sendFile(__dirname + config.devDir + req._parsedUrl.path);
      }
    });
  }break;
  default: {
    app.get('/', function(req, res){
      res.sendFile(__dirname + config.devDir + '/index.html');
    });
    app.use(function(req, res) {
      res.sendFile(__dirname + config.devDir + req._parsedUrl.path);
    });
  }
}

skio.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected!');
  });
});


http.listen(config.port, function(){
  console.log('Listening on port ' + config.port)
});
