DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

-- Boiler plate SQL db setup
SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;
SET default_with_oids = false;
SET search_path = public;

CREATE TABLE users (
  _id varchar PRIMARY KEY,
  email VARCHAR UNIQUE NOT NULL
);

CREATE TABLE posts (
  post_id SERIAL PRIMARY KEY,
  company VARCHAR NOT NULL,
  position VARCHAR NOT NULL,
  date_apply VARCHAR NOT NULL,
  status VARCHAR NOT NULL,
  salary INTEGER,
  contact VARCHAR, 
  reference VARCHAR,
  link VARCHAR, 
  notes TEXT,
  user_id VARCHAR NOT NULL,
  CONSTRAINT post_fk0 FOREIGN KEY (user_id) REFERENCES users (_id) ON DELETE CASCADE
);
