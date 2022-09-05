// api url
const api_url =
	"https://randomuser.me/api/?results=20";

// Defining async function
async function getapi(url) 
{
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	localStorage.setItem("data",JSON.stringify(data));
	if (response) 
	{
		hideloader();
	}
	show(data);
}
getapi(api_url);
	


// Calling that async function

// Function to hide the loader
function hideloader() 
{
	document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
	let tab =
		`<tr>
		<th>Photo</th>
		<th>Name</th>
		<th>DOB</th>
		<th>Age</th>
		<th>Country</th>
		</tr>`;
	
	// Loop to access all rows
	for (let r of data.results) 
	{
		tab += `<tr>
	<td><img src="${r.picture.large}"  onclick="getinfo(this)"/> </td>
	<td>${r.name.first}</td>
	<td>${r.dob.date}</td>
	<td>${r.dob.age}</td>		
	<td>${r.location.country}</td>
</tr>`;
	}
	// Setting innerHTML as tab variable
	document.getElementById("users-info").innerHTML = tab;
}
function getinfo(user){
	
	let data1=JSON.parse(localStorage.getItem("data"));
	let data2=data1.results;
	data2.map((e) => {
		if(e.picture.large == user.src){
		localStorage.setItem("details",JSON.stringify(e));
		}
		
	});
	window.location.href="file:///C:/Users/M1077384/Desktop/Dhanam/Login.html";
	
}