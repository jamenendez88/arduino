/* var express = require('express');
var app = express();
var io = require('socket.io')(app.listen(8081));
var five = require('johnny-five');

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


var board = new five.Board({
    repl: false
});

board.on('ready', function () {
    var speed, commands, motors;
    var anode = new five.Led.RGB({
        pins: {
            red: 9,
            green: 11,
            blue: 10
        },
        isAnode: true
    });

    commands = null;

    anode.on();
    anode.color("#efe13d");

    anode.blink(1000);

    var blink = true;

    io.on('connection', function (socket) {
        socket.on('azul', function () {
            anode.on();
            anode.color("#3366CC");
        });

        socket.on('verde', function () {
            anode.on();
            anode.color("#009900");
        });

        socket.on('rojo', function () {
            anode.on();
            anode.color("#FF0000");
        });

        socket.on('stop', function () {
            if (blink) {
                anode.stop(); // to stop blinking
                blink = false;
            }
            else {
                anode.blink(1000);
                blink = true;
            }
        });

        socket.on('off', function () {
            anode.off();  // to shut it off (stop doesn't mean "off")
        });

        socket.on('on', function () {
            anode.on(); // to turn on, but not blink
        });

    });
}); */
// Importamos la librería y creamos las variables.
/* const five = require('johnny-five');

// Inicializamos el framework.
const board = new five.Board()

// Cuando Arduino haya recibido el código...
board.on('ready', () => {

  // Registramos el pin 13 con la librería Led.
  const led = new five.Led(13)

  // Hacemos que el LED alterne on/off rápidamente.
  led.strobe()
}) */
/* var five = require("johnny-five");
var board = new five.Board();

// The board's pins will not be accessible until
// the board has reported that it is ready
board.on("ready", function() {
  console.log("Ready!");

  var led = new five.Led(13);
  led.blink(500);
}); */
/* var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.on();


  this.on("exit", function() {
    led.off();
  });
}); */
/* var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(13);
  led.on();


  this.on("exit", function() {
    led.off();
  });
}); */
/* var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Use the board's `samplingInterval(ms)` to
  // control the actual MCU sampling rate.
  //
  // This will limit sampling of all Analog Input
  // and I2C sensors to once per second (1000 milliseconds)
  this.samplingInterval(1000);


  // Keep in mind that calling this method
  // will ALWAYS OVERRIDE any per-sensor
  // interval/rate/frequency settings.
}); */
/* var five = require("johnny-five");
var temporal = require("temporal");
var board = new five.Board();

board.on("ready", function() {
  var events = [];
  var strobe = new five.Pin(13);

  temporal.loop(500, function(loop) {
    strobe[loop.called % 2 === 0 ? "high" : "low"]();
  });


  // Pin emits "high" and "low" events, whether it's
  // input or output.
  ["high", "low"].forEach(function(state) {
    strobe.on(state, function() {
      if (events.indexOf(state) === -1) {
        console.log("Event emitted for:", state, "on", this.addr);
        events.push(state);
      }
    });
  });

  var analog = new five.Pin("A0");

  // Query the analog pin for its current state.
  analog.query(function(state) {
    console.log(state);
  });
}); */
/* var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // The "custom" property is available
  // to all component class constructors
  var sensor = new five.Sensor({
    pin: "A0",
    custom: {
      a: 1,
      b: 2,
    }
  });

  console.log(sensor.custom.a);
  console.log(sensor.custom.b);
}); */

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  // Create a standard `led` component instance
  var led = new five.Led(13);

  // "blink" the led in 500ms
  // on-off phase periods
  led.blink(500);
});