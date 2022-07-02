# npm-weather-stats
This npm package display the weather and location (latitutde and longitude) of city.
## Installation
This is a Node.js module available through the npm registry. Installation is done using the npm install command:

```sh
$ npm install weather-stats
```

## Use
Require the weather-stats module in the file, using this statement:

```sh
const getWeather = require("weather-stats");
```
After requiring weather-stats, call the function and pass the city name as a string parameter.

```sh
getWeather("delhi");
```

Now, run the code and see the result in the form of JSON.
