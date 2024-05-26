# Login Credentials

As per the ICA specification the login credentials are preset to:
`admin`, `secret`.

# Architecture

This project servers as a demonstration of a standard three layer architecture;
as opposed to Event-driven or hexagonal architecture.

## Overview of a 3-layer architecture

Three-layer architecture is a software design pattern that divides an
application into three distinct layers, each with specific responsibilities.
This separation aims to make the system more modular, maintanable and scaleable.

Three-layer architecture is commonly used as a reference point in job role
definitions. The three layers are:

### Data-access Layer (Database)

This layer manages data storage and retrieval, it's used to abstract the
underlaying data sources and to provide a clean interface to the business logic
layer (backend).

It includes database management systems, data access objects. Technologies
include SQL databases (PostgreSQL, MariaDB), NoSQL databases (MongoDB,
Cassandra).

### Business-logic Layer (Backend)

This layer contains the core functionality and business rules of the
application. It processes user input from the presentation layer, performs
operations/calculations, makes decisions and handles data transformation.

It includes business logic componenets, services and workflows. Technologies
used on this layer consists of server-side languages like Node.js, Java, Python.

### Presentation Layer (Frontend)

This layer handles user interface and user interaction. It's responsible for
displaying data to the user and capturing user input.

It includes web pages, mobile interfaces or desktop applications. Technologies
used on this layer consists of HTML/CSS, JavaScript or native UI components.

## WAAD-ICA-1 Specifics

Concrete technological requirements are outlined in the ICA, they are as
follows:

* Data-Access Layer -> PostgreSQL
* Business-logic Layer -> Express.JS
* Presentation Layer -> Alpine.JS

# Development Process

The development process followed the techniques and decisions demonstrated in
the lessons provided by the module, they're as follows:

* Integrated Development Environment -> Visual Studio Codium
* API Client -> Thunder Client

Deployment decisions were left to the developer's discretion, as such it was
decided to go with technologies most suited for the project, they're as follows:

* Operating System -> Debian 12
* Deployment Framework -> Ansible
* SSL Terminating Webserver -> Nginx
* Public Certificate Authority -> LetsEncrypt
* Hosting Platform -> Wedos
* Service manager -> systemd

# Deployment decisions

As described in the section above, Wedos was picked as the hosting platform
after a consultation with the module leader. This decision was driven by Wedos
support for a fully customized OS deployment including an encrypted disk.

When it comes to the OS preference was given to Debian 12 as this project
technologically relies on JavaScript, which has it's own ecosystem and as such
doesn't come from Debian's stable repositories which allows taking full
advantage of the robust baseline provided by Debian without impeding access the
latest technoligies.

Debian 12 uses systemd as its init system, integrating the project natively with
it allows for integration with Debian native tooling and simplifies the service
management due to the abstraction into custom services.

Pairing Nginx with LetsEncrypt for SSL terminiting webservers was driven by the
ease of set-up with certbot - LetsEncrypt certificate management software.
Having Nginx in front of the front-end allows for faster development cycles and
for service status handling not directly depended on the application itself.

# Challenges

This section outlines the various obstacles and difficulties encountered
throughout fulfilling this ICA and by exploring these challenges aims to provide
a comprehensive understanding of the project's complexity and the measures taken
to overcome them.


# Application Description

This application is used to demonstrate building a 3-layer application with
Express.js, Alpine.JS with a PostgreSQL backend as well as demonstrating the
deployment of such application with Ansible.

The application provides a simplified book repository. An unauthorized user
(Reader) is able to browse through the repository. An authorized user
(Librarian) can create, update, delete books.
