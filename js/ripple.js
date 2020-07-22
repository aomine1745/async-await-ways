const buttons = document.querySelectorAll('.btn')

buttons.forEach(btn => {
	btn.addEventListener('click', function (e) {
		const x = e.offsetX
		const y = e.offsetY

		const ripples = document.createElement('span')
		ripples.setAttribute('class', 'btn-ripple')
		ripples.style.left = x + 'px'
		ripples.style.top = y + 'px'

		this.appendChild(ripples)

		setTimeout(() => {
			ripples.remove()
		}, 750)
	})
})