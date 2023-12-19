const circlesred=document.getElementsByClassName("circle")
for(var i=0;i<circlesred.length;i++){
    circlesred[i].addEventListener("click",function(event){
        console.log("clicked")
        event.target.style.boxShadow="0 0 10px 5px rgba(255, 0, 0, 0.9), 0 0 20px 10px rgba(255, 0, 0, 0.8), 0 0 30px 15px rgba(255, 0, 0, 0.7)"
    })
    
  
    
}
const circlesgold=document.getElementsByClassName("circle2")
for(var i=0;i<circlesgold.length;i++){
    circlesgold[i].addEventListener("click",function(event){
        console.log("clicked")
        event.target.style.boxShadow="0 0 10px 5px rgba(242, 216, 84, 0.9), 0 0 20px 10px rgba(242, 216, 84, 0.8), 0 0 30px 15px rgba(242, 216, 84, 0.7)"
    })
}
let count=0
const onandoff= document.getElementById("switch");
onandoff.addEventListener("click",function(event){
    ++count;
 
    if(count%2!=0){
        for(var i=0;i<circlesred.length;i++){
     
            circlesred[i].style.boxShadow="0 0 5px 5px rgba(255, 0, 0, 0.9), 0 0 20px 10px rgba(255, 0, 0, 0.8), 0 0 25px 15px rgba(255, 0, 0, 0.7)"
            event.target.src="onswitch.png"
            const text= document.getElementById("switchtext");
            text.innerHTML="Switch Off!!"
        
    }
    for(var i=0;i<circlesgold.length;i++){
     
        circlesgold[i].style.boxShadow="0 0 5px 5px rgba(242, 216, 84, 0.9), 0 0 20px 10px rgba(242, 216, 84, 0.8), 0 0 25px 15px rgba(242, 216, 84, 0.7)"
        if(circlesgold[i].classList.contains("move")){
            console.log("containsmove")
            circlesgold[i].style.animation="move 7s linear infinite"
        }
    
}
    }else{
        for(var i=0;i<circlesred.length;i++){
     
            circlesred[i].style.boxShadow="none"

        
    }
    for(var i=0;i<circlesgold.length;i++){
       
        
        circlesgold[i].style.boxShadow="none"
        if(circlesgold[i].classList.contains("move")){
            circlesgold[i].style.animation="none"
        }
    
    }
    count=0
    event.target.src="offswitch.png"
    const text= document.getElementById("switchtext");
    text.innerHTML="Switch On!!"
    
}

    }

)
