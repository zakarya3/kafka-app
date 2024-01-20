import fetch from 'node-fetch';



const response = await fetch('http://universities.hipolabs.com/search?country=Morocco', {
	method: 'get',
	headers: {'Content-Type': 'application/json'}
});
const data = await response.json();

export default data