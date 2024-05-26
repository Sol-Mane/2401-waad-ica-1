# Database Designs

This section outlines the databases used by the project.

## Books Table

The following attributes create a book record in the project:

- varchar(22) Primary Key -> isbn
- varchar(128) -> title
- int -> author_id
- int -> genre_id

## Genres Table

- serial Primary Key -> id
- varchar(128) -> name

## Authors Table

- serial Primary Key -> id
- varchar(128) -> name

## Users Table

The following attributes create a user record in the project:

- serial Primary Key -> id
- varchar(32) -> username
- varchar[n] -> hashed_password

## Genre Table

# REST API Endpoint Design

The following endpoints are exposed by the back-end:

- GET /books -> gets all the books stored in the database
- POST /login -> Allows a user to authenticate and receive a JWT in return
- POST /books/new_book -> Allows an authenticated user to add a book to the database
- PUT /books/:isbn -> Allows an authenticated user to change a book in the database
- DELETE /books/:isbn -> Allows an authenticated user to delete a book

# Project Milestones And Timelines

The following weeks are relative to the start of thr work on the ICA.

1. Finalized application design, database design draft (Week 1)
1. Finalized Database Design (Week 2)
1. Backend Functionality Draft (Week 3)
1. Frontend Functionality Draft (Week 4)
1. Integrating Backend with Database (Week 5)
1. Integrating Frontend with backend (Week 6)
1. Finalizing Backend-Database Integration (Week 7)
1. Finalizing Backend-Frontend Integration (Week 8)
1. Finalizing Backend-Frontent Integration (Week 9)
1. Testing and refinement (Week 10-)
