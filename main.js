var Tab = document.body;
Tab.insertAdjacentHTML('beforeend','<form>Console: <input type="text" id="cInput"><br>Global-Scope:<input type="checkbox" id="Gscope"><br>Scope: <input type="text" id="sInput"></form><br><b id="console"></b><br>');
setInterval(function(){
	if(document.getElementById("Gscope").checked) document.getElementById("console").innerHTML = window[document.getElementById("cInput").value];
    else document.getElementById("console").innerHTML = window[document.getElementById("sInput").value][document.getElementById("cInput").value];
},50)
