/**
 * Author:      Luxmithan Sukumar
 * File name:   autoDelete.sql
 * Version:     1.0
 * Description: Event scheduler for automated data deletion
 */
 
USE dayplanner_db;

SET GLOBAL event_scheduler = ON;

CREATE EVENT autoDelete 
	ON SCHEDULE EVERY 1 MONTH
	DO DELETE FROM dayplanner_db.daygoal
	WHERE `daygoal`.`date` < (CURDATE() - INTERVAL 6 MONTH);