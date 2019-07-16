
exports.up = function(knex) {
  return knex.schema.createTable('car_dealer', tbl =>{
      tbl.increments();
      tbl.string('VIN' , 55).unique().notNullable();
      tbl.string('Make',128).notNullable();
      tbl.text('Model',128).notNullable();
      tbl.integer("Mileage", 50).notNullable();
      tbl.text("Transmission", 128)
      tbl.text("Status", 128)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('car_dealer')
  
};
