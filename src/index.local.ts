import app from "./index"
const apiPort = process.env.PORT || 3000

app.listen(apiPort, () => {
  console.log('---------------------------------------------\n')
  console.log(`✅ Listening on http://localhost:${apiPort}`)
})