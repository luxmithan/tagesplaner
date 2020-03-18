/**
 * Author:      Luxmithan Sukumar
 * File name:   createDatabse.sql
 * Version:     1.0
 * Description: Script to create Database for Tagesplaner
 */

CREATE DATABASE IF NOT EXISTS dayplanner_db;

USE dayplanner_db;

-- Creates a table for users and their data
CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(12) UNIQUE NOT NULL,
  `firstname` VARCHAR(40) NOT NULL,
  `lastname` VARCHAR(40) NOT NULL,
  `fullname` VARCHAR(81) GENERATED ALWAYS AS (CONCAT(`firstname`,' ',`lastname`)) VIRTUAL,
  `role` ENUM('Lehrperson', 'Lernende/r') NOT NULL,
  `grade` ENUM('in17', 'in18', 'in19'),
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Creates a table for the goals of each user  
CREATE TABLE `daygoal` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `goal` VARCHAR(30) NOT NULL,
  `description` TEXT NOT NULL,
  `comment` VARCHAR(255),
  `date` DATE NOT NULL DEFAULT (curdate()),
  `userFK` INT NOT NULL,
  `finished` BOOLEAN NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  CONSTRAINT `user_ID`
    FOREIGN KEY (`userFK`)
    REFERENCES `user` (`id`)
    -- If a user gets deleted, then his daygoal-entries get deleted as well
    ON DELETE CASCADE
 );
 
-- Creates a joined view which gets selected by the endpoint /api/goal/getAll
CREATE VIEW `daygoals` AS
SELECT 
  `daygoal`.`id`,
  `goal`,
  `description`,
  `comment`,
  `date`,
  `userFK`,
  `finished`,
  `fullname` AS userfull,
  `grade`
FROM `daygoal`
  JOIN `user` ON `daygoal`.`userFK`=`user`.`id`
  ORDER BY `firstname` ASC, `goal` ASC;
  