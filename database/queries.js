const knex = require('knex')({
    client: 'pg',
    connection: {
      host: process.env.HOST, 
      user: process.env.USER, 
      password: process.env.PASSWORD, 
      database: process.env.DATABASE
    }
  });

const addVictim = function(phone, name, lat, lng, injured, stuck, last_seen, priority) {
  knex('contacts').insert({phone:phone, name:name, lat:lat, lng:lng, injured:injured, stuck:stuck, last_seen:last_seen, priority:priority}).then(()=> console.log(`victim added successfully`)).catch((error)=> console.error(error));
}

const addVictimStatus = function(phone, note) {
  knex('contacts').insert({phone: phone, note: note}).then(()=> console.log(`victim status updated successfully`)).catch((error)=> console.error(error));
}

/*
 const getVictim
 const getVictimStatus
*/

module.exports = {
  knex: knex,
  insert: insert
};