/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
	return knex.schema.createTable("modules", (table) => {
		table.increments("module_id").primary();
		table.string("title", 100).notNullable();
		table
			.integer("course_id")
			.unsigned()
			.notNullable()
			.references("course_id")
			.inTable("courses")
			.onDelete("CASCADE");
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
	return knex.schema.dropTableIfExists("modules");
};
