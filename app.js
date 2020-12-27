const container = document.querySelector(".container")
const squere = 566;
const color = ["#A3E4D7","#D7BDE2","#F7DC6F","#a7DC7F","#FBEEE6"]
for(let i = 0;i<=squere;i++){
    const div = document.createElement('div');
    div.className="squre"
    container.appendChild(div)
    div.addEventListener('mouseover',function addColor(){
      let newColor = Math.floor(Math.random()*color.length)
      div.style.backgroundColor = color[newColor];
    })
    div.addEventListener('mouseout',()=>{
        setTimeout(()=>{
            div.style.transition="1.5s ease"
            div.style.backgroundColor = "#1d1d1d"
        },1000)
    })
}

