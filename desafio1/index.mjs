import express from 'express'

const main  = () => {
    const port = 3000
    const app = express()
    app.get('/', (req, res) => res.send('<h1>Maratona Full Cycle 2.0</h1>'))
    app.listen(port, () => console.log(`Servidor ouvindo a porta ${port}`))
}

main()