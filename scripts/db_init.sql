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
  _id serial NOT NULL,
  email VARCHAR NOT NULL,
  session_token VARCHAR NOT NULL,
  CONSTRAINT users_pk PRIMARY KEY (_id)
);

CREATE TABLE posts (
  _id serial NOT NULL,
  user_id INTEGER NOT NULL,
  company VARCHAR NOT NULL,
  position VARCHAR NOT NULL,
  date_apply DATE NOT NULL,
  status VARCHAR NOT NULL,
  salary INTEGER,
  contact VARCHAR, 
  reference VARCHAR,
  link VARCHAR, 
  notes TEXT,
  CONSTRAINT post_fk0 FOREIGN KEY (user_id) REFERENCES users (_id)
)

CREATE TABLE GoogleOauthToken (
  access_token text,
  access_token_expires_in INTEGER,
  acesss_token_issued_at DATE,
  code text,
  refresh_token text,
  access_token_expires_at DATE,
  CONSTRAINT GoogleOauthToken_fk0 FOREIGN KEY (access_token) REFERENCES users (session_token) 
)