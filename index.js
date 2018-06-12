for(var i=0;i<100;i++) {
    var row = document.createElement('div');
    row.className = 'row';
    for(var j=0;j<100;j++){
        const col = document.createElement('div');
        col.className = "column";
        col.addEventListener('click',() =>{
            col.style.background = 'red';
        });
        row.appendChild(col);

    }
    document.body.appendChild(row);
}