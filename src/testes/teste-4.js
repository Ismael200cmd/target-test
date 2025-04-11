function main() {
    const faturamentoPorEstado = {
        SP: 67836.43,
        RJ: 36678.66,
        MG: 29229.88,
        ES: 27165.48,
        Outros: 19849.53,
    };

    let faturamentoTotal = 0;
    for (const estado in faturamentoPorEstado) {
        faturamentoTotal += faturamentoPorEstado[estado];
    }

    console.log("Percentual de representação de cada estado:");
    for (const estado in faturamentoPorEstado) {
        const percentual =
            (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
        console.log(`${estado}: ${percentual.toFixed(2)}%`); // A função toFixed formata o valor para ter duas casas decimais e arredonda o resultado.
    }
}

main();
