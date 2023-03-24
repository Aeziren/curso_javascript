const hoje = new Date()
let hora = hoje.getHours()
let fundo = document.querySelector("body")
let container = document.querySelector("#container")

if (hora > 2 && hora < 6)
{
    fundo.style.background = "rgb(227, 208, 116)"
    container.innerHTML = `<p>Agora são ${hora} horas</p>`
    container.innerHTML += '<img id="imagem" src="images/cambrise.jpg" alt="Amanhecer">'
}
else if (hora >= 6 && hora <= 15)
{
    fundo.style.background = "rgb(77, 139, 216)"
    container.innerHTML = `<p>Agora são ${hora} horas </p>`
    container.innerHTML += '<img id="imagem" src="images/sunny.jpg" alt="Dia Ensolarado">'
}
else if (hora > 15 && hora <= 18)
{
    fundo.style.background = "rgb(221, 88, 0)"
    container.innerHTML = `<p>Agora são ${hora} horas </p>`
    container.innerHTML += '<img id="imagem" src="images/afternoom.jpeg" alt="Entardecer">'
}
else
{
    fundo.style.background = "rgb(0, 0, 120)"
    container.innerHTML = `<p>Agora são ${hora} horas </p>`
    container.innerHTML += '<img id="imagem" src="images/midnight.webp" alt="Noite">'
}