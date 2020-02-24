# React Starter Kit

## Components

- React
- SSR (Server Side Rendering)
- Typescript
- Redux
- Redux-Saga
- i18n

## Installation

```bash
git clone https://github.com/nikitapavets/nkit
cd nkit
cp .env.example .env
yarn install
yarn build && yarn build:server
```

## Development

Without Docker

Client Side

```bash
yarn start
```

Server Side

```bash
yarn start:server
```

With Docker

```bash
docker-compose build
docker-compose up -d
```

## Production

Without Docker

```bash
yarn deploy
```

With Docker

```bash
docker build -f dockerfile.prod -t nkit .
docker run -p 9010:3000 --name nkit -d nkit
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

[Nikita Pavets](https://github.com/nikitapavets)

## License

[MIT](https://choosealicense.com/licenses/mit/)
