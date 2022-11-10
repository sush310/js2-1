// Write a function  ...

// 1. That logs “The current date and time is “ - the current date and time 
// hint; you will need to research the Date object to get the current date! (https://www.w3schools.com/jsref/jsref_obj_date.asp)

// 2. That prints “I’m ready” after 5 seconds.
// hint: you will need to research the setTimeout JavaScript function. (https://www.w3schools.com/jsref/met_win_settimeout.asp)

// 3. Create a function to convert today’s temperature from Celsius to Fahrenheit
// a) Celsius to Fahrenheit: (°C × 9/5) + 32 = °F
// b) Fahrenheit to Celsius: (°F − 32) x 5/9 = °C

const date = new Date();
const d = date.toDateString();
const time = date.toLocaleTimeString();
console.log('Date: ' + d);
console.log('Time: ' + time);


let timeout;

function myFunction() {
  timeout = setTimeout("I'm ready", 5000);
  return full;
}



  const celcius = 27
  let fahrenheit = (celcius * 9/5) + 32;
  fahrenheit = Math.floor(fahrenheit);
  console.log(`The temperature is ${fahrenheit}
  degrees Fahrenheit.`);



  let todayCTemp = 25;
 function checkTemp(){
    let todayFTemp = (todayCTemp * 9/5) + 32;
    console.log (todayFTemp + " degrees Farenheit");
 }
 checkTemp();
 