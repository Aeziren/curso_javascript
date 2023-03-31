let numeros = []

function add()
{
    document.querySelector("#output").innerHTML = ""
    const num = document.querySelector("#number")
    if (num.value >= 1 && num.value <= 100 && numeros.indexOf(num.value) == (-1))
    {
        let lista = document.querySelector("#lista")
        numeros.push(Number(num.value))
        lista.innerHTML += `<li>${num.value}</li>`
    }
    else
    {
        alert("O número deve ser válido e não estar na lista.")
    }
    num.value = ''
    num.focus()
}

function result()
{
    if (numeros.length == 0)
    {
        alert("Adicione números primeiro")
        return;
    }
    const output = document.querySelector("#output")
    numeros.sort()
    let soma = 0
    for (let i in numeros)
    {
        soma += numeros[i]
    }
    output.innerHTML = ''
    output.innerHTML += `<p>Números cadastrados: ${numeros.length}</p>`
    output.innerHTML += `<p>Maior valor: ${numeros.slice(-1)}</p>`
    output.innerHTML += `<p>Menor valor: ${numeros[0]}</p>`
    output.innerHTML += `<p>Soma dos valores: ${soma}</p>`
    output.innerHTML += `<p>Média: ${soma / numeros.length}</p>`

}