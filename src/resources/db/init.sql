-- Create database 'natural_db'
CREATE DATABASE natural_db;

-- Create user 'natural' with password 'natural'
CREATE USER 'natural_user'@'localhost' IDENTIFIED BY 'natural';	

-- Grant privileges to user on database
GRANT ALL PRIVILEGES ON natural_db.* TO 'natural_user'@'localhost';


-- Create schemas
USE 'natural_db';

CREATE TABLE professors (
	id bigint(19) not null auto_increment,
	first_name varchar(500) not null,
	last_name varchar(500) not null,
	email varchar(500) not null,
	password varchar(500),
	primary key(id)
);

CREATE TABLE students (
	id bigint(19) not null auto_increment,
	first_name varchar(500) not null,
	last_name varchar(500) not null,
	email varchar(500) not null,
	password varchar(500),
	primary key(id)	
);

CREATE TABLE classrooms (
	id bigint(19) not null auto_increment,
	id_professor bigint(19) not null,
	name varchar(500) not null,
	primary key(id),
	foreign key (id_professor) references professors(id)
);

CREATE TABLE exercises (
	id bigint(19) not null auto_increment,
	id_classroom bigint(19) not null,
	name varchar(500) not null,
	description text not null,
	result text not null,
	level smallint(4) not null,
	primary key(id),
	foreign key (id_classroom) references classrooms(id)
);

CREATE TABLE submissions (
	id bigint(19) not null auto_increment,
	id_exercise bigint(19) not null,
	id_student bigint(19) not null,
	solution text not null,
	approved tinyint(1) not null default false,
	primary key(id),
	foreign key (id_exercise) references exercises(id),
	foreign key (id_student) references students(id)
);

CREATE TABLE observations (
	id bigint(19) not null auto_increment,
	id_submission bigint(19) not null,
	id_professor bigint(19) not null,
	description text not null,
	primary key(id),
	foreign key (id_submission) references submissions(id),
	foreign key (id_professor) references professors(id)
);

CREATE TABLE students_classrooms (
	id_student bigint(19) not null,
	id_classroom bigint(19) not null,
	primary key(id_student, id_classroom),
	foreign key (id_student) references students(id),
	foreign key (id_classroom) references classrooms(id)
);





