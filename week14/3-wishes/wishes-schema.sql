CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO wishes (name) VALUES ("some people wish for fishes");
INSERT INTO wishes (name) VALUES ("I want some yellow pants.");
INSERT INTO wishes (name) VALUES ("I wish for a yellow parakeet");
INSERT INTO wishes (name) VALUES ("I wish I was an Oscar Meyer Weiner Dog");
