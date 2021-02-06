
let element = document.querySelector("div#now")
element.innerHTML = 'Hello, DOM!<br>'

function onScreen(string) {
   string +=`<br>`
    return  element.innerHTML += string
}
onScreen("Test")
onScreen("Test2")
