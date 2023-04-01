# products-api-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

The application consists of two main functionalities, the first collects products data and displays it, and the other, filters those products by category. 

These functionalities are made through requests to a public api, which leads to another functionality that is to control that the minimum possible requests are made, per IP, which I have controlled by saving the data in cache.

 Within the application, I have controlled the handling of this data with vuex.

Pattern used: Flux, since when using vuex, it forces you to use this pattern and
having a single path, and a place where the state of the application is stored, it is easier to debug errors and know what is happening at all times.

Libraries: 

Boostrap for style.

Vuex for State Management.

Axios for HTTP request