/**
 * Author:      Luxmithan Sukumar
 * File name:   createRestrictedUser.sql
 * Version:     1.0
 * Description: Script to create a restricted user for Tagesplaner
 */

-- Creates a user with which the webapp accesses the database

CREATE USER 'webuser'@'127.0.0.1' IDENTIFIED BY 'gibbiX12345';
GRANT SELECT, INSERT, UPDATE, DELETE ON dayplanner_db . * TO 'webuser'@'127.0.0.1';
FLUSH PRIVILEGES;