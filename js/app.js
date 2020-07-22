const pokeapiReqOne = document.querySelector('.pokeapi-reqOne')
const pokeapiReqTwo = document.querySelector('.pokeapi-reqTwo')
const pokeapiReqThree = document.querySelector('.pokeapi-reqThree')
const pokeapiReqFour = document.querySelector('.pokeapi-reqFour')
const pokeapiReqFive = document.querySelector('.pokeapi-reqFive')
const pokeapiReqSix = document.querySelector('.pokeapi-reqSix')
const pokeapiReqSeven = document.querySelector('.pokeapi-reqSeven')
const pokeapiReqHeight = document.querySelector('.pokeapi-reqHeight')
const pokeapiRes = document.querySelector('.pokeapi-res')

const timeoutReq = document.querySelector('.timeout-req')
const timeoutRes = document.querySelector('.timeout-res')
const timeHtml = document.querySelector('.time')

timeoutReq.addEventListener('click', getMessage)

pokeapiReqOne.addEventListener('click', getPokemonOne)
pokeapiReqTwo.addEventListener('click', getPokemonTwo)
pokeapiReqThree.addEventListener('click', getPokemonThree)
pokeapiReqFour.addEventListener('click', getPokemonFour)
pokeapiReqFive.addEventListener('click', getPokemonFive)
pokeapiReqSix.addEventListener('click', getPokemonSix)
pokeapiReqSeven.addEventListener('click', getPokemonSeven)
pokeapiReqHeight.addEventListener('click', getPokemonHeight)


// Asynchronous One
async function getPokemonOne () {
	const pokemon = 'darkrai'
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
	const data = await response.json()
	
	render(data, pokeapiRes)
}

// Asynchronous Two
function getPokemonTwo () {
	const pokemon = 'sceptile'
	fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
		.then(response => response.json())
		.then(data => render(data, pokeapiRes))
}

// Asynchronous Three
async function getPokemonThree () {
	const data = await fetcDataThree('metagross')

	render(data, pokeapiRes)
}

function fetcDataThree (pokemon) {
	return new Promise(resolve => {
		fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
			.then(response => response.json())
			.then(data => {
				resolve(data)
			})
	})
}

// Asynchronous Four
function getPokemonFour () {
	fetcDataFour('charizard')
		.then(data => render(data, pokeapiRes))
}

async function fetcDataFour (pokemon) {
	const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
	const data = await response.json()

	return data
}


// Asynchronous Five
async function getPokemonFive () {
	const data = await fetcDataFive('dragonite')

	render(data, pokeapiRes)
}

async function fetcDataFive (pokemon) {
	let data = null
	await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
	.then(response => response.json())
	.then(res => {
		data = res
	})

	return data
}

// Asynchronous Six
function getPokemonSix () {
	fetcDataSix('salamence')
		.then(data => render(data, pokeapiRes))
}

async function fetcDataSix (pokemon) {
	let data = null
	await fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
	.then(response => response.json())
	.then(res => {
		data = res
	})

	return data
}

// Asynchronous Seven
function getPokemonSeven () {
	fetcDataSeven('garchomp')
		.then(data => render(data, pokeapiRes))
}

function fetcDataSeven (pokemon) {
	return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
	.then(response => response.json())
}


// Asynchronous Height
async function getPokemonHeight () {
	const response = await fetcDataHeight('gengar')
	const data = await response.json()

	render(data, pokeapiRes)
}

function fetcDataHeight (pokemon) {
	return fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
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
