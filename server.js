const express=require('express')
const mysql=require('mysql')
const myconn=require('express-myconnection')
const routes = require('./routes')
const cors = require('cors')

const app=express()

app.use(cors())

app.set('port',9000)

const dbOptions={
    host:'localhost',
    port:'3306',
    user:'sena',
    password:'Fr1010174070*',
    database:'libros'
}

/// Middleware
app.use(myconn(mysql,dbOptions,'single'))

app.use(express.json())

/// Rutas
app.get('/',(req,res)=>{
    res.send('Bienvenido a mi servidor')
 })

 app.use('/api',routes)


app.listen(app.get('port'),()=>{
    console.log(`El puerto corre en: ${app.get('port')}`)
})
