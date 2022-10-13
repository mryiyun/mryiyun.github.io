var flag=true;

function showMenu(){
	var title = document.getElementById("title");
	if(flag){
		title.style.display = "block";
		flag = false;
	}else{
		title.style.display = "none";
		flag = true;
	}
}

function showMenu1(){
	var title = document.getElementById("title");
	title.style.display = "none";
	flag = true;
}
