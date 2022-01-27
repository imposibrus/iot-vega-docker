FROM nginx:1.21.5

ENV VERSION="1.1.12"

WORKDIR /opt

RUN curl "https://iotvega.com/content/ru/soft/app/IOT%20Vega%20Pulse%20V${VERSION}_ru.zip" > iot-vega-pulse.zip
RUN apt-get update && apt-get install -y unzip
RUN unzip iot-vega-pulse.zip
RUN mv "/opt/IOT Vega Pulse V${VERSION}_ru/Pulse/" /usr/share/nginx/pulse
RUN rm -rf /usr/share/nginx/html
RUN mv "/usr/share/nginx/pulse" /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY ./config.js /usr/share/nginx/html/config.js
COPY ./nginx.conf /etc/nginx/nginx.conf
