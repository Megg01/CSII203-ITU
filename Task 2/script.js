function display(value)
{
	document.getElementById("result").value+=value;
}
		
//function that evaluates the digit and return result
function solve()
{
	var x = document.getElementById("result").value;
	var y = eval(x);
	document.getElementById("result").value = y;
}
		
//function that clear the display
function clr()
{
	document.getElementById("result").value = "";
}