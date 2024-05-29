document.getElementById("enter").onclick = function (){
    uuuuu = document.getElementById("input").value

if(uuuuu == 19){
    answer.textContent = `Correct`;
    document.location.href = `YouWin.html`
}
else{
    answer.textContent = `Wrong`;
    document.location.href = `test.html`
}
}