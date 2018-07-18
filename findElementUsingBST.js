
function findEle(arr,val){
	//we need low, high, mid index
  
  let low = 0;
  let high = arr.length - 1 ;
  let mid = 0;
  
  //run the loop as long as low is lower than high
  while(low <= high){
  	//now mutate the mid index
    
    mid = Math.floor((low+high)/2);
    
    if(arr[mid] == val){
    	//if the value is found in middle element of array, just return that
    	return arr[mid]; 
    }
    else if(val > arr[mid]){
    	//move low up one
      low = mid + 1 ;
    }
    else {
    	high  = mid -1 ;
    }
  }
   return -1;
}
const arr = [1,2,3,4,5,6,7,8,9];
const val = 12;
console.log(findEle(arr, val));

//output is -1 cos 12 is not in the list!
