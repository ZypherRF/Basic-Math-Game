document.getElementById("enter").onclick = function (){
    yyyyy = document.getElementById("input").value

if(yyyyy == 40){
    answer.textContent = `Correct`;
    document.location.href = `question8.html`
}
else{
    answer.textContent = `Wrong`;
}
}