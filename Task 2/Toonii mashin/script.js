function display(value){
	document.getElementById("result").value+=value;
}
function solve(){
	var x=document.getElementById("result").value;
	var y= eval(x);
	document.getElementById("result").value=y;
}
function clr(){
	document.getElementById("result").value= "";
}