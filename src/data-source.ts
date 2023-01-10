import { DataSource, DataSourceOptions } from 'typeorm'
import 'dotenv/config'

const setDataSourceConfig = ():DataSourceOptions => {
    const migrations = `${__dirname}/**/migrations/*.{ts,js}`
    const entities = `${__dirname}/**/entities/*.{ts,js}`
    const nodeEnv = process.env.NODE_ENV
    if (nodeEnv === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entities]
        }
    }
    else if (nodeEnv === 'production') {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [entities],
            migrations: [migrations]
        }
    }
    return {
        type: 'postgres',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: false,
        logging: true,
        entities: [entities],
        migrations: [migrations]
    }
}

const configDataSource = setDataSourceConfig()
export const AppDataSource = new DataSource(configDataSource)
