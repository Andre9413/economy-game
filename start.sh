#!/bin/bash


# Start Postgres-Datenbanken
echo "Starte Datenbanken..."
docker-compose up -d


# Warte ein paar Sekunden bis die DBs bereit sind#
sleep 5


# Baue alle Module
echo "Baue Projekt..."
./mvnw clean install -DskipTests


# Starte Services nacheinander in separaten Terminals
echo "Starte Gateway-Service..."
(cd gateway-service && mvn spring-boot:run) &


sleep 2
echo "Starte User-Service..."
(cd user-service && mvn spring-boot:run) &


sleep 2
echo "Starte Company-Service..."
(cd company-service && mvn spring-boot:run) &

wait