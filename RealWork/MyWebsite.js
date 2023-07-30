let Name = document.getElementById("MyName")
let Icons = document.getElementById("icons")

const letters = "ABCDEFGHIJKLMONPQRSTUVWXYZ"
Name.onmouseover = event => { 
    let iterations = 0;
    
    const interval = setInterval(() => {
    event.target.innerText = event.target.innerText.split("").map((letter,index) => { 
     if(index < iterations){
        return event.target.dataset.value[index]
     }
        

    return letters[Math.floor(Math.random() * 26)]}).join("");
    
    if(iterations >= event.target.dataset.value.length) clearInterval(interval);

    iterations += 1/3;}, 30);
}
Icons.onmouseover = thing => {
    setInterval(() => {
      thing.target.innerText = thing.target.innerText.split("")
        .map(letter => letters[Math.floor(Math.random() * 26)]).join("")
    }, 30)
}
