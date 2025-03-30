CREATE TABLE
    vehicles (
        id BIGSERIAL PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW ()
    );

CREATE TABLE
    vehicle_status (
        id BIGSERIAL PRIMARY KEY,
        vehicle_id BIGINT NOT NULL REFERENCES vehicles (id) ON DELETE RESTRICT,
        lock_status BOOLEAN NOT NULL,
        current_speed NUMERIC(5, 2),
        battery_level INT CHECK (
            battery_level >= 0
            AND battery_level <= 100
        ),
        status VARCHAR(50), -- ENUM at application level if using TS
        last_updated TIMESTAMP NOT NULL DEFAULT NOW ()
    );

CREATE TABLE
    vehicle_locations (
        id BIGSERIAL PRIMARY KEY,
        vehicle_id BIGINT NOT NULL REFERENCES vehicles (id) ON DELETE RESTRICT,
        latitude NUMERIC(9, 6) NOT NULL, -- If need to make complex query, use geometry instead for now seems like it just storing information.
        longitude NUMERIC(9, 6) NOT NULL,
        last_updated TIMESTAMP NOT NULL DEFAULT NOW ()
    );