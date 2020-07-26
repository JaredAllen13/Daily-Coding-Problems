function twoNumberSum(array, targetSum) {
  // Write your code here.
	var results = [];
	for (var x = 0; x < array.length; x++){
		for (var y = x+1; y < array.length; y++){
			if(array[x] + array[y] === targetSum){
				results.push(array[x]);
				results.push(array[y]);
			}
		}
	}
	return results;
}
