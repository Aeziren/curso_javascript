function check()
{
    const hoje = new Date()
    const ano = hoje.getFullYear()
    const nasc = document.querySelector("#nasc")
    const imagem = document.createElement('img')
    imagem.setAttribute('id', 'imagem')

    // Validando entrada de dados
    if (document.querySelector("#sexo_m").checked)
    {
        var sexo = 'Homem'
    }
    else if (document.querySelector("#sexo_f").checked)
    {
        var sexo = 'Mulher'
    }

    let idade = ano - Number(nasc.value)
    if (idade > 130 || idade < 0)
    {
        nasc.style.borderColor = "Red"
    }
    else
    {
        nasc.style.borderColor = "Green"
        let output = document.querySelector("#output")
        output.innerHTML = `<p>${sexo} de ${idade} anos</p>`
        
        if (sexo == 'Homem')
        {
            if (idade <= 17)
            {
                imagem.setAttribute("src", "homens/menor_18.webp")
            }
            else if (idade <= 40)
            {
                imagem.setAttribute("src", "homens/maior_18.webp")
            }
            else if (idade <= 70)
            {
                imagem.setAttribute("src", "homens/maior_40.webp")
            }
            else
            {
                imagem.setAttribute("src", "homens/maior_70.webp")
            }
        }
        else
        {
            if (idade < 17)
            {
                imagem.setAttribute("src", "mulheres/menor_18.webp")
            }
            else if (idade <= 40)
            {
                imagem.setAttribute("src", "mulheres/maior_18.webp")
            }
            else if (idade <= 70)
            {
                imagem.setAttribute("src", "mulheres/maior_40.webp")
            }
            else
            {
                imagem.setAttribute("src", "mulheres/maior_70.webp")
            }
        } 
        output.appendChild(imagem)
    }
    
}