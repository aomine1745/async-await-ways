const pokeapiReqOne = document.querySelector('.pokeapi-reqOne')
const pokeapiReqTwo = document.querySelector('.pokeapi-reqTwo')
const pokeapiReqThree = document.querySelector('.pokeapi-reqThree')
const pokeapiReqFour = document.querySelector('.pokeapi-reqFour')
const pokeapiReqFive = document.querySelector('.pokeapi-reqFive')
const pokeapiReqSix = document.querySelector('.pokeapi-reqSix')
const pokeapiReqSeven = document.querySelector('.pokeapi-reqSeven')
const pokeapiRes = document.querySelector('.pokeapi-res')

const timeoutReq = document.querySelector('.timeout-req')
const timeoutRes = document.querySelector('.timeout-res')
const timeHtml = document.querySelector('.time')

pokeapiReqOne.addEventListener('click', getPokemonOne)
pokeapiReqTwo.addEventListener('click', getPokemonTwo)
pokeapiReqThree.addEventListener('click', getPokemonThree)
pokeapiReqFour.addEventListener('click', getPokemonFour)
pokeapiReqFive.addEventListener('click', getPokemonFive)
pokeapiReqSix.addEventListener('click', getPokemonSix)
pokeapiReqSeven.addEventListener('click', getPokemonSeven)
timeoutReq.addEventListener('click', getMessage)

// Asynchronous One
async function getPokemonOne () {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/darkrai')
	const data = await response.json()
	
	render(data, pokeapiRes)
}

// Asynchronous Two
function getPokemonTwo () {
	const response = fetch('https://pokeapi.co/api/v2/pokemon/sceptile')
	.then(response => response.json())
	.then(data => {
		render(data, pokeapiRes)
	})
}

// Asynchronous Three
async function getPokemonThree () {
	const data = await fetcDataThree()

	render(data, pokeapiRes)
}

async function fetcDataThree () {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
	const data = await response.json()

	return data
}

// Asynchronous Four
async function getPokemonFour () {
	const data = await fetcDataFour()
	
	render(data, pokeapiRes)
}

function fetcDataFour () {
	return new Promise(resolve => {
		const response = fetch('https://pokeapi.co/api/v2/pokemon/metagross')
		.then(response => response.json())
		.then(data => {
			resolve(data)
		})
	})
}

// Asynchronous Five
async function getPokemonFive () {
	const data = await fetcDataFive()

	render(data, pokeapiRes)
}

async function fetcDataFive () {
	let data = null
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/dragonite')
	.then(response => response.json())
	.then(res => {
		data = res
	})

	return data
}

// Asynchronous Six
function getPokemonSix () {
	const data = fetcDataSix().then(data => {
		render(data, pokeapiRes)
	})
}

function fetcDataSix () {
	return fetch('https://pokeapi.co/api/v2/pokemon/garchomp')
	.then(response => response.json())
}


// Asynchronous Seven
async function getPokemonSeven () {
	const response = await fetcDataSeven('gengar')
	const data = await response.json()

	render(data, pokeapiRes)
}

function fetcDataSeven (pokemon) {
	return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
}

// render HTML
function render (data, ref) {
	const template = `
	<h3>${data.order}. ${data.name}</h3>
	<img src="${data.sprites.front_default}" alt="pokemon" />
	`

	ref.innerHTML = template
}

// Time out
async function getMessage () {
	displayTimer()
	const data = await timer()
	const template = `
	<h3>${data}</h3>
	` 
	timeoutRes.innerHTML = template
}

function timer () {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Nice Message ^^')
		}, 5000)
	})
}

function displayTimer () {
	let time = 5
	const interval = setInterval(() => {
		console.log('la ptmr')
		if (time <= 1) {
			timeHtml.innerHTML = ''
			clearInterval(interval)
			return

		}

		time--
		timeHtml.innerHTML = `${time}s`
	}, 1000)
}
