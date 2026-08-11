function MaximumValue(max_array){
    let max_value=-Infinity;
    for (i=0; i<max_array.length; i++){
        if (max_array[i]>max_value){
            max_value=max_array[i];
        }   
    }
    return max_value;
}
max_value=MaximumValue([1,2,3,54,-2,76,-45,678,2,3-654,9])
console.log("Maximum Value in Array is: "+ max_value)

function MinimumValue(min_array){
    let min_value=Infinity;
    for (i=0; i<min_array.length;i++){
        if(min_array[i]<min_value){
            min_value=min_array[i];
        }
    }
    return min_value;
}
min_value=MinimumValue([2,5,6,-6,-3,-6,-76,76,81,-99,99,-91,97,-97])
console.log("Minimum Value in Array is: "+ min_value)
