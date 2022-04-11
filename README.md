```
cp example.env .env
cp time-corrector.config.example.ini time-corrector.config.ini
# fill .env and time-corrector.config.ini files with your credentials
cp iot-vega-server/settings.example.conf iot-vega-server/settings.conf
# fill iot-vega-server/settings.conf with your credentials
docker-compose up -d
# wait until server creates "deviceattributes" table and add triggers:
cat ./postgres/triggers.sql | docker-compose exec -T pg psql -U postgres lorawan_server
```
