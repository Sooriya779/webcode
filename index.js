let container = document.createElement('div')
container.setAttribute('id','cont')
container.classList.add('container')
document.body.appendChild(container)


let h3 = document.createElement('h3')
h3.innerHTML = 'Enter Number between 2 to 2122'
h3.classList.add('text-center')
document.getElementById('cont').appendChild(h3)


let div3 = document.createElement('div')
div3.setAttribute('id','div3')
div3.classList.add("d-flex","justify-content-center")
document.getElementById('cont').appendChild(div3)

let form = document.createElement('form')
form.setAttribute('id','form')
document.getElementById('div3').appendChild(form)


let text1 = document.createElement('input')
text1.setAttribute('id','text1')
text1.innerHTML = 'enter width'
text1.setAttribute('onkeyup','disney(text1.value)')
text1.setAttribute('onkeypress','typing()')
text1.setAttribute('placeholder','Search here')
text1.classList.add('text','text-center')
document.getElementById('form').appendChild(text1)


let div1 = document.createElement('div')
div1.setAttribute('id','div1')
div1.classList.add('result','col-sm-12')
document.getElementById('cont').appendChild(div1)




let Name = document.createElement('p')

let isbn = document.createElement('p')

let number = document.createElement('p')

let author = document.createElement('p')

let publisher = document.createElement('p')

let releaseddate = document.createElement('p')

let characters = document.createElement('p')



function disney(a){
	if(a>1 && a<2122){
	let y=parseInt(a)
fetch(`https://www.anapioficeandfire.com/api/characters/${y}`)
.then((x)=>x.json())
.then((res)=>{
	Name.innerHTML = `<span id="style">Name : </span>${res.name}<br>`
	div1.appendChild(Name)

	isbn.innerHTML = `<span id="style">Isbn : </span>${res.isbn}<br>`
	div1.appendChild(isbn)

	number.innerHTML = `<span id="style">Number : </span>${res.number}<br>`
	div1.appendChild(number)

	author.innerHTML = `<span id="style">Author : </span>${res.author}<br>`
	div1.appendChild(author)

	publisher.innerHTML = `<span id="style">Publisher : </span>${res.publisher}<br>`
	div1.appendChild(publisher)

    releaseddate.innerHTML = `<span id="style">ReleasedDate : </span>${res.releaseddate}<br>`
	div1.appendChild(releaseddate)

	characters.innerHTML = `<span id="style">Characters : </span>${res.characters}<br>`
	div1.appendChild(characters)
   	
})
	}	
	else if(a>2122)
alert("please enter number between 2 - 2122")
}

function typing(){
	let show = document.getElementById("result");
	if(event.charCode>=48 && event.charCode<=57 || event.key==="+" || event.key==="-" || event.key==="/" || event.key==="*"){
	   show.value += key;
	}
	else if(event.key==="Enter"){
		equal();
	}
	else{
	 alert("type only numbers");
	  event.preventDefault();
	}
 }