document.getElementById("enter").onclick = function (){
    uuuuu = document.getElementById("input").value

if(uuuuu == 132){
    answer.textContent = `Correct`;
    document.location.href = `question10.html`
}
else{
    answer.textContent = `Wrong`;
}
}