const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.HOST, 
      user: process.env.USER, 
      password: process.env.PASSWORD, 
      database: process.env.DATABASE
    }
  });

const addVictim = function(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) {
  return knex('victims').insert({phone, name, lat, lng, in_danger_zone, injured, stuck, priority}).then(()=> console.log(`victim added successfully`)).catch((error)=> console.error(error));
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