exports.up = function (knex) {
  return knex.schema.createTable("flights", (tbl) => {
    tbl.increments("id");

    tbl.string("origin_city").notNullable();
    tbl.string("origin_airport").notNullable();
    tbl.string("destination_city").notNullable();
    tbl.string("destination_airport").notNullable();
    tbl.decimal("price", 8, 2).notNullable();
    tbl.string("departure_date");
    tbl.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("flights");
};
