var http=require('http')
var app=require('./index')
var ser=http.createServer(app)
ser.listen(3000,console.log("server is running"))