const grid_container = document.querySelector(".container");



for(let i = 0; i < 16; i++){
    const grid_row = document.createElement("div");
    grid_row.classList.add("grid_row");
    grid_container.appendChild(grid_row);
    
    for(let j = 0; j < 16; j++){
        const grid_section = document.createElement("div");
        grid_section.classList.add("square");
        grid_row.appendChild(grid_section);
        grid_section.addEventListener("mouseover", function(){
            grid_section.classList.add("hovered");
        });
        
    }
}
