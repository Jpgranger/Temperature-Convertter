function convertToCelsius(fahrenheit){
    return (fahrenheit - 32) * (5/9);
}
function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);
    let description;
    if (celsius <0){
        description = "very cold";
    } else if (celsius < 20){
        description = "cold"; 
    } else if (celsius < 30){
        description = "warm";
    } else if (celsius < 40){
        description = "hot";
    } else {
        description = "Very hot";
    }
    return description;
}

const inputFahrenheit = prompt("Temp in Farhrenheit")
const fahrenheit = parseFloat(inputFahrenheit);

const celsius = convertToCelsius(fahrenheit);
const description = describeTemperature(fahrenheit);
    
 alert(`${fahrenheit}F is ${celsius.toFixed(2)}C, which feels ${description}.`);
