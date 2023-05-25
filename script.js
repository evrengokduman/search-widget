//we need to add a class active, when clicked o the button it will move the search icon and expand search bar

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})
