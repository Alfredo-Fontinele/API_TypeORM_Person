"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatValuesBodyToLower = void 0;
const formatValuesBodyToLower = (body) => {
    const values = Object.entries(body);
    const newBody = {};
    values.forEach(item => {
        const property = item[0];
        const value = item[1].toLowerCase();
        return newBody[property] = value;
    });
    return newBody;
};
exports.formatValuesBodyToLower = formatValuesBodyToLower;
//# sourceMappingURL=formatValuesBodyToLower.js.map