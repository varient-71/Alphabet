// alert("this is game for children");
const char = document.querySelector('.container');
const quitBtn = document.querySelector('.quit');
function makeSound(E){

}
function activateDiv(targetDiv){
    let target = document.querySelector("#"+targetDiv);
    target.classList.add("active");
    setTimeout(function(){
        target.classList.remove("active");
    },1000)
}

// for display learning

char.addEventListener('click',function(e){
    e.preventDefault();
    let targetE = e.target
    
    makeSound(targetE.id);
    activateDiv(targetE.id);
});

//for keyboard intervention

document.addEventListener('keypress',function(e){
    makeSound()
    activateDiv(e.key.toUpperCase());
    console.log()
});

//for quitting
quitBtn.addEventListener('click',function(){
    alert("Want to exit");
    window.close();
})
