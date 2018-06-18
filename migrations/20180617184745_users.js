const { saltHashPassword } = require('../store');

exports.up = async function up (knex) {
	await knex.schema.table('user', table => {
		table.string('salt').notNullable();
		table.string('encrypted_password').notNullable();
	});

	const users = await knex('user');
	await Promise.all(users.map(convertPassword));
	await knex.schema.table('user', table => {
		table.dropColumn('password');
	});

	function convertPassword (user) {
		const { salt, hash } = saltHashPassword(user.password);
		return knex('user')
			.where({ id: user.id })
			.update({
				salt,
				encrypted_password: hash
			});
	}
}

exports.down = function down (knex) {
	return knex.schema.table('user', table => {
		table.dropColumn('salt');
		table.dropColumn('encrypted_password');
		table.string('password').notNullable();
	});
}