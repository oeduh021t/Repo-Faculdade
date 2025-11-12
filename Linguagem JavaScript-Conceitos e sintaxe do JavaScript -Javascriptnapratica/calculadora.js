function somar(a,b) {return a+b;}
function subtrair(a,b) {return a-b;}
function multiplicar(a,b) {return a*b;}
function dividir(a,b){
	if(b==0)
		alert("Divisão por 0")
	return a/b;
}
function exponencial(a,b){
	return Math.pow(a,b);
}
function executar(){
		var V1 = parseFloat(document.getElementById("V1").value);
		var V2 = parseFloat(document.getElementById("V2").value);
		var operacao = document.getElementById("oper").value;
		var resultado;
		
		switch (operacao){
			case "Soma":
				resultado = somar(V1,V2);
				break;
			case "Subtração":
				resultado = subtrair(V1, V2);
				break;
			case "Multiplicação":
				resultado = multiplicar(V1, V2);
				break
			case "Divisão":
				resultado = dividir(V1, V2);
				break;
			case "Potência":
				resultado = exponencial(V1, V2);
				break;
			default:
				resultado = "operação inválida";
}
	document.getElementById("resp").innerText = "Seu resultado é: " + resultado;
}	