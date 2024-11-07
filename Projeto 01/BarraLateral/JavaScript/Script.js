var Menu = document.querySelectorAll(".item-menu")

function selectLink(){
    Menu.forEach((item)=>
        item.classList.remove('ativo'))
    this.classList.add('ativo')
}

Menu.forEach((item)=>
    item.addEventListener('click', selectLink)
)

var btnExp = document.querySelector('#btn-exp')
var MenuSlide = document.querySelector('.MenuLateral')

btnExp.addEventListener('click', function(){
    MenuSlide.classList.toggle('expandir')
})