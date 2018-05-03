const knex = require('knex')({
    client: 'pg',
    connection: {
      host: '127.0.0.1', 
      user: 'macbookair', 
      password: '', 
      database: 'getaway'
    }
  });

const addVictim = function(phone, name, lat, lng, injured, stuck, last_seen, priority) {
  console.log("insert requested for addVictim");

	return knex('victims').insert({phone, name, lat, lng, injured, stuck, last_seen, priority}).then(()=> console.log(`victim added successfully`)).catch((error)=> console.error(error));
}

const addVictimStatus = function(phone, note) {
  return knex('status').insert({phone, note}).then(()=> console.log(`victim status updated successfully`)).catch((error)=> console.error(error));
}

const getVictims = function() {
  return knex('victims').select();
}

const getVictimStatus = function() {
  return knex('status').select();
}

module.exports = {
  knex: knex,
  addVictim: addVictim,
  addVictimStatus: addVictimStatus,
  getVictims: getVictims,
  getVictimStatus: getVictimStatus
};