
const listaButton = document.querySelectorAll('.troca-cor')

const trocaCor = (cor) => {
    let circulo = document.querySelector('.circulo')
    circulo.style.background = cor
}

const trocaImagem = (imagem)=>{
    let iphone = document.querySelector('.iphone')
    iphone.src = imagem
}

for(let posicao=0; posicao < listaButton.length; posicao++){
    const botao = listaButton[posicao]

    botao.addEventListener('click', (evento) =>{
        const idButton = evento.target.id

        switch (idButton){
            case 'azul':
                trocaCor('#81A5C4')
                trocaImagem('./imagens/iphone-azul.png')
                break
            case 'amarelo':
                trocaCor('#F7DA47')
                trocaImagem('./imagens/iphone-amarelo.png')
                break
            case 'branco':
                trocaCor('#c1c1c1')
                trocaImagem('./imagens/iphone-branco.png')
                break
            case 'preto':
                trocaCor('#272D33')
                trocaImagem('./imagens/iphone-preto.png')
                break
            case 'vermelho':
                trocaCor('#b50012')
                trocaImagem('./imagens/iphone-vemelho.png')
                break
            case 'roxo':
                trocaCor('#EDE7F1')
                trocaImagem('./imagens/iphone-roxo.png')
                break
            default:
                alert('cor não encontrado')
                break
        }
    })
}