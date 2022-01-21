
console.log(fetch("https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search?query=video", {
	"method": "GET",
	"headers": {
		"accept": "application/json",
		"x-rapidapi-host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
		"x-rapidapi-key": "cd4175c637msh44ec075c97f34a3p15f271jsna4168c6b455d"
	}
}).then(response => {
    console.log(response);
}) 
)
