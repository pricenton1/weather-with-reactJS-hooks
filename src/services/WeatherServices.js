const appid = "109f188e595b16ec3ba8282931fc3c60";
// get by name
const getWeatherByName = async (cityName)=>{
    const getCityName = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${appid}`);
    return await getCityName.json();
}
// get by Id
const getWeatherById = async (id) => {
    const getById = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${appid}`)
    return await getById.json();
}
// get by coordinate
const getWeatherByCoordinate = async (lat,lon) => {
    const getCoordinate = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`)
    return await getCoordinate.json();
}
// get by zip code
const getWeatherByZipCode = async (zipCode,countryCode) => {
    const getZipCode = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&appid=${appid}`)
    return await getZipCode.json();
}

export {getWeatherByName,getWeatherById,getWeatherByCoordinate,getWeatherByZipCode}