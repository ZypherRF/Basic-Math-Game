document.getElementById("enter").onclick = function (){
    rrrrr = document.getElementById("input").value

if(rrrrr == 12){
    answer.textContent = `Correct`;
    document.location.href = `question5.html`
}
else{
    answer.textContent = `Wrong`;
}
}