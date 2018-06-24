function calcular(){
	var montante = document.getElementById("montante").value;
	var taxa = document.getElementById("taxa").value / 100.00;
	var tempo = document.getElementById("tempo").value;
	var montanteTela = 0;
	var porcentagemFinal = 0;
	var resultadoTela = document.getElementById("resultado");
	var mes = 0.00;
	var taxaAux = (1 + taxa).toFixed(2);

	montanteTela = (montante * Math.pow(taxaAux, tempo)).toFixed(2);
	porcentagemFinal = (( montanteTela / montante ) ).toFixed(2);

	for(i= 0; i< tempo; i++){
		var j = i+ 1;
		mes = (montante * Math.pow(taxaAux, j)).toFixed(2);
		if(i == 0){
			resultadoTela.innerHTML = "<br>Mês "+j+": <label id='m2'> "+ mes +" </label><br>";
		}
		else{
			resultadoTela.innerHTML += "Mês "+j+": <label id='m2'> "+ mes +" </label><br>";
		}
	}
	resultadoTela.innerHTML += "Montante: <label id='mt'>" + montanteTela + "</label><br>";
	resultadoTela.innerHTML += "% final: <label id='pf'>" + porcentagemFinal + "</label><br>";
}