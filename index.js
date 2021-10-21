const app  = require('./app')

app.start()

process.on('SIGINT', async()=>{
  await app.stop()
})