const text = document.querySelectorAll('ul li a')

text.forEach(text => {
  text.innerHTML = text.innerText.split('').map((letters, i) => `<span>${letters}</span>`).join('')

  const spn = document.querySelectorAll('ul li a span').forEach(e => {
    const duration = Math.random() * 5
    e.style.animationDuration = 0.25 + duration + 's'
  })
})