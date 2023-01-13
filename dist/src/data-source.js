"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("dotenv/config");
const setDataSourceConfig = () => {
    const migrations = `${__dirname}/**/migrations/*.{ts,js}`;
    const entities = `${__dirname}/**/entities/*.{ts,js}`;
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === 'test') {
        return {
            type: 'sqlite',
            database: ':memory:',
            synchronize: true,
            entities: [entities]
        };
    }
    else if (nodeEnv === 'production') {
        return {
            type: 'postgres',
            url: process.env.DATABASE_URL,
            entities: [entities],
            migrations: [migrations]
        };
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
    };
};
const configDataSource = setDataSourceConfig();
exports.AppDataSource = new typeorm_1.DataSource(configDataSource);
//# sourceMappingURL=data-source.js.map