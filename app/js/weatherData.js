var currentConditions = {};
var forecast = {};
var geolookup = {};
var lastUpdate = '';
var weatherResponse = '';

var getWeather = function(callBack) {
    var updateWeather = function(callBack) {
        $.ajax({
            url : "http://api.wunderground.com/api/" + config.weatherAPIKey + "/geolookup/conditions/q/" + config.weatherState + '/' + config.weatherCity + ".json",
            dataType : "jsonp",
            success : function(parsed_json) {
                console.log('parsed_json', parsed_json);
                currentConditions = parsed_json;
                $.ajax({
                    url : "http://api.wunderground.com/api/" + config.weatherAPIKey + "/forecast/q/" + config.weatherState + '/' + config.weatherCity + ".json",
                    dataType : "jsonp",
                    success : function(parsed_json) {
                        console.log('parsed_json', parsed_json);
                        forecast = parsed_json;
                        $.ajax({
                            url : "http://api.wunderground.com/api/" + config.weatherAPIKey + "/geolookup/q/" + config.weatherState + '/' + config.weatherCity + ".json",
                            dataType : "jsonp",
                            success : function(parsed_json) {
                                console.log('parsed_json', parsed_json);
                                geolookup = parsed_json;
                                buildResponse();
                                callBack(weatherResponse);
                            }
                        });
                    }
                });
            }
        });
    }

    var buildResponse = function() {
        weatherResponse = 'Currently in ' + currentConditions['location']['city']
                + ' the weather is ' + currentConditions['current_observation']['weather']
                + ' with temperature at ' + currentConditions['current_observation']['temp_f'] + ' degrees.'
                + ' Winds ' + currentConditions['current_observation']['wind_string'];

        console.log('original response', weatherResponse);
        weatherResponse = translateWeatherText(weatherResponse);
    }

    if (!lastUpdate || lastUpdate  + 600000 < (new Date()).getTime()) {
        updateWeather(callBack);
        //buildResponse();
        lastUpdate = (new Date()).getTime();
        console.log('new weatherResponse', weatherResponse);
        return;
    } else {
        console.log('old weatherResponse', weatherResponse);
        callBack(weatherResponse);
        return;
    }
}

var translateWeatherText = function(weatherResponse) {
    weatherResponse = weatherResponse.replace(/MPH/g, 'miles per hour');
    weatherResponse = translateNumerics(weatherResponse);
    weatherResponse = translateWindDirection(weatherResponse);
    return weatherResponse;
}

// Finds numbers in the text
// Converts those numbers to text (ex 91.2 to ninety-one point two)
var translateNumerics = function(weatherResponse) {
    var charArray = weatherResponse.split('');
    var numbers = [];
    for (var i = 0; i < charArray.length; i++) {
        var numberChars = [];
        var indexIncrease = 0;
        if (isNumeric(charArray[i])) {
            numberChars.push(charArray[i]);
            indexIncrease++;
            indexIncrease = processCharacter(charArray, i, indexIncrease, numberChars);
        }
        i = i + indexIncrease;
        if(numberChars.length > 0) {
            numbers.push(numberChars);
        }
    }
    var replacements = [];
    for (var i = 0; i < numbers.length; i++) {
        replacements = findReplacementText(numbers[i], replacements);
    }
    for (var i = 0; i < replacements.length; i++) {
        weatherResponse = weatherResponse.replace(replacements[i][0], replacements[i][1]);
    }
    return weatherResponse;
}

/**
* translate number array into text then add to replacements
* @param {Array} number array of characters including period (ex array of chars for 93.6)
* @param {Array} replacements array containing original number plus text replacement
* @return {Array} replacements
*/
var findReplacementText = function(number, replacements) {
    var prePeriod = '';
    var postPeriod = '';
    var periodFound = false;
    var originalNumber = '';
    var replaceMent = '';
    for (var j = 0; j < number.length; j++) {
        originalNumber = originalNumber + number[j];
        if (number[j] === '.') {
            periodFound = true;
        } else {
            if (periodFound) {
                postPeriod = postPeriod + number[j];
            } else {
                prePeriod = prePeriod + number[j];
            }
        }
    }
    if (periodFound) {
        replacements.push([originalNumber, toWords(prePeriod) + ' point ' +  toWords(postPeriod)]);
    } else {
        replacements.push([originalNumber, toWords(prePeriod)]);
    }
    return replacements;
}

/**
* Collects characters of a number ex 70.5
* @param {Array} charArray of complete text
* @param {Integer} index of outer loop
* @param {Integer} indexIncrease tracks amout to increase outer index
* @param {Array} numberChars characters in the current number
* @return {Integer} indexIncrease
*/
var processCharacter = function(charArray, index, indexIncrease, numberChars) {
    var offSet =  numberChars.length;
    if (isNumeric(charArray[index + offSet]) || charArray[index + offSet] === '.') {
        numberChars.push(charArray[index + offSet]);
        indexIncrease = indexIncrease + 1;
        indexIncrease = processCharacter(charArray, index, indexIncrease, numberChars)
    } else {
        indexIncrease--;
    }
    return indexIncrease;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var translateWindDirection = function(weatherResponse) {
    weatherResponse = weatherResponse.replace(' N ', ' NORTH ');
    weatherResponse = weatherResponse.replace(' NNE ', ' NORTH NORTH EAST ');
    weatherResponse = weatherResponse.replace(' NE ', ' NORTH EAST ');
    weatherResponse = weatherResponse.replace(' ENE ', ' EAST NORTH EAST ');
    weatherResponse = weatherResponse.replace(' E ', ' EAST ');
    weatherResponse = weatherResponse.replace(' ESE ', ' EAST SOUTH EAST ');
    weatherResponse = weatherResponse.replace(' SE ', ' SOUTH EAST ');
    weatherResponse = weatherResponse.replace(' SSE ', ' SOUTH SOUTH EAST ');
    weatherResponse = weatherResponse.replace(' S ', ' SOUTH ');
    weatherResponse = weatherResponse.replace(' SSW ', ' SOUTH SOUTH WEST ');
    weatherResponse = weatherResponse.replace(' SW ', ' SOUTH WEST ');
    weatherResponse = weatherResponse.replace(' WSW ', ' WEST SOUTH WEST ');
    weatherResponse = weatherResponse.replace(' W ', ' WEST ');
    weatherResponse = weatherResponse.replace(' WNW ', ' WEST NORTH WEST ');
    weatherResponse = weatherResponse.replace(' NW ', ' NORTH WEST ');
    weatherResponse = weatherResponse.replace(' NNW ', ' NORTH NORTH WEST ');
    return weatherResponse;
}

//ES5 http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
var toWords = function toWords(n) {
  if (n == 0) return 'zero';
  var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var b = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];
  var grp = function grp(n) {
    return ('000' + n).substr(-3);
  };
  var rem = function rem(n) {
    return n.substr(0, n.length - 3);
  };
  var fmt = function fmt(_ref) {
    var h = _ref[0];
    var t = _ref[1];
    var o = _ref[2];

    return [Number(h) === 0 ? '' : a[h] + ' hundred ', Number(o) === 0 ? b[t] : b[t] && b[t] + '-' || '', a[t + o] || a[o]].join('');
  };
  var cons = function cons(xs) {
    return function (x) {
      return function (g) {
        return x ? [x, g && ' ' + g || '', ' ', xs].join('') : xs;
      };
    };
  };
  var iter = function iter(str) {
    return function (i) {
      return function (x) {
        return function (r) {
          if (x === '000' && r.length === 0) return str;
          return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
        };
      };
    };
  };
  return iter('')(0)(grp(String(n)))(rem(String(n)));
};
