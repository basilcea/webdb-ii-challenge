
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('car_dealer').del()
    .then(function () {
      // Inserts seed entries
      return knex('car_dealer').insert([
        {id: 1, VIN: '123HJK213FG1KM145' ,Make:'Toyota',Model:"Corolla" ,Mileage:12234,Transmission:"Manual",Status:'Used'},
        {id: 2, VIN: '123HJK212FG1KM146' ,Make:'Honda',Model:"Accord" ,Mileage:1256,Transmission:"Automatic",Status:'Clean'}
      ]);
    });
};
