function insertionSort(arr) {
  console.log(arr)
  let length = arr.length
  for(let i = 0; i < length; i++){

  	let current = arr[i]
  	let j
  	for( j = i-1; j >= 0 && arr[j] > current; j--) {
	  	// if(arr[i] > arr[j] ) {
	  		arr[j+1] = arr[j]
	  	// }
	  // debugger
  	}
  	arr[j+1] = current
  }
  console.log("output", arr)
  return arr
}

