const grid_container = document.querySelector(".container");
let grid_width = 16;


for(let i = 0; i < grid_width; i++){
    const grid_row = document.createElement("div");
    grid_row.classList.add("grid_row");
    grid_container.appendChild(grid_row);
    
    for(let j = 0; j < grid_width; j++){
        const grid_section = document.createElement("div");
        grid_section.classList.add("square");
        grid_row.appendChild(grid_section);
        grid_section.addEventListener("mouseover", function(){
            grid_section.classList.add("hovered");
        });
        
    }
}
