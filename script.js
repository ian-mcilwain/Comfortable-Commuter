
// create a blank namespace
var weatherApp = {};

weatherApp.init = function(){


	$('.location').on('submit',function(e){
		e.preventDefault();
		console.log('form submitted')

		var stateProvince = $('.stateProvince').val();

		var stateProvince = stateProvince.replace(/\s/g,'_').toLowerCase();

		var city = $('.city').val();

		var city = city.replace(/\s/g,'_').toLowerCase();

		var weatherFor = 'http://api.wunderground.com/api/3616b581d5becf5c/conditions/q/' + stateProvince + "/" + city + '.json';
		weatherApp.getWeather(weatherFor);
		console.log(weatherFor)

	});
} // init ends here innit


weatherApp.getWeather = function(cityURL){
	$.ajax({
		url : cityURL,
		type : "GET",
		dataType : 'json',
		success : function(data) {
			console.log(data);
			weatherApp.isThereWeather(data);
		}
	}); // end ajax
}

weatherApp.isThereWeather = function(conditions) {

	if (conditions.current_observation !== undefined) {
		console.log("success!");
		weatherApp.updateWeather(conditions.current_observation);
		weatherApp.whatToWear(conditions.current_observation);
	}
	else if (conditions.response !== undefined) {
		alert("No Data For This Location!  Please Try Somewhere Else");
	}

	console.log(conditions);
};  //weatherApp.isThereWeatherWeather ends here

weatherApp.updateWeather = function(conditions) {
	$('span.weather').text(conditions.weather + ".");
	$('span.temp').text("The temperature is " + conditions.temp_c + "°.");
	// $('span.windChill').text('The wind chill is ' + conditions.windchill_c + "°");
	$('span.windDirection').text("The wind is blowing from  " + conditions.wind_dir + " at ");

	$('span.windSpeed').text(conditions.wind_kph + "km/h.");
	


};  //weatherApp.updateWeather ends here



weatherApp.whatToWear = function(conditions){


// $('span.city').text(conditions.city);

var weather = conditions.weather;

if (weather.indexOf('Snow') != -1) {
	console.log('Snow!');
	$('span.adviceOne').text("Snow means slush.  Wear waterproof footwear and clothing.  Remember a fender, or install permanent ones for winter!");
	$('body').css('background','url("images/snowy.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/snow.svg">');
	$('div.adviceimage').html('<img src="images/goggles.svg">');
} else if (weather.indexOf('Rain') != -1) {
	console.log('Rain!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/rain.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/rain.svg">');
	$('div.adviceimage').html('<img src="images/raincoat.svg">');
}else if (weather.indexOf('Ice') != -1) {
	console.log('ice!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing if you have to ride.  Be careful of dangerous conditions");
	$('body').css('background','url("images/ice.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/ice.svg">');
	$('div.adviceimage').html('<img src="images/goggles.svg">');
}else if (weather.indexOf('Fog') != -1) {
	console.log('fog!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/fog.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/fog.svg">');
} else if (weather.indexOf('Sand') != -1) {
	console.log('sandstorm!');
	$('span.adviceOne').text("Goggles and a dust mask wouldn't hurt");
	$('body').css('background','url("images/sand.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/sand.svg">');
	$('div.adviceimage').html('<img src="images/goggles.svg">');
} else if (weather.indexOf('Dust') != -1) {
	console.log('Dust!');
	$('span.adviceOne').text("Goggles and a dust mask wouldn't hurt");
	$('body').css('background','url("images/dust.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/sand.svg">');
	$('div.adviceimage').html('<img src="images/goggles.svg">');
} else if (weather.indexOf('Drizzle') != -1) {
	console.log('Drizzzzzle!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/rain.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/rain.svg">');
} else if (weather.indexOf('Hail') != -1) {
	console.log('Hail!');
	$('span.adviceOne').text("Seriously... don't ride in hail");
	$('body').css('background','url("images/hail.jpg")')
	$('body').css('background-size','cover')
		$('div.weatherimage').html('<img src="images/ic.svg">')
} else if (weather.indexOf('Mist') != -1) {
	console.log('Mist!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/mist.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/fog.svg">');
} else if (weather.indexOf('Smoke') != -1) {
	console.log('Smoke!');
	$('span.adviceOne').text("Goggles and a dust mask wouldn't hurt.");
	$('body').css('background','url("images/smoke.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/fog.svg">');
} else if (weather.indexOf('Ash') != -1) {
	console.log('Ash!');
	$('span.adviceOne').text("Goggles and a dust mask wouldn't hurt");
	$('body').css('background','url("images/ash.jpg")')
	$('body').css('background-size','cover')
}  else if (weather.indexOf('Haze') != -1) {
	console.log('Haze!');
	$('span.adviceOne').text("Haaaze");
	$('body').css('background','url("images/dust.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/fog.svg">');
} else if (weather.indexOf('Spray') != -1) {
	console.log('spray!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/spray.jpg")');
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/rain.svg">');
} else if (weather.indexOf('Sandstorm') != -1) {
	console.log('Sandstorm!');
	$('span.adviceOne').text("Goggles and a dust mask wouldn't hurt.");
	$('body').css('background','url("images/dust.jpg")')
	$('body').css('background-size','cover')
} else if (weather.indexOf('Showers') != -1) {
	console.log('Showers!');
	$('span.adviceOne').text("Pack waterproof footwear and clothing.");
	$('body').css('background','url("images/rain.jpg")');
	$('body').css('background-size','cover');
	$('div.weatherimage').html('<img src="images/rain.svg">');
} else if (weather.indexOf('Thunderstorm') != -1) {
	console.log('Thunder!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/Thunderstorm.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/rain.svg">');
} else if (weather.indexOf('Thunderstorms') != -1) {
	console.log('Thunder!');
	$('span.adviceOne').text("Wear waterproof footwear and clothing.");
	$('body').css('background','url("images/Thunderstorm.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/rain.svg">');
} else if(weather === "Overcast"){
	$('span.adviceOne').text("Pack waterproof footwear and clothing.");
	$('body').css('background','url("images/overcast.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/cloudy.svg">')
}else if(weather === "Clear"){
	$('span.adviceOne').text("Clear sky.  You can lose the shell!");
	$('body').css('background','url("images/clear.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/sun.svg">');
} else if(weather === "Mostly Cloudy"){
	$('span.adviceOne').text("You can leave your waterproof shell in your bag for now.");
	$('body').css('background','url("images/partlyCloudy.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/cloudy.svg">')
} else if(weather === "Funnel Cloud"){
	$('span.adviceOne').text("Ride your bike to your basement");
	$('body').css('background','url("images/tornado.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/tornado.svg">');
} else if(weather === "Partly Cloudy"){
	$('span.adviceOne').text("You can leave your waterproof shell in your bag for now.");
	$('body').css('background','url("images/partlyCloudy.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/cloudy.svg">')
} else if(weather === "Scattered Clouds"){
	$('span.adviceOne').text("You can leave your waterproof shell in your bag for now.");
	$('body').css('background','url("images/partlyCloudy.jpg")')
	$('body').css('background-size','cover')
	$('div.weatherimage').html('<img src="images/cloudy.svg">')
} //ridiculously large else if statement for weather value ends here



if((conditions.temp_c) <= -10){
	$('span.adviceTwo').text("Double digits below zero!?! That's face mask territory.  Make sure you are layering up so that you are warm when riding, but not too hot.  Sweating will cool you off too much.  Heavier gloves and boots might be necessary today.  Ride slowly and watch for ice");
	$('div.adviceimage').html('<img src="images/skigoggles.svg">');

} else if((conditions.temp_c) <= 0){
	$('span.adviceTwo').text("Time for extra layers, warm gloves and socks. Ride more slowly and watch out for ice!");
	$('div.adviceimage').html('<img src="images/coat.svg">');
}   else if((conditions.temp_c) <= 5){
	$('span.adviceTwo').text("It's pretty chilly. Don't forget your gloves!");
	$('div.adviceimage').html('<img src="images/hoodie.svg">');
}else if((conditions.temp_c) <= 10){
	$('span.adviceTwo').text("Make sure to keep your knees covered.  It's tempting to wear shorts for as long as possible, but warm joints are healthier.");
	$('div.adviceimage').html('<img src="images/hoodie.svg">');
}  else if((conditions.temp_c) <= 20){
	$('span.adviceTwo').text("Perfect temperature for a bike ride!  Might be a little chilly for short sleeves, but perfect for a light long sleeve")
	$('div.adviceimage').html('<img src="images/shirt.svg">');
}  else if((conditions.temp_c) <= 25){
	$('span.adviceTwo').text("It's on the warm side, but not too bad.  Definitely time for short sleeves")
	$('div.adviceimage').html('<img src="images/tShirt.svg">');
}  else if((conditions.temp_c) <= 30){
	$('span.adviceTwo').text("It's getting pretty hot, drink lots of water.")
	$('div.adviceimage').html('<img src="images/tShirt.svg">');
}  else if((conditions.temp_c) <= 40){
	$('span.adviceTwo').text("It's a scorcher out there.  Ride slowly, drink lots of water and pack some extra deoderant.  The only thing you will probably want to wear is lots of sun screen.")
	$('div.adviceimage').html('<img src="images/flame.svg">');
}

var windchill = Number(conditions.windchill_c);

console.log(windchill);

if(windchill <= 0){
	$('span.windChill').text("The wind chill is " + windchill +".");
} else {
	$('span.windChill').text('');
}


} //weatherApp.whatToWear ends here




$(function(){  //Document ready
	weatherApp.getWeather();
	weatherApp.init();
// weatherApp.whatToWear();
});


