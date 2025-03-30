# bayapay

# README

## Simple Vehicle API

This API provides a simple way to retrieve vehicles using a single endpoint.

### Prerequisites

- Docker
- Docker Compose
- Make (for running commands)

### How to Run

1. Clone the repository.
2. Create a `.env` file with the necessary environment variables. Example:

```
POSTGRES_USER=your_user
POSTGRES_PASSWORD=your_password
POSTGRES_DB=your_database
POSTGRES_PORT=5432
POSTGRES_HOST=bayapay_db #fix
SERVER_PORT=3000
```

3. Run the following command to start the application:

```
make start-app
```

### Available Endpoint

#### Retrieve Vehicles

```
GET http://localhost:${PORT}/api/v1/vehicles
```

##### Query Parameters

- `page`: Pagination page number (default: `1`).
- `limit`: Number of vehicles per page (default: `10`).
- `sort`: Sort by a specific field (e.g., `vehicle_id`, `type`, `battery_level`, etc.).
- `order`: Sort order, either `ASC` or `DESC` (default: `DESC`).

##### Valid Sort Fields

- `vehicle_id`
- `type`
- `lock_status`
- `current_speed`
- `battery_level`
- `latitude`
- `longitude`
- `last_updated`

### Additional Commands

To see other available commands, run:

```
make help
```

### Example Request

```
GET http://localhost:${PORT}/api/v1/vehicles?page=1&limit=10&sort=last_updated&order=DESC
```

This will return a list of vehicles based on the specified query parameters.
