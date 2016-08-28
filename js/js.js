function result () {
  

var x = document.getElementById("word").value;
var y = document.getElementById("letter").value;
var p = document.getElementById("result");			
var z = x.split("");
var count = 0;
for (i=0;i<z.length;i++){
	
	if(y==z[i]){
		count++;
	}	
}
p.innerHTML=count;
}



