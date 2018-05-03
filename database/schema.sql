CREATE DATABASE getaway;
\c getaway;

CREATE TABLE victims (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(15),
	name VARCHAR(50),
	lat REAL NOT NULL,
	lng REAL NOT NULL,
	injured BOOLEAN NOT NULL,
	stuck BOOLEAN NOT NULL,
	last_seen TIMESTAMP,
	priority SMALLINT
)

CREATE TABLE status (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(15) NOT NULL,
	note VARCHAR(500) NOT NULL
)

INSERT INTO victims(phone, name, lat, lng, injured, stuck, last_seen, priority) VALUES ('4153358620', 'Nuno Neves', '37.5497', '-122.081', 'true', 'true', '2018-05-02 18:23:54', '5');

INSERT INTO status(phone, note) VALUES ('4153358620', 'Losing lots of blood here! I am type A+');

/* 

if psql is not working, open another window in the terminal and run the bash:
	pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
*/