start_db:
	docker compose -f docker-compose.db.yaml up

stop_db:
	docker compose -f docker-compose.db.yaml down

start_be:
	docker compose -f docker-compose.be.devel.yaml up

stop_be:
	docker compose -f docker-compose.be.devel.yaml down