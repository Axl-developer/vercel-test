import app from '../src'

app.get('/', (req, res) => {
  res.send('Hello World')
})

export default app