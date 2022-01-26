create database tasklist;
create table tasks 
(
`id` int not null auto_increment primary key,
 `name` nvarchar(50),
 instructions nvarchar(125),
 dueDate date,
 isCompleted bit
);
insert into tasks values(0,"Calyn","Do a cardio workout", '2022-02-25',0);
insert into tasks values(0,"Shawn","Do 25 Pullups", '2022-02-25', 0);
insert into tasks values(0,"Stoney","Take a nap", '2022-02-25',0);

select * from tasks;
