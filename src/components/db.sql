CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    level INT DEFAULT 0,
    stamina INT DEFAULT 100,
    experience INT DEFAULT 0,
    strength INT DEFAULT 1,
    dexterity INT DEFAULT 1,
    money INT DEFAULT 100
);