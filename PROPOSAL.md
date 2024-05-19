# Database Designs

This section outlines the databases used by the project.

## Book Database
The following attributes create a book record in the project:

* varchar(128) -> Title
* varchar(128) -> Author
* varchar(128) -> Publisher
* varchar(128) -> Publisher's City
* int          -> Year of publication
* varchar(22)  -> International Standard Book Number (ISBN)
* varchar[n]   -> Base64 Encoded Cover

## User Database
The following attributes create a user record in the project:

* varchar(32) -> Username
* varchar[n]  -> Encrypted Password Hash

# REST API Endpoint Design

The following endpoints are exposed by the back-end:

* /books -> gets all the books stored in the database
* /login -> Allows a user to authenticate and receive a JWT in return
* /change_password -> Allows an authenticated user to change his password
* /create_book -> Allows an authenticated user to add a book to the database
* /update_book -> Allows an authenticated user to change a book in the database
* /delete_book -> Allows an authenticated user to delete a book


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
