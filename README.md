# Subscription-frontend

# How to start

**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7 but in order to be able to take advantage of the complete functionality we **strongly recommend node >=v6.5.0 and npm >=3.10.3**.

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

* Since the backend app will run at a different localhost a CORS error might occure. In order to avoid this in local testing, please create a Chrome shortcut with the following flag:
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