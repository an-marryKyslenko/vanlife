import { data,user } from "./data"

function sleep(ms){
	return new Promise(res=>setTimeout(res,ms))
}
export async function getVans(id){
	await sleep(1000)
	const dataVans = id ? data[id] : data
	if(!data){
		throw{
			message: 'Failed to fetch vans',
			statusText: 'Bed request',
			status: '400'
		}
	}
	return dataVans

}

export async function getUser(creds){
	await sleep(1000)
	const data = user.email === creds.email && user.password === creds.password ? user : null;
	if(!data){
		throw{
			message: 'No user with those credintials found!',
			statusText: 'Bed request',
			status: '400'
		}
	}
	return data
}
export async function getUserDetails(){
	await sleep(1000)
	const details = user.details
	if(!details){
		throw{
			message: 'No data found!',
			statusText: 'Bed request',
			status: '400'
		}
	}
	return details
}
