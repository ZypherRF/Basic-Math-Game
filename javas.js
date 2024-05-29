document.getElementById("enter").onclick = function (){
    qqqqq = document.getElementById("input").value

if(qqqqq == 3){
    answer.textContent = `Correct`;
    document.location.href = `question2.html`;
}
else{
    answer.textContent = `Wrong`;
}
}