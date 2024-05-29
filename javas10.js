document.getElementById("enter").onclick = function (){
    uuuuu = document.getElementById("input").value

if(uuuuu == -6){
    answer.textContent = `Correct`;
    document.location.href = `question11.html`
}
else{
    answer.textContent = `Wrong`;
}
}