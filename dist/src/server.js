"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("./data-source");
const app_1 = require("./app");
require("dotenv/config");
const PORT = process.env.PORT || 3333;
data_source_1.AppDataSource.initialize().then(() => {
    app_1.app.listen(PORT, () => {
        console.log(`\nServer is running on port: http://localhost:${PORT}\n`);
    });
}).catch(err => console.log(err));
//# sourceMappingURL=server.js.map