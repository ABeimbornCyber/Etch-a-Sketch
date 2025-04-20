const grid_container = document.querySelector(".container");
let grid_width = 16;
const grid_input = document.querySelector("#grid_width");
const crazyMode = document.querySelector("#crazyMode");
const grid_width_px = 600;
let crazy = false;
draw_grid();
function draw_grid(width=16){
    if(width < 1){
        width =1;
        grid_input.value = 1;
    }else if(width > 100){
        width=100;
        grid_input.value = 100;
    }
    grid_container.textContent = '';
    for(let i = 0; i < width; i++){
        const grid_row = document.createElement("div");
        grid_row.classList.add("grid_row");
        grid_container.appendChild(grid_row);
        
        for(let j = 0; j < width; j++){
            const grid_section = document.createElement("div");
            grid_section.classList.add("square");
            grid_row.appendChild(grid_section);
            width_str = (grid_width_px/width)+"px";
            grid_section.style.width = width_str;
            grid_section.style.height = width_str;
            grid_section.addEventListener("mouseover", function(){
                if(crazy){
                    let r = Math.floor(Math.random()*256);
                    let g = Math.floor(Math.random()*256);
                    let b = Math.floor(Math.random()*256);
                    let rgb_string = "rgb("+r+","+g+","+b+")";
                    grid_section.style.backgroundColor = rgb_string;
                }else{
                    grid_section.style.backgroundColor = "green";
                }
                
            });
            
        }
    }
}
crazyMode.addEventListener('click', function(){
    if(!crazy){
        crazyMode.style.color = "lightgreen";
        crazyMode.style.backgroundColor = "red";
        crazyMode.style.borderColor = "olive";
        crazy = true;
    }else {
        crazyMode.style.backgroundColor= "orchid";
        crazyMode.style.color =  "gold";
        crazyMode.style.borderColor = "chartreuse";
        crazy = false;
    }
    
});

grid_input.addEventListener('input', function(e){
    
    grid_width = this.value;
    draw_grid(grid_width);
});