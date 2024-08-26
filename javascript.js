const item1 = document.querySelector ('h1')

const body = document.querySelector('body')
const box = document.querySelector('.box')
const image = document.querySelector('img')


const name = document.querySelector('.box h1 span')
const surname = document.querySelector('.box h2 span')




// const qu1 = prompt('Укажити цвет фон')
// const qu2 = prompt('Укажити цвет фон бокса')
const qu3 = +prompt('Укажити ширину бокса')
const qu4 = prompt('Укажити сылку на картинку')
const qu5 = prompt('Укажити ваше имю')
const qu6 = prompt('Укажити вашу фамилию')








    // body.style.backgroundColor = qu1
    // box.style.backgroundColor = qu2
    box.style.width = qu3 + 'px'
    image.src = qu4
    name.innerText = qu5
    surname.innerText = qu6








