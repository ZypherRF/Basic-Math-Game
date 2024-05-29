document.getElementById("enter").onclick = function (){
    ttttt = document.getElementById("input").value

if(ttttt == 252){
    answer.textContent = `Correct`;
    document.location.href = `question6.html`
}
else{
    answer.textContent = `Wrong`;
}
}