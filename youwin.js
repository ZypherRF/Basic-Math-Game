document.getElementById("enter").onclick = function (){
    scales = document.getElementById("scale").value
    
    if(scales <= 3){
        badbad.textContent = `Aww.. sorry for your horable experience. (FUCK YOU :)`
    }

    else if(scales <=7){
        badbad.textContent = `Thanks for giving your review.`
    }

    else if(scales >=8){
        badbad.textContent = `Thanks for the generous review, have an amazing day :D`
    }
}