for(var i=0;i<30;i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for(var j=0;j<30;j++){
        const col = document.createElement('div');
        col.className = "column";
        col.addEventListener('click',() =>{
            col.style.background = colorSelected;
        });
        row.appendChild(col);

    }
    document.body.appendChild(row);
}

let colorSelected;

let color = ['red','blue','green','pink','violet','yellow','black','brown'];
for(var i=0;i<1;i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for(let j=0;j<8;j++){
        const col = document.createElement('div');
        col.className = "colorSet";
        col.style.background = color[j];
        col.addEventListener('click',() =>{
            colorSelected = color[j];
            alert("This color is selected " +color[j]);
        });
        row.appendChild(col);
    }
    document.body.appendChild(row);
}


