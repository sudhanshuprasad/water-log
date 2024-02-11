export const getWaterLevel = () => {

    let waterLevel = 0
    // let url = `https://www.google.com`

    fetch("/1234", {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
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