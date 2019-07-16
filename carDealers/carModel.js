const db = require('../data/dbConfig')


module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  let query = db('car_dealer as p');

  if (id) {
    return query.where('p.id', id).first();

  }
  return query
}

function insert(Car) {
  return db('car_dealer')
    .insert(Car)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db('car_dealer')
    .where('id', id)
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db('car_dealer')
    .where('id', id)
    .del()
    .then(()=> this.get())
}


