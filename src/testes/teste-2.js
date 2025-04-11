function fibonacci(numero) {
    // Irei usar a sequencia ( 0, 1, 1, 2, 3, 5, 8, 13, 21,34...) como exemplo

    let primeiro = 0; // primeiro numero da serie
    let segundo = 1; // segundo numero da serie
    let soma = 0; // soma dos numeros anteriores

    while (segundo < numero) {
        soma = segundo;
        segundo = primeiro + segundo;
        primeiro = soma;
    }

    if (segundo == numero) {
        console.log(`O numero ${numero} pertence a serie de Fibonacci.`);
    } else {
        console.log(`O numero ${numero} não pertence a serie de Fibonacci.`);
    }
}

fibonacci(34);
