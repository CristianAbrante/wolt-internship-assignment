<h1 align="center">
  <img src="./assets/wolt-logo.png" alt="genetics.js logo" width="200">
</h1>

<h4 align="center">
    Assignment for the 2021 backend summer internship at Wolt
</h4>

<p align="center">
  <a href="#installation">Installation</a> •
  <a href="#Node server">Roadmap</a> •
  <a href="#Test">Contributing</a> •
  <a href="#Author">Authors</a>
</p>

## 🏗 Installation

For installing the dependencies it is needed to use [yarn](https://yarnpkg.com/), in case you do not have yarn installed, you can check the [installation page](https://classic.yarnpkg.com/en/docs/install/#mac-stable).

Once, yarn is installed simply open a terminal in the base folder of the project and type:

```
yarn
```

All the dependencies should be now installed correctly.

## 🖥 Node server

In case you want to execute the api in _production_ mode, you have to use this command:

```
yarn start
```

Then a sever will be running in port 3000 (this default port can be changed using environment variables). The api can then be checked in [http://localhost:3000/discovery](http://localhost:3000/discovery?lon=24.91&lat=60.16).

## 🧪 Tests

The application is tested using unit tests with [Jest](https://jestjs.io/) library. The directory containing the tests could be found in `src/__test__`. For executing the tests, simply run:

```
yarn test
```

## Author

- **Cristian Abrante** - [CristianAbrante](https://github.com/CristianAbrante)
