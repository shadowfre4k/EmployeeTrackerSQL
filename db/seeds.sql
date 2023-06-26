INSERT INTO department (names) 
VALUES ("Pilot"),
       ("Strategy"),
       ("Flight"),
       ("Repairs");

INSERT INTO roles (title, salary, department_id) 
VALUES ("Ace Pilot", 100000, 1),
       ("Strategist", 80000, 2),      
       ("Dogfighter", 200000, 3),
       ("Engineer", 180000, 4),
       ("Rival Ace", 300000, 1);
       

INSERT INTO employee (first_name,last_name,role_id,manager_id) 
VALUES ("Fox","Mcloud", 1, NULL),
       ("Peppy","Hare", 2, 1),      
       ("Falco","Lombardi", 3, 1), 
       ("Slipy","Toad", 4, 1), 
       ("Wolf","O'Donnell", 5, Null), 
       ("Andrew","Oikonny", 4, 5), 
       ("Pigma","Dengar", 2, 5), 
       ("Leon","Powalski", 3, 5);