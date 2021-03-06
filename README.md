## React Tutorial

### Getting Started

Just clone the repo and start hacking:

```shell
$ git clone https://github.com/salgum1114/react-tutorial.git
$ cd react-tutorial
$ npm install                   # Install Node.js components listed in ./package.json
$ npm start                     # Compile and launch
```

### How to Build

```shell
$ npm run webpack                 # or, `npm run webpack -- release`
```

By default, it builds in a *debug* mode. If you need to build in a release
mode, just add `-- release` flag. This will optimize the output bundle for
production deployment.

### How to Run

```shell
$ npm start                     # or, `npm start -- release`
```

This will start a lightweight development server with "live reload" and
synchronized browsing across multiple devices and browsers.

### Documentation

  * **General**
    - [React Style Guide](./docs/react-style-guide.md)
    - [How to configure text editors and IDEs](./docs/how-to-configure-text-editors.md)
  * **Questions**
    - [Which module bundler should I use?](https://github.com/kriasoft/react-starter-kit/issues/3)
    - [Which Flux implementation should I use?](https://github.com/kriasoft/react-starter-kit/issues/22)
  * **Recipes**
    - [How to Implement Routing and Navigation](./docs/recipes/how-to-implement-routing.md)
    - [How to Integrate Disqus](./docs/recipes/how-to-integrate-disqus.md)

### Directory Layout

```
.
├── /dist/                      # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /libs/                      # javascript library
├── /node_modules/              # 3rd-party libraries and utilities
├── /src/                       # The source code of the application
│   ├── /components/            # React components
│   └── /app.js                 # Client-side startup script
├── package.json                # The list of 3rd party libraries and utilities
└── webpack.config.js           # webpack module builder config file
```
