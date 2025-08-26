CREATE TABLE Edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at DATETIME NOT NULL
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

DROP TABLE Edusign;
-- ALTER TABLE Edusign ADD COLUMN users_id INT;
-- ALTER TABLE Edusign DROP COLUMN firstname;
-- ALTER TABLE Edusign DROP COLUMN lastname;
-- ALTER TABLE Edusign DROP COLUMN email;
-- ALTER TABLE Edusign ADD FOREIGN KEY (users_id) REFERENCES users(id);

CREATE TABLE Edusign (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    users_id INT,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (users_id) REFERENCES users(id)
);

INSERT INTO users (firstname, lastname, email) VALUES ('Ada', 'Lovelace', 'ada@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Beatrice', 'Worsley', 'bea@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Bella', 'Guerin', 'bella@test.fr');
INSERT INTO users (firstname, lastname, email) VALUES ('Barbara', 'Chase', 'barbara@test.fr');

--Requete Niveau Facile

SELECT * FROM users;

SELECT * FROM users WHERE firstname = 'Ada';

SELECT * FROM users WHERE firstname LIKE 'B%';

SELECT COUNT(*) FROM users; 

SELECT COUNT(*) FROM users WHERE firstname LIKE 'B%';

SELECT firstname FROM users;

--Requete Niveau Moyen
INSERT INTO Edusign (users_id, created_at) 
SELECT id  '2024-05-30 09:30:00'
FROM users WHERE firstname = 'Ada' AND lastname = 'Lovelace';

INSERT INTO Edusign (users_id, created_at) 
SELECT id, '2024-05-30 09:30:00'
FROM users WHERE firstname = 'Bella' AND lastname = 'Guerin';

INSERT INTO Edusign (users_id, created_at) 
SELECT id, '2024-09-01 09:30:00'
FROM users

SELECT * FROM Edusign ORDER BY created_at DESC, users_id ASC;

SELECT * FROM Edusign WHERE created_at LIKE '2024-05-30 09:30:00%'
--Requete Niveau Moyen +

SELECT created_at, COUNT(*) AS number_apprenant
FROM Edusign
GROUP BY created_at;

-- SELECT created_at, COUNT(*) AS volume
-- FROM Edusign 
-- WHERE firstname LIKE 'Bella%';