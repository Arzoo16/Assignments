

var Binary = function (arr, x) { 

	var start=0, end=arr.length-1; 
		

	while (start<=end){ 

	
		let mid=Math.floor((start + end)/2); 

	
		if (arr[mid]===x) return true; 
 
		else if (arr[mid] < x) 
			start = mid + 1; 
		else
			end = mid - 1; 
	}

	return false; 
} 

let arr = [1, 3, 5, 7, 8, 9]; 
var x=3;
if (Binary(arr, x, 0, arr.length-1)) 
	console.log("Element found!"); 
else console.log("Element not found!"); 


