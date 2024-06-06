export const getWaterlevel = async (deviceID:number) => {
    // let deviceID = 1234

    let data
    let url = `/water_level/${deviceID}`

    await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    })
        .then(response => response.json())
        .then(level => {
            // console.log(level)
            data = level
            // console.logn (data)
        })
        .catch(err => {
            // console.error('Error:', err)
            data = {'Error:': err}
        });
    return data
}