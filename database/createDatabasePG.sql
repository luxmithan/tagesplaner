CREATE TYPE role AS ENUM('Lehrperson', 'Lernender');
CREATE TYPE grade AS ENUM('in17', 'in18', 'in19');

CREATE TABLE IF NOT EXISTS "dayplanner_db"."user" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(12) NOT NULL,
	"firstname" VARCHAR(45) NULL DEFAULT NULL,
	"lastname" VARCHAR(45) NULL DEFAULT NULL,
	"fullname" VARCHAR(91) NULL DEFAULT NULL,
	"role" role DEFAULT 'Lernender',
	"grade" grade NULL DEFAULT NULL,
	"password" VARCHAR(255) NULL DEFAULT NULL
 );

 CREATE TABLE IF NOT EXISTS "dayplanner_db"."daygoal" (
  "id" SERIAL PRIMARY KEY,
  "goal" VARCHAR(30) NOT NULL,
  "description" TEXT NOT NULL,
  "comment" VARCHAR(255) NULL DEFAULT NULL,
  "date" DATE NOT NULL DEFAULT (current_date),
  "finished" BOOLEAN NOT NULL DEFAULT FALSE,
  "userFK" INT NULL DEFAULT NULL,
  CONSTRAINT "user"
    FOREIGN KEY ("userFK")
    REFERENCES "user" ("id")
    ON DELETE RESTRICT
    ON UPDATE RESTRICT);

CREATE VIEW "dayplanner_db"."daygoals" AS
SELECT
  "daygoal"."id",
  "goal",
  "description",
  "comment",
  "date",
  "userFK",
  "finished",
  "fullname" AS userfull,
  "grade"
FROM "daygoal"
  JOIN "user" ON "daygoal"."userFK"="user"."id"
  ORDER BY "firstname" ASC, "goal" ASC;