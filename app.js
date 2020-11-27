'use strict'

const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
//app.set('port',(process.env.PORT || 3000 ))
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engin', 'ejs')
const morgan = require('morgan')
app.use(morgan('dev'))
const winston =  require('winston')
//const timeFormat = ()=> new Date().toLocaleTimeString()
var now = (function () {
  var year = new Date(new Date().getFullYear().toString()).getTime();
    return function(){
       return Date.now() - year
  }
})();
const timeFormat = new Date()


let logger = winston.createLogger({
 transports: [
     new (winston.transports.Console)({
         level: 'info',
         colorize: true,
       }),
     new (winston.transports.File)({
         name: 'error',
         filename: 'errors.log',
         level: 'error',
         //timestamp: timeFormat,
         handleExceptions: true
        }),
     new (winston.transports.File)({
        name: 'server',
        filename: 'server.log',
        level: 'info',
        //timestamp: timeFormat
        })
   ],
   exitOnError: false
})

logger.stream = {
    write: function(message, encoding){
       logger.info(message)
   }
}

app.use(morgan('combined',{ 'stream': logger.stream}))

//logger.emitErrs = false
var msgerr =["Error for log file!"];
msgerr.push(timeFormat)
//logger.error(msgerr)


app.get('/',function(req,res){
    res.status(200).json({name: 'tobi'})
})

//let debug = require('./debug')
//debugger

//const sum = require('./temp')
// sum (100).then( result =>{
//    console.log(result)
//
  //}).catch( error => logger.error('error async function sum(x)-temp.js'))
// }).catch( error => logger.error(error))


app.listen(PORT,() => logger.info(`${String.fromCodePoint(9749)} is ready on port ${PORT}`)) 

module.exports = {app}