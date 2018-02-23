CREATE TABLE pins (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  subtitle VARCHAR,
  type INTEGER,
  lat      FLOAT,
  long     FLOAT,
  coord GEOGRAPHY(POINT)
);