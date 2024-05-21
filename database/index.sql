
CREATE TABLE authors ( 
  id SERIAL PRIMARY KEY,
  name VARCHAR(128)
)

CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  name VARCHAR(32)
)

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    hashed_password VARCHAR NOT NULL
);

CREATE TABLE books (
    isbn VARCHAR(22) PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    author_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    base64_encoded_cover TEXT,
    FOREIGN KEY (author_id) REFERENCES authors(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);



-- Authors
INSERT INTO authors (name) VALUES 
  ('Jane Austen'),
  ('Charles Dickens'),
  ('Leo Tolstoy'),
  ('Fyodor Dostoevsky'),
  ('Gabriel Garcia Marquez');

-- Genres
INSERT INTO genres (name) VALUES 
  ('Fiction'),
  ('Romance'),
  ('Classic'),
  ('Thriller'),
  ('Fantasy');

-- Books
INSERT INTO books (isbn, title, author_id, genre_id, base64_encoded_cover) VALUES 
  ('9780141439587', 'Pride and Prejudice', 1, 2, 'base64_encoded_cover_data_here'),
  ('9781505255607', 'Great Expectations', 2, 3, 'base64_encoded_cover_data_here'),
  ('9781909621862', 'Anna Karenina', 3, 3, 'base64_encoded_cover_data_here'),
  ('9780553211032', 'Crime and Punishment', 4, 4, 'base64_encoded_cover_data_here'),
  ('9780061122415', 'One Hundred Years of Solitude', 5, 1, 'base64_encoded_cover_data_here');

-- Users
INSERT INTO users (username, hashed_password) VALUES
  ('user1', '$2b$10$85JK9Sc81UnPPLa3RC7HD.rl/bEYUvaDcD13JCOekEUDYDjvQGtvS'), -- 123
  ('user2', '$2b$10$85JK9Sc81UnPPLa3RC7HD.rl/bEYUvaDcD13JCOekEUDYDjvQGtvS'), -- 123
  ('user3', '$2b$10$85JK9Sc81UnPPLa3RC7HD.rl/bEYUvaDcD13JCOekEUDYDjvQGtvS'); -- 123

