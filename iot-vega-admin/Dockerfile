FROM nginx:1.21.5

ENV VERSION="1.1.6"

WORKDIR /opt

RUN curl "https://iotvega.com/content/ru/soft/server/IOT%20Vega%20Admin%20Tool%20V${VERSION}_ru.zip" > iot-vega-admin-tool.zip
RUN apt-get update && apt-get install -y unzip
RUN unzip iot-vega-admin-tool.zip
RUN mv "/opt/IOT Vega Admin Tool V${VERSION}_ru/Admin Tool/" /usr/share/nginx/admin-tool
RUN rm -rf /usr/share/nginx/html
RUN mv "/usr/share/nginx/admin-tool" /usr/share/nginx/html

WORKDIR /usr/share/nginx/html

COPY ./config.js /usr/share/nginx/html/config.js
