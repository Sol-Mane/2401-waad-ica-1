Role Name
=========

This role is used to facilitate a deployment of a 3-layer application with an
Nginx as an SSL terminating front-end with Let'sEcnrypt as the certificate
authority. This role also ensures automatic certificate renewal.

Requirements
------------

This role requires setting up a `cerbot` account and changing the provided
`nginx.conf` to account for the changes made.

Role Variables
--------------

This role provides the following varibles in `/defaults/main.yml`:

```yaml

backend_application_dir: /opt/backend
frontend_application_dir: /opt/frontend
```

The variables set the directories to which the frontend and backend portion
respectively should be installed to.

Dependencies
------------

This role doesn't have any external dependencies as all the code inside realies
on the `ansible.builtin` collection.

Example Playbook
----------------

This example playbook deploys the library\_application on a localhost the
escalation requires root privilages and can be solved either via runtime
parameters of `ansible-playbook` or via consistent setting in `ansible.cfg`.

```yaml
---
- name: Deploy the library application locally
  hosts: localhost
  roles:
    - library_application
```

License
-------

GPL-3.0-or-later

Author Information
------------------

Gabriel Michael Homa <gabriel\.homa _at sign_ htd\.cz>
