const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounters = () => {
    const mark = +counter.getAttribute('data-mark')
    const d = +counter.innerText

    const increment = mark / 300

    if (d < mark) {
      counter.innerText = `${Math.ceil(d + increment)}`
      setTimeout(updateCounters, 1)
    } else {
      counter.innerText = mark
    }
  }

  updateCounters()
})
