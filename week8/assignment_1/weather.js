import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";
//URL

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

let apikey = "d3091d08a6160152b327f3868e0ad011";

const getWeatherData = () => {
  console.clear();
  console.log(chalk.blue("****************************************"));
  console.log(chalk.green("\t\tWEATHER CLI"));
  console.log(chalk.blue("****************************************"));
  let city = readlineSync.question("Enter the name of the city: ");
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    )
    .then((res) => {
      let data = res.data;
      city = city[0].toUpperCase() + city.slice(1)
      console.log(chalk.greenBright("\nWeather information for "+city+" :\n"));

      let cel = toCelcius(data.main.temp);
      console.log(chalk.cyan(`Temperature in Celcius is ${cel.toFixed(2)} \u{00B0}C`));
      let far = toFarhenheit(cel);
      console.log(chalk.cyan(`Temperature in Farhenheit is ${far.toFixed(2)} \u{00B0}F`));
     
      let celmin = toCelcius(data.main.temp_min);
      let farmin = toFarhenheit(celmin);
      let celmax = toCelcius(data.main.temp_max);
      let farmax = toFarhenheit(celmax);

      console.log(chalk.blueBright(`\nMinimum temperature in celcius: ${celmin.toFixed(2)} \u{00B0}C`));
      console.log(chalk.blueBright(`Minimum temperature in farhenheit: ${farmin.toFixed(2)}\u{00B0}F`));
      console.log(chalk.redBright(`Maximum temperature in celcius: ${celmax.toFixed(2)}\u{00B0}C`));
      console.log(chalk.redBright(`Maximum temperature in farhenheit: ${farmax.toFixed(2)}\u{00B0}F`));

      let sunrise = toUTC(data.sys.sunrise);
      let sunset = toUTC(data.sys.sunset);

    
      console.log(chalk.yellow("\nSunrise time in UTC : " + sunrise));
      console.log(chalk.blue("Sunset time in UTC : " + sunset));

      console.log(chalk.magentaBright("Humidity: " + data.main.humidity + "%"));

      let zone = data.timezone
      let localtime = toUTC(data.dt+zone);
      let utc = toUTC(data.dt)
      console.log(`\nThe local time in ${city} is ${localtime}`);
      console.log(`The UTC time is ${utc}`)
      
    })
    .catch((err) => {
      console.error(err.response.data.message);
    });
};



const toCelcius = (temp) => {
  return temp - 273;
};

const toFarhenheit = (temp) => {
  return temp * (9 / 5) + 32;
};
getWeatherData();


function toUTC(sec) {
  return new Date(sec * 1000).toLocaleTimeString("en-US", { timeZone: "UTC" });
}


