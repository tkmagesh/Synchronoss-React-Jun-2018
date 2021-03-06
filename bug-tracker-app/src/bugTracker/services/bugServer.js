import axios from 'axios';

let baseUrl = 'http://localhost:3030/bugs'

function getAll(){
	return axios
		.get(baseUrl)
		.then(response => response.data);
}

function save(bugData){
	if (bugData.id === 0){
		return axios.post(baseUrl, bugData)
			.then(response => response.data)
	} else {
		return axios.put(`${baseUrl}/${bugData.id}`, bugData)
			.then(response => response.data)
	}
}
let bugServer = { getAll, save };

export default bugServer;
