//Exercise 1 
const count = () => {
	number1 = Number(document.getElementById('number1').value)
	number2 = Number(document.getElementById('number2').value)
	return alert (number1 + number2)
}

// Exercise 2
const changeColor = e => {
	const current = e.target 
	const color = current.style.backgroundColor
	return color === 'red' ? current.style.backgroundColor = 'green' : current.style.backgroundColor = 'red'
}

// Exercise 3
const electronics = () => {
	const typeElectronic = document.getElementById('electronics').value
	switch(typeElectronic) {
		case 'Laptop' :
			document.getElementById('listElectronic').innerHTML = `
				<ul>
					<li>Macbook</li>
					<li>Dell</li>
					<li>Lenovo</li>
					<li>Asus</li>
				</ul>
		  `
			break
		case 'Phone' : 
			document.getElementById('listElectronic').innerHTML = `
				<ul>
					<li>Apple</li>
					<li>Samsung</li>
					<li>Nokia</li>
				</ul>
			`
			break
		case 'Tivi' : 
			document.getElementById('listElectronic').innerHTML = `
				<ul>
					<li>LG</li>
					<li>Sony</li>
				</ul>
			`
			break
		default : 
		document.getElementById('listElectronic').innerHTML = ``
	}
}
// Exercise 4 
function createMenu (menu = []) {
	menu.forEach(item => {
		console.log(item.name);
		if (item.children) {
      createMenu(item.children)
    }
	})
}
