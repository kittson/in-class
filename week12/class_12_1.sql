CREATE DATABASE favoriteDB;
USE favoriteDB;
CREATE TABLE favorite_foods (
	food VARCHAR(50),
	score INTEGER(10)
);
CREATE TABLE songs (
	song VARCHAR(100),
	artist VARCHAR(50)
);
CREATE TABLE favorite_movies (
	film VARCHAR(100) NOT NULL,
	five_times BOOLEAN,
	score INTEGER(10)	
);
INSERT INTO people
	(name,has_pet,pet_name,pet_age)
	VALUES ("joe", true, "foo foo", 22);

SELECT COUNT(*) FROM people;
UPDATE people SET name='Maggie' WHERE name='Bart';

INSERT INTO favorite_foods (ID,food,score) VALUES (1,"broccoli", 10);
INSERT INTO favorite_foods (ID,food,score) VALUES (2,"broccoli", 8);
INSERT INTO favorite_foods (ID,food,score) VALUES (3,"ice cream", 1);

ALTER TABLE favorite_foods ADD foodie INTEGER,
PRIMARY KEY (foodie);

