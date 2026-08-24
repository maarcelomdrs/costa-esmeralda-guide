/*
        TODO:Criar quando nois botar o sistema de login

CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(99) NOT NULL,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
*/

CREATE TABLE neighborhoods (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR(99) NOT NULL UNIQUE,
    
    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE beaches (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    neighborhood_id INTEGER NOT NULL,
    name VARCHAR(99) NOT NULL,
    description TEXT,
    image_url TEXT,
    google_maps_url TEXT,

    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id)
);

CREATE TABLE tours (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    neighborhood_id INTEGER NOT NULL,
    name VARCHAR(99) NOT NULL,
    description TEXT,
    image_url TEXT,
    google_maps_url TEXT,

    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id)
);

CREATE TABLE rental_houses (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    neighborhood_id INTEGER NOT NULL,
    name VARCHAR(99) NOT NULL,
    description TEXT,
    image_url TEXT,
    whatsapp_number VARCHAR(20) NOT NULL,

    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id)
);

CREATE TABLE trails (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    neighborhood_id INTEGER NOT NULL,
    name VARCHAR(99) NOT NULL,
    description TEXT,
    image_url TEXT,
    google_maps_url TEXT,

    creation_date TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (neighborhood_id) REFERENCES neighborhoods(id)
);