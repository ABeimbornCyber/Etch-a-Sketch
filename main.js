const grid_container = document.querySelector(".container");
let grid_width = 16;
const grid_input = document.querySelector("#grid_width");

draw_grid();
function draw_grid(width=16){
    grid_container.innerHTML = '';
    for(let i = 0; i < width; i++){
        const grid_row = document.createElement("div");
        grid_row.classList.add("grid_row");
        grid_container.appendChild(grid_row);
        
        for(let j = 0; j < width; j++){
            const grid_section = document.createElement("div");
            grid_section.classList.add("square");
            grid_row.appendChild(grid_section);
            
            grid_section.addEventListener("mouseover", function(){
                grid_section.classList.add("hovered");
            });
            
        }
    }
}


grid_input.addEventListener('input', function(e){
    
    grid_width = this.value;
    draw_grid(grid_width);
});