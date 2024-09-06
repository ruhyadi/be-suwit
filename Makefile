start_db:
	docker compose -f docker-compose.db.yaml up

stop_db:
	docker compose -f docker-compose.db.yaml down