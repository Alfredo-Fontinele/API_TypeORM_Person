import { AppDataSource } from './data-source'
import { app } from './app'

(async () =>{
    const PORT = 3333
    await AppDataSource.initialize().then(() => {
        app.listen(PORT, () => {
            console.log(`\nServer is running on port: http://localhost:${PORT}\n`)
        })
    }).catch(err => console.log(err))
})()
