function selectionSort(arr) {
	let input = Object.values(arr)
  let newArray = []
  let length = arr.length
  for(let i=0; i < length; i++) {
  	let min = input.indexOf(Math.min(...input))
  	newArray.push(...input.splice(min, 1))
  }
  return newArray
}
