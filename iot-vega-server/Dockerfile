FROM ubuntu:20.04
ENV SERVER_VERSION='1.2.1'

WORKDIR /opt

RUN echo 'deb http://security.ubuntu.com/ubuntu xenial-security main' > /etc/apt/sources.list.d/xenial.list

RUN apt-get update && apt-get install -y libssl-dev libglib2.0-0 libssl1.0.0 libgssapi-krb5-2 libldap-2.4-2 libpq5 wget

RUN wget -q "https://iotvega.com/content/ru/soft/server/IOT%20Vega%20Server%20(linux)%20v${SERVER_VERSION}.tar.gz" -O iot-vega-server.tar.gz
RUN tar xzf iot-vega-server.tar.gz
RUN dpkg -i "/opt/IOT Vega Server (linux) v${SERVER_VERSION}/x64/iot-vega-server-1.2.1.deb"

RUN ln -sf /usr/lib/x86_64-linux-gnu/libpq.so.5 /opt/iot-vega-server/libpq.so.5

#RUN ln -s /opt/iot-vega-server/history_1.log /dev/stdout

# TODO: gen file "on-the-fly" from env-vars
COPY ./settings.conf /opt/iot-vega-server/settings.conf

WORKDIR /opt/iot-vega-server

ENV LD_LIBRARY_PATH=/opt/iot-vega-server

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait
RUN chmod +x /wait

CMD /wait && /opt/iot-vega-server/iot-vega-server
