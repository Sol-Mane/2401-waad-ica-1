create database ica;
create user backend password '123qwe123';
grant pg_read_all_data TO backend;
grant pg_write_all_data TO backend;
grant usage on schema public to backend;
