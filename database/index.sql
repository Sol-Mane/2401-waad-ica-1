CREATE TABLE books (
    isbn VARCHAR(22) PRIMARY KEY,
    title VARCHAR(128) NOT NULL,
    author VARCHAR(128) NOT NULL,
    publisher VARCHAR(128) NOT NULL,
    publisher_city VARCHAR(128) NOT NULL,
    year_of_publication DATE NOT NULL,
    genre VARCHAR(32) NOT NULL,
    base64_encoded_cover TEXT
);

INSERT INTO books (isbn, title, author, publisher, publisher_city, year_of_publication, genre, base64_encoded_cover) VALUES
('9780143039969', '1984', 'George Orwell', 'Penguin Books', 'London', '1949-06-08', 'Dystopian Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTA='),
('9780061120084', 'To Kill a Mockingbird', 'Harper Lee', 'Harper Perennial Modern Classics', 'New York', '1960-07-11', 'Southern Gothic Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTE='),
('9780062387240', 'The Great Gatsby', 'F. Scott Fitzgerald', 'Scribner', 'New York', '1925-04-10', 'Literary Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTI='),
('9780743273565', 'The Catcher in the Rye', 'J.D. Salinger', 'Little, Brown and Company', 'Boston', '1951-07-16', 'Coming-of-age Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTM='),
('9780141189784', 'Brave New World', 'Aldous Huxley', 'Vintage Books', 'London', '1932-10-11', 'Dystopian Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTQ='),
('9780062315007', 'The Bell Jar', 'Sylvia Plath', 'Harper Perennial Modern Classics', 'New York', '1963-01-14', 'Semi-autobiographical Fiction', 'aHR0cHM6Ly93d3cubGFyYWRiZWVkLmNvbS9pbWFnZXMvaW1hZ2VzLzEyMzQ1Njc4OTU=');


CREATE TABLE users (
    username VARCHAR(32) NOT NULL,
    encrypted_password_hash VARCHAR NOT NULL
);


-- Insert sample data into the users table
INSERT INTO users (username, encrypted_password_hash) VALUES
('alice', '5f4dcc3b5aa765d61d8327deb882cf99'), -- Password: "password"
('bob', 'e99a18c428cb38d5f260853678922e03'), -- Password: "abc123"
('charlie', '098f6bcd4621d373cade4e832627b4f6'), -- Password: "test"
('david', 'b5c0b187fe309af0f4d35982fd961d7e'), -- Password: "1234"
('eve', '1f3870be274f6c49b3e31a0c6728957f'); -- Password: "secure"