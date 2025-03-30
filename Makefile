include .env
export $(shell sed 's/=.*//' .env)

start-db:
	@echo "Starting PostgreSQL container..."
	docker-compose up -d postgres  # Only start the PostgreSQL container

start-app:
	@echo "Starting all containers..."
	docker-compose up -d 

stop:
	@echo "Stopping all containers..."
	docker-compose down

migrate:
	@echo "Running migrations..."
	docker exec bayapay_app npx sequelize-cli db:migrate

rollback:
	@echo "Rolling back the last migration..."
	docker exec bayapay_app npx sequelize-cli db:migrate:undo

psql:
	@echo "Connecting to PostgreSQL database..."
	docker exec -it $(POSTGRES_HOST) psql -U $(POSTGRES_USER) -d $(POSTGRES_DB)

seed:
	@echo "Seeding the database..."
	docker exec  bayapay_app npx sequelize-cli db:seed:all

unseed:
	@echo "Rolling back all seeds..."
	docker exec bayapay_app npx sequelize-cli db:seed:undo:all

logs:
	@echo "Viewing logs from Node.js container..."
	docker-compose logs -f bayapay_app

help:
	@echo "Available commands:"
	@echo "  start-db         Start the PostgreSQL container"
	@echo "  start-app        Start the Node.js application container"
	@echo "  stop             Stop all containers"
	@echo "  migrate          Run all migrations"
	@echo "  rollback         Rollback the last migration"
	@echo "  psql             Open psql prompt to interact with the database"
	@echo "  seed             Seed the database with initial data"
	@echo "  unseed           Rollback all seeds"
	@echo "  logs             View logs from the Node.js container"
