const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
	btn.addEventListener('click', function (e) {
		const x = e.clientX - e.target.offsetLeft
		const y = e.clientY - e.target.offsetTop

		const ripples = document.createElement('span')
		ripples.setAttribute('class', 'btn-ripple')
		ripples.style.left = x + 'px'
		ripples.style.top = y + 'px'

		this.appendChild(ripples)

		setTimeout(() => {
			ripples.remove()
		}, 1000)
	})
})