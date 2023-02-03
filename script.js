let color = ["red","blue","white","yellow","pink"]
function changeColor(){
    let ra = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[ra];
}