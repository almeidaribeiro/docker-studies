const express = require('express')
const Sequelize = require('sequelize')
const app = express()
const sequelize = new Sequelize({
  database: 'pacoca',
  username: 'pacoca',
  password: 'ebom',
  dialect: 'postgres'
})

app.get('/', (req, res) => {
  res.status(200).send('olaaarrr')
})

sequelize.authenticate()
  .then(() => {
    console.log('deu bom')

    app.listen(process.env.PORT)
  })
  .catch((erro) => console.log(erro))

