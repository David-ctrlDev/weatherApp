async function apiFetch() {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=Medellin&appid=7fcb4313581670053262dc3630babf70'
    const resp = await fetch(url)
    const data = await resp.json()
    return data
}


export default apiFetch