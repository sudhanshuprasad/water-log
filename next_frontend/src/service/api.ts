export const getWaterLevel = (slno:number) => {

    let waterLevel = 0
    let url = `https://www.google.com`

    fetch(`/water_level/${slno}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.lastLevel)
            console.log(parseFloat(data.lastLevel.toFixed(2)))
            waterLevel = data.lastLevel
        })
        .catch(error => console.error('Error:', error));

    return waterLevel;
}