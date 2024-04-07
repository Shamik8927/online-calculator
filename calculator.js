function remove(){
    document.getElementById("input").value="";
}

function calculator(newValue){
    // document.preventDefault();
    document.getElementById("input").value+=newValue
}

function answer(){
    var a=document.getElementById("input").value;
    var b=eval(a);
    document.getElementById("input").value=b;
}