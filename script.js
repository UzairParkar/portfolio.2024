function lightup(){
    document.getElementById("og").href = "light.css"
}

function revert(){
    document.getElementById("og").href = "style.css"
}

function dyna(){
    document.getElementById("og").href = "dynamic.css"
}

function menuactive(){
    ul = document.getElementById("navul")
    ul.classList.toggle('menu_active')

}

