FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install

EXPOSE 80

CMD [ "bun", "dev" ]