document.getElementById("enter").onclick = function (){
    eeeee = document.getElementById("input").value

if(eeeee == 142){
    answer.textContent = `Correct`;
    document.location.href = `question4.html`
}
else{
    answer.textContent = `Wrong`;
}
}