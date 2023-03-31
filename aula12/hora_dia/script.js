const hoje = new Date()
let hora = hoje.getHours()
let msg = document.querySelector("#msg")
let imagem = document.querySelector("#imagem")

msg.innerHTML = `<p>Agora são ${hora} horas </p>`
if (hora > 2 && hora < 6)
{
    document.body.style.background = "rgb(227, 208, 116)"
    imagem.src = "images/cambrise.jpg"
}
else if (hora >= 6 && hora <= 15)
{
    document.body.style.background = "rgb(77, 139, 216)"
    imagem.src = "images/sunny.jpg"
}
else if (hora > 15 && hora <= 18)
{
    document.body.style.background = "rgb(221, 88, 0)"
    imagem.src = "images/afternoom.jpeg"
}
else
{
    document.body.style.background = "rgb(0, 0, 120)"
    imagem.src = "images/midnight.webp"
}