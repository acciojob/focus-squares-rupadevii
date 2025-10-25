//your JS code here. If required.

const squares = document.querySelectorAll('.square')
squares.forEach(square => {
	square.addEventListener("mouseover", () => {
		squares.forEach(item => {
			if(item !== square){
				item.style.backgroundColor = "#6F4E37"	
			}
		})
	})
	square.addEventListener("mouseout", () => {
		squares.forEach(item => item.style.backgroundColor = "#E6E6FA")
	})
})

// square1.addEventListener("mouseover", () => {
// 	square2.style.backgroundColor = "brown";
// 	square3.style.backgroundColor = "brown";
// }, )

// square1.addEventListener("mouseout", () => {
// 	square2.style.backgroundColor = "white";
// 	square3.style.backgroundColor = "white";
// })

