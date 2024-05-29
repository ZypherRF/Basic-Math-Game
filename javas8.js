document.getElementById("enter").onclick = function (){
    yyyyy = document.getElementById("input").value

if(yyyyy == 52){
    answer.textContent = `Correct`;
    document.location.href = `question9.html`
}
else{
    answer.textContent = `Wrong`;
}
}