var myHeaders = new Headers();
myHeaders.append("x-auth-token", "951a827dd3dc44508efe927c593dbef4");

var requestOptions = {
	method: 'GET',
	headers: myHeaders,
	redirect: 'follow',
};

fetch("https://api.football-data.org/v4/competitions/CL/matches", requestOptions)
	.then(response => response.text())
	.then(result => console.log(result))
	.catch(error => console.log('error', error));