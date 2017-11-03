
import { renderStaticMarkup } from './../src/helpers/htmlGenerator.js';
import compress from 'compression';
import express from 'express';
import http from 'http';


import path from 'path';

const app = express();
const MILLISECONDS_IN_A_DAY = 86400000;
const DEFAULT_PORT = 5000;
const NO_OF_DAYS = 30;
app.use(compress());

// Adding caching for 30 days
const cacheTime = MILLISECONDS_IN_A_DAY * NO_OF_DAYS;

app.use('/js/?',
  express.static(path.join(__dirname, './../dist/build'), { maxAge: cacheTime }));

app.use('/css/?',
  express.static(path.join(__dirname, './../dist/build'), { maxAge: cacheTime }));

app.use('/icons/?',
  express.static(path.join(__dirname, './../src/assets'), { maxAge: cacheTime }));

app.use('/assets/?',
  express.static(path.join(__dirname, './../src/assets'), { maxAge: cacheTime }));


// For Home page
app.get('/', (req, res) => res.send(renderStaticMarkup(req)));


// catch 404 and forward to error handler
app.use((req, res) => {
  const err = new Error('Not Found');
  err.message = 'Not Found';
  res.status(404).send('Not Found');
});

//error handler
app.use((err, req, res, next)=> {
  res.status(err.status || 500).send({status: err.status ? `${err.status}` : 500, message: err.message});
  next(err);
});


const server = http.createServer(app);
const port = normalizePort(process.env.PORT || DEFAULT_PORT);

/**
* Listen on provided port, on all network interfaces.
*/
server.listen(port, function() {
  console.log('Express server listening on port ' + server.address().port);
});
server.on('error', onError);
server.on('listening', onListening);


/*
* Normalize a port into a number, string, or false.
*/
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;}

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ?
    'Pipe ' + port :
    'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

/* istanbul ignore next */
function onListening() {
  const addr = server.address();
  /* istanbul ignore next */
  const bind = typeof addr === 'string' ?
    'pipe ' + addr :
    'port ' + addr.port;
  console.log('Listening on ' + bind);
}
