CREATE DATABASE getaway;

\c getaway;

CREATE TABLE victims (
	id SERIAL PRIMARY KEY,
	phone VARCHAR(15) NOT NULL,
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

/* VICTIMS */

INSERT INTO victims(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) VALUES ('4153358620', 'Nuno', '37.5497', '-122.081', 'true', 'true', 'true', '5');

INSERT INTO victims(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) VALUES ('1112223333', 'Andre', '37.538', '-122.085', 'true', 'false', 'false', '2');

INSERT INTO victims(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) VALUES ('2223334444', 'Wilson', '37.56', '-122.09', 'true', 'true', 'false', '2');

INSERT INTO victims(phone, name, lat, lng, in_danger_zone, injured, stuck, priority) VALUES ('5556667777', 'Nathan', '37.54', '-122.095', 'true', 'false', 'true', '2');


/* STATUS */
INSERT INTO status(phone, note) VALUES ('4153358620', 'Losing lots of blood here! I am type A+');

INSERT INTO status(phone, note) VALUES ('5554443333', 'I lost my boy Nuno in the explosion! I know he\'s still alive out there!');


/* 
if postgreSQL is installed and psql is not working, open another window in the terminal and run the bash command:
	pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
*/