CREATE DATABASE getaway;
\c getaway;

CREATE TABLE victims (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(15),
	name VARCHAR(50),
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	in_danger_zone BOOLEAN NOT NULL,
	injured BOOLEAN NOT NULL,
	stuck BOOLEAN NOT NULL,
	priority SMALLINT,
	last_seen TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE status (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(15) NOT NULL,
	note VARCHAR(500) NOT NULL,
	posted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO victims(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) VALUES ('4153358620', 'Nuno Neves', '37.5497', '-122.081', 'true', 'true', 'true', '5');

INSERT INTO status(phone, note) VALUES ('4153358620', 'Losing lots of blood here! I am type A+');

/* 
if postgreSQL is installed and psql is not working, open another window in the terminal and run the bash command:
	pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
*/