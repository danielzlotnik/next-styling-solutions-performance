This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What's this about

Comparing SSR performance of css-in-js VS compile-time styling solutions.

## Getting Started

Create a production build:

```bash
npm run build
# or
yarn build
```

Start a local server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000).

From there, you could navigate to:

- [http://localhost:3000/styled-components](http://localhost:3000/styled-components)
- [http://localhost:3000/css-modules](http://localhost:3000/css-modules)
- [http://localhost:3000/comparison](http://localhost:3000/comparison?count=15)

## How do we compare?

### Pages

In order to make sure the comparison is fair - we created 2 versions of the exact same page.

The page does not fetch any data or perform any async operations that might compromise the results, but just renders static IMDB json data.

The components and their styles are 100% identical.

`_app.getInitialProps` has been added in order to opt-out from nextJS automatic static optimisation. 

### Response Time Measurement

The app uses the [response-time](https://www.npmjs.com/package/response-time) express middleware in order to measure the response time.

The middleware adds the `X-Response-Time` header to every response.

The header value represents the elapsed time from when a request enters the middleware until the headers are written out to the client.

### Comparing

Visiting [http://localhost:3000/comparison?count=15](http://localhost:3000/comparison?count=15) would send 15 sequential `HEAD` requests to the styled-components page in a `200ms` interval and collect their response times.

It'll do the same for the css-modules page and then print the results of each sample and the average.

