function reverseString(text){
    reversed="";
    for(let i of text){
        reversed= i + reversed;
    }
    return reversed;
}
let reversed_Value=reverseString("Pakistan");
console.log(reversed_Value);
