FROM node:lts-alpine
RUN yarn config set network-timeout 300000 && \
    #apk add g++ make py3-pip && \
    #yarn global add node-gyp && \
    yarn global add piclist && \
    rm -rf /var/cache/apk/* /tmp/*

EXPOSE 36677
