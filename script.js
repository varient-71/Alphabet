// alert("this is game for children");
const char = document.querySelector('.container');
function makeSound(E){
    
}
function activateDiv(targetDiv){
    let target = document.querySelector("#"+targetDiv);
    target.classList.add("active");
    setTimeout(function(){
        target.classList.remove("active");
    },1000)
}
char.addEventListener('click',function(e){
    e.preventDefault();
    let targetE = e.target
    if(e.target.className == "container"){
        // activateDiv(targetE.className);
    }
    else{
        makeSound(targetE.id);
        activateDiv(targetE.id);
    }
    
});

document.addEventListener('keypress',function(e){

    activateDiv(e.key.toUpperCase());
    console.log()
});