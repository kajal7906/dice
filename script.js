const press = ()=>{
    var randomX = Math.floor(Math.random()*6)+1
    var image = document.querySelector("#imageId")
    var headingEle = document.getElementById("declaration") 
    switch(randomX){
        case 1 : image.setAttribute("src","diceimages/1.svg")
                 headingEle.innerHTML = "1"   
                 break
        case 2 : image.setAttribute("src","diceimages/2.svg")
                 headingEle.innerHTML = "2"   
                 break          
        case 3 : image.setAttribute("src","diceimages/3.svg")
                 headingEle.innerHTML = "3"   
                 break
        case 4 : image.setAttribute("src","diceimages/4.svg")
                 headingEle.innerHTML = "4"   
                 break                 
        case 5 : image.setAttribute("src","diceimages/5.svg")
                 headingEle.innerHTML = "5"   
                 break
        case 6 : image.setAttribute("src","diceimages/6.svg")
                 headingEle.innerHTML = "6"   
                 break
        default: headingEle.innerHTML = "please choose 1 to 6"            
    }
}
