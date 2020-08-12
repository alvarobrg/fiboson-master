function fibonacci(qtde){
	var penultimo = 0, ultimo = 1, numero = 0, count = 0, str = '';
	
	while( count < qtde){
		numero = ultimo + penultimo;
		penultimo = ultimo;
		ultimo = numero;
		count ++;
		str = str + numero + ', ';
	}

	console.log(str);
}
