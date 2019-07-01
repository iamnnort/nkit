# React Starter Kit

## Components

- React
- SSR (Server Side Rendering)
- Typescript
- Redux
  
## Installation

```bash
git clone https://github.com/nikitapavets/react-ssr-ts-redux
cd react-ssr-ts-redux
cp .env.example .env
yarn install
yarn build && yarn build:server
```
  
## Development

Client Side

```bash
yarn start
```

Server Side

```bash
yarn start:server
```
  
## Production

Without docker

```bash
yarn deploy
```

With docker

```bash
docker-compose build
docker-compose up -d
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

[Nikita Pavets](https://github.com/nikitapavets)

## License

[MIT](https://choosealicense.com/licenses/mit/)
