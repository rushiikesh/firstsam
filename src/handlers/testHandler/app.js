// const {checkDb} = require('../../layers/nodejs/node_modules/mysql-layer/index')

exports.lambdaHandler = async (event, context) => {
	let env = {
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	};

	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Hello World", env, event, context }),
	};
};