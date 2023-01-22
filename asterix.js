'use strick'

let result = '';
const len = 20;
for (let i = 1; i < len; i++){
    result +='\n';
    for (let j = 0; j < i; j++){
        result +="*";
    //result +='\n';
    }
}
console.log(result);