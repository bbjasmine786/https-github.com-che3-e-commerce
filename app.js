'use strict'  //jasmine

const express =  require('express')
const bodyParser = require('body-parser')
const app = express()
// app.set('port',(process.env.PORT || 3000 ))
const PORT = process.env.PORT || 3000
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.set('view engin', 'ejs')
const morgan = require('morgan')
app.use(morgan('dev'))
const winston =  require('winston')
//var winston = require('winston');

//const timeFormat = ()=> new Date().toLocaleTimeString()
var now = (function () {
  var year = new Date(new Date().getFullYear().toString()).getTime();
    return function(){
       return Date.now() - year
  }
})();
const timeFormat = new Date()
console.log('timeFormat', timeFormat)

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
            timestamp: timeFormat,
            handleExceptions: true
           }),
        new (winston.transports.File)({
            name: 'server',
            filename: 'server.log',
            level: 'info',
            timestamp: timeFormat,
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



   
   //logger.error( timeFormat + ' Error for log file')
     

app.get('/',function(req,res){
    res.status(200).json({name: 'tobi'})
})

// const fs = require('fs')
// fs.readFile('file.txt', function (err, data){
//   throw new Error('something went wrong')
//   console.log(data)
// })

//for temp.js 

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
// const sum = require('./temp')
//     sum (100).then( result =>{
//         console.log ( 'jasmine', result)
//     }).catch( error => logger.error(error))

//let debug = require('./debug')
//debugger

app.listen(PORT,() => logger.info(`${String.fromCodePoint(9749)} is ready on port ${PORT}`))

module.exports = {app}