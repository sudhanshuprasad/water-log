export const getWaterLevel = (slno:number) => {

    let waterLevel = 0
    let url = `https://www.google.com`

    fetch(`https://dull-erin-donkey-garb.cyclic.app/water_level/${slno}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(parseFloat(waterLevel.toFixed(2)))
            waterLevel = data.waterLevel
        })
        .catch(error => console.error('Error:', error));

    return waterLevel;
}