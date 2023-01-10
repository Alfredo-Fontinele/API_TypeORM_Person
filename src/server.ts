import { AppDataSource } from './data-source'
import { app } from './app'
import 'dotenv/config'

const PORT = process.env.PORT

AppDataSource.initialize().then(() => {
    app.listen(PORT, () => {
        console.log(`\nServer is running on port: http://localhost:${PORT}\n`)
    })
}).catch(err => console.log(err))
