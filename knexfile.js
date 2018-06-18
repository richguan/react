module.exports = {
	client: 'mysql',
	debug: true,
	connection: {
		hoar: 'us-cdbr-iron-east-04.cleardb.net',
		user: 'bd51a505be0cb8',
		password: 'dd70f697',
		database: 'heroku_e36bfe6c13dbe64'
	},
	migrations: {
		tableName: 'migrations'
	},
}