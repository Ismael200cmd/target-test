import { promises as fs } from "fs";

async function analisarFaturamento() {
    try {
        // Lê o arquivo JSON
        const data = await fs.readFile("./src/dados/dados.json", "utf-8");
        const dadosFaturamento = JSON.parse(data);

        let menorFaturamento = Infinity;
        let maiorFaturamento = -Infinity;
        let diasComFaturamento = 0;
        let somaFaturamento = 0;

        for (const registro of dadosFaturamento) {
            if (registro.valor > 0) {
                diasComFaturamento++;
                somaFaturamento += registro.valor;
                menorFaturamento = Math.min(menorFaturamento, registro.valor);
                maiorFaturamento = Math.max(maiorFaturamento, registro.valor);
            }
        }

        const mediaMensal = somaFaturamento / diasComFaturamento;
        let diasAcimaMedia = 0;

        for (const registro of dadosFaturamento) {
            if (registro.valor > mediaMensal) {
                diasAcimaMedia++;
            }
        }

        console.log(`Menor valor de faturamento: ${menorFaturamento}`);
        console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
        console.log(`Dias com faturamento acima da média: ${diasAcimaMedia}`);
    } catch (error) {
        console.error("Erro ao ler o arquivo JSON:", error);
    }
}

// Chama a função para analisar o faturamento
analisarFaturamento();
