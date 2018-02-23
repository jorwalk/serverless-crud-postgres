create domain latitude_t as double precision not null 
                                             check(value>=-90 and value<=90);
create domain longitude_t as double precision not null 
                                              check(value>-180 and value<=180);

create type geocoord_t as (latitude latitude_t, longitude longitude_t);

CREATE TABLE pins (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  subtitle VARCHAR,
  type INTEGER,
  updated TIMESTAMP WITHOUT TIME ZONE
  coords geocoord_t
);

-- insert into my_table(geocoord) values ((31.778175,35.22995));
-- select id, (geocoord).* from my_table;
