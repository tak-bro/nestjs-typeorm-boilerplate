// To access env via inject ConfigService
// Please refer modules/dummy/dummy.service.ts
export default () => ({
    NODE_ENV: process.env.NODE_ENV,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_PORT: process.env.MYSQL_PORT,
});
