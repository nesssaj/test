let num = 20;
function showFirstMessage(text){
    num = ++num;
    console.log(text);
    console.log(num);
}
showFirstMessage('hello world');
console.log(num);
