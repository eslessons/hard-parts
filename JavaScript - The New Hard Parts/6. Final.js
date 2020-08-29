/* Final

Appendix

JavaScript gives us for...of which runs
returnNextElement() until it runs out of
elements for...of automatically

	— creates a returnNextElement function (all arrays have a
	createFunction built in to produce returnNextElement function)
	
	— calls the returnNextElement function and stores the returned
	element in element to be used by us directly in the body of the for
	loop

const numbers = [4,5,6]
for (let element of numbers){
	console.log(element)
}

