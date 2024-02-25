// Valores fixos para testar 
const valorDinheiro = 100;
const moedaOrigem = 'BRL';
const moedaDestino = 'USD';

// Verificação se o valor é um número
if (!isNaN(valorDinheiro)) {
  const taxaCambioBRLtoUSD = 0.1875;
  const taxaCambioBRLtoEUR = 0.1520;
  const taxaCambioUSDtoBRL = 5.3333;
  const taxaCambioEURtoBRL = 6.5789;

  let valorConvertido;

  if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
  } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
  } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  } else {
    // Tratamento de erro para moedas não suportadas
    console.log("Conversão de moeda não suportada.");
  }

  console.log(valorConvertido.toFixed(2));
}
