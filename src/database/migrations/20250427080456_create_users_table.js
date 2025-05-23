/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
	return knex.schema.createTable("users", (table) => {
		table.increments("user_id").primary();
		table.string("full_name", 100).notNullable();
		table.string("email").notNullable().unique();
		table.string("phone", 20).notNullable();
		table
			.enu("gender", ["male", "female"], {
				useNative: true,
				enumName: "gender_enum"
			})
			.notNullable(),
			table.text("password").notNullable(),
			table.timestamps({ useTimestamps: true, defaultToNow: true });
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => {
	await knex.schema.dropTableIfExists("users");
	await knex.raw("DROP TYPE IF EXISTS gender_enum");
};
