// to access env via inject service or controller
// How to use
// ```
// constructor(private configService: ConfigService) {}
// const nodeEnv = this.configService.get('NODE_ENV');
// ```
export default () => ({
    NODE_ENV: process.env.NODE_ENV,
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
    MYSQL_PORT: process.env.MYSQL_PORT,
});
