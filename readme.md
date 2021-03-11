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
yarn build
```

## Development

```bash
yarn start
```

## Production

```bash
docker build -f dockerfile -t nkit . --no-cache
docker run -p 9010:80 --name nkit -d nkit
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

[Nikita Pavets](https://github.com/nikitapavets)

## License

[MIT](https://choosealicense.com/licenses/mit/)
