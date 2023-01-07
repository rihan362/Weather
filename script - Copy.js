
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b30a2394cbmshd977c468c14338fp1a3263jsnc0418b6d0d1b',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getweather = (city) =>{

     
cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) => {

        console.log(response)
    
    

        cloud_pct.innerHTML= response.cloud_pct
        temp.innerHTML= response.temp
        feels_like.innerHTML= response.feels_like
        humidity.innerHTML= response.humidity
        min_temp.innerHTML= response.min_temp
        max_temp.innerHTML= response.max_temp
        wind_speed.innerHTML= response.wind_speed
        wind_degrees.innerHTML= response.wind_degrees
        sunrise.innerHTML= response.sunrise
        sunset.innerHTML=response.sunset 


       

    
    
    
    })
	.catch(err => console.error(err));


    
}


submit.addEventListener("Click", (city)=>{
    e.preventdefault();
    getweather(city.value);
})
getweather("Ghaziabad");