function contar()
{
    // Declaração de variáveis
    let inicio = Number(document.querySelectorAll(".inputs")[0].value)
    let fim = Number(document.querySelectorAll(".inputs")[1].value)
    let passo = Number(document.querySelectorAll(".inputs")[2].value)
    let output = document.querySelector("#output")

    // Validação do passo
    if (passo <= 0)
    {
        alert("Passo Inválido. Considerando passo 1.")
        passo = 1
    }

    // Reset do output
    output.textContent = ""
    if (inicio < fim)
    {   
        // Contagem Crescente 
        for (inicio; inicio <= fim; inicio += passo)
        {
            output.textContent += `${inicio} > `
        }
    }
    else
    {
        // Contagem Regressiva
        for (inicio; inicio >= fim; inicio -= passo)
        {
            output.textContent += `${inicio} > `
        }
    }
    output.textContent += "FIM!"
}
