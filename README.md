This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Requirements / Useful Tools
- VSCode
- Plugins: Code Coverage, DotENV, Jest, Prettier
- Yarn

## Getting Started

```bash
# Install Dependencies
yarn add
# Setup envs
cp .env.example .env.local
# Fill .env.local
# Run Development Server
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to see the result.


## Testing

Tests can be added to './test'. Frontend tests can be added to './test/pages'.

```bash
yarn test
```

## Docker
- Docker and Docker-Compose have to be installed
- `.env.local` has to be filled correctly
- Run:
```bash
docker-compose up --build
```

Visit [http://localhost:80](http://localhost:80) in your browser to see the result.

## Sources

Sources are located at `./src`.
Pages are located at `./scr/app`. 
APIs are located at `./src/app/api`.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

# By pushing to main branch a deployment on 'https://hannover96-virtuelles-museum-prototyp.vercel.app/' is triggered
