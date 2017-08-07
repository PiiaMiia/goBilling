# Introduction
This is the front-end application demonstrating the use of dropwizard and spring web services.
dropwizard app can be found here:
spring boot app can be found here.

Make sure to use the right port in **base.ts**, depending on which service you are trying out:
```javascript
const BaseConfig: EnvConfig = {
  API: 'http://localhost:****'
};
```

# How to start

Ready to use deployed version can be found here: http://188.166.58.182/

If you want to run it in local, then follow the steps below:

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality it is **strongly recommended to use node >=v6.5.0 and npm >=3.10.3**.

In order to start the seed use:


```bash
$ git clone https://github.com/PiiaMiia/subscription-frontend.git
$ cd subscription-frontend

# install the project's dependencies
$ npm install

# watches your files and uses livereload by default
$ npm start

Now open your browser* at http://localhost:5555
```

* Since the backend app will run at different localhost ports a CORS error might occure. In order to avoid this in local testing, please create a Chrome shortcut with the following flag:
```bash
--disable-web-security --user-data-dir="c:/someFolderName"
```


# Configuration

Default application server configuration

```js
var PORT             = 5555;
var APP_BASE         = '/';
```

Configure at runtime

```bash
$ npm start -- --port 8080 --base /my-app/
```

# End-to-end Testing
```bash
# npm install webdriver-manager <- Install this first for e2e testing
# npm run webdriver-update <- You will need to run this the first time
$ npm run webdriver-start
$ npm run serve.e2e
$ npm run e2e
```
