
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db/db.json')

// Para permitir que os dados sejam alterados, altere a linha abaixo
// colocando o atributo readOnly como false.
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server está em execução!')
})