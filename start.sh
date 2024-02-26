#!/bin/bash

until nc -z db 5432; do
  echo "$(date) - Warten auf die Datenbank..."
  sleep 1
done

DATABASE_URL=$DATABASE_URL npx prisma migrate reset --force

npm start
