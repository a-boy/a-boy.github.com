function lookup(){
	var a=[];
	for(var i= +document.getElementById('start').value;i< +document.getElementById('max').value;i+= +document.getElementById('step').value)
		a.push(i);

	document.getElementById('editor').innerHTML=String.fromCodePoint.apply(null,a)
}
document.getElementsByTagName('button')[0].addEventListener('click', lookup);
lookup();

function show(){
	var a=[];
	for(var cursor= +document.getElementById('points').value,i=0;i< 1024;i++,cursor++)
		a.push(cursor);

	document.getElementById('editor').innerHTML=String.fromCodePoint.apply(null,a)
}
document.getElementById('points').addEventListener('change', show);