const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    const celToFah = (cel) => {
        let fahrenheit = Math.round((cel * 9/5 ) +32);
        return fahrenheit;
    }
    const celToKel = (cel) => { //273.15
        let kal = Math.round(cel + 273.15);
        return kal;
    }

    const fahToCel = (fahr) => {
        let celsius = Math.round((fahr - 32) * 5/9);
        return celsius;
    }

    const fahToKel = (fahr) => { //(32°F − 32) × 5/9 + 273.15
        let kal = Math.round(((fahr- 32) * 5/9 )+ 273.15);
        return kal;
    }

    const kelToCel = (kel) => {  //0K − 273.15 = -273.1°C
        let celsius = Math.round(kel - 273.15);
        return celsius;
    }

    const kelToFah = (kel) => {  //(0K − 273.15) × 9/5 + 32 = -459.7°F
        let fahrenheit = Math.round((kel - 273.15 )* 9/5 + 32);
        return fahrenheit;
    }


    let result;
    let result2;
    if(valueTemp === 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
        result2 = celToKel(numberTemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}Kal`;

    }else if(valueTemp === 'fah') {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
        result2 = fahToKel(numberTemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}Kal`;

    }else if( valueTemp === 'kel') {
        result = kelToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
        result2 = kelToFah(numberTemp);
        document.getElementById('resultContainer2').innerHTML = `= ${result2}°Fahrenheit`;

    }

}