#!/bin/bash

until nc -z db 5432; do
  echo "$(date) - Warten auf die Datenbank..."
  sleep 1
done

DATABASE_PRISMA_URL=$DATABASE_URL POSTGRES_URL_NON_POOLING=$DATABASE_URL npx prisma db push

psql $DATABASE_URL -f db/init.sql || true

npm start
