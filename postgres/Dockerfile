FROM postgres:14

#COPY init-scripts/ /docker-entrypoint-initdb.d/
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV POSTGRES_DB=task_manager_dev
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_PORT=5432

EXPOSE $POSTGRES_PORT
ENTRYPOINT ["/entrypoint.sh"]
