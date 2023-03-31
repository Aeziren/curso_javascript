function gerar()
{
    // Recebendo valor declarado
    const numero = Number(document.querySelector("#numero").value)
    const output = document.querySelector("#output")

    // Output
    output.innerHTML = ""
    for (let i = 1; i <= 10; i++)
    {
        output.innerHTML += `${numero} x ${i} = ${numero * i} <br>`
    }

}