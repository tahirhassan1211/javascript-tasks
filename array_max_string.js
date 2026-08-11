const aarray=["pakistan","india","iran","Kuwait","oman","bangladesh","sudan","Morrocco","kazakistan"];
const max_array=[];
let max_value=aarray[0];
let max_len=aarray[0].length;
for (i=0; i<aarray.length; i++){
    if(max_len< aarray[i].length){
        max_len=aarray[i].length;
    }
}
for (i=0; i<aarray.length; i++){
    if (aarray[i].length==max_len){
        max_value=aarray[i];
        max_array.push(max_value)
    }
}
console.log(max_value, max_len, max_array)

function maxFunction(aarray){
    const max_array=[];
    let max_value=aarray[0];
    let max_len=aarray[0].length;
    for (i=0; i<aarray.length; i++){
        if(max_len< aarray[i].length){
            max_len=aarray[i].length;
        }
    }
    for (i=0; i<aarray.length; i++){
        if (aarray[i].length==max_len){
            max_value=aarray[i];
            max_array.push(max_value)
        }
    }
    console.log(max_array);
}
maxFunction(["pakistan","india","iran","Kuwait","saudiarabia","oman","bangladesh","azarbaijaan","Morrocco","kazakistan"])
