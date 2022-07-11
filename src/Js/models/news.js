export{main, News}

function main(){
    const main      = document.querySelector("main")

    const featured  = document.createElement('div')
    const divCards  = document.createElement('div')
    const cards     = document.createElement('ul')

    divCards.classList.add("divCards")
    featured.classList.add("featured")
    cards.classList.add("cards")

    main.appendChild(featured)
    divCards.appendChild(cards)
    main.appendChild(divCards)
}

class News {

    static createFeatured(obj){
        const f = document.createElement('div')
        const featured = document.querySelector('.featured')

        const categoria    = obj.categoria
        const imagem       = obj.imagem
        const titulo       = obj.titulo
        const fonte        = obj.fonte

        const div          = document.createElement('div')
        const div3         = document.createElement('div')
        const div4         = document.createElement('div')

        const tgtitulo     = document.createElement('p')
        const tgcategoria  = document.createElement('p')
        const tgfonte      = document.createElement('p')

        f.classList.add("f")
        div.classList.add("cardFeatured")
        div3.classList.add("divFonte")
        div4.classList.add("divCategoriaF")

        tgtitulo.classList.add("tituloFeatured")
        tgfonte.classList.add("fonteF")
        tgcategoria.classList.add("txtCategoria")

        tgcategoria.innerHTML = `${categoria}`
        tgtitulo.innerHTML    = `${titulo}`
        tgfonte.innerHTML     = `Fonte: ${fonte}`

        div.appendChild(f)
        div.style.background = `url(${imagem})`
        div.appendChild(div4)
        div4.appendChild(tgcategoria)
        div.appendChild(tgtitulo)
        div.appendChild(div3)
        div3.appendChild(tgfonte)
        f.appendChild(div4)

        featured.appendChild(div)


    }

    static createCard(obj){
        const li = document.createElement('li')
        const cards = document.querySelector('.cards')

        const imagem       = obj.imagem
        const titulo       = obj.titulo
        const noticia      = obj.resumo
        const categoria    = obj.categoria
        const fonte        = obj.fonte

        const div          = document.createElement('div')
        const div2         = document.createElement('div')
        const div3         = document.createElement('div')
        const div4         = document.createElement('div')
        const divInfos     = document.createElement('div')

        const tgimagem     = document.createElement('img')
        const tgtitulo     = document.createElement('p')
        const tgnoticia    = document.createElement('p')
        const tgcategoria  = document.createElement('p')
        const tgfonte      = document.createElement('p')

        div.classList.add("cardNews")
        divInfos.classList.add("infos")
        div2.classList.add("divCategoria")
        div3.classList.add("divNews")
        div4.classList.add("divFonte")

        tgcategoria.classList.add("txtCategoria")
        tgimagem.classList.add("imgNews")
        tgnoticia.classList.add("txtNews")
        tgtitulo.classList.add("tituloNews")
        tgfonte.classList.add("fonte")

        tgcategoria.innerHTML = `${categoria}`
        tgimagem.src          = `${imagem}`
        tgtitulo.innerHTML    = `${titulo}`
        tgnoticia.innerHTML   = `${noticia}`
        tgfonte.innerHTML     = `Fonte: ${fonte}`
        
        div.appendChild(tgimagem)
        div.appendChild(divInfos)
        divInfos.appendChild(div2)
        div2.appendChild(tgcategoria)
        divInfos.appendChild(tgtitulo)
        divInfos.appendChild(div3)
        div3.appendChild(tgnoticia)
        divInfos.appendChild(div4)
        div4.appendChild(tgfonte)

        li.appendChild(div)
        cards.appendChild(li)

    }

    static featured(arrNews){
        arrNews.find(
            (obj) => {
                if (obj.id === 3){
                this.createFeatured(obj)
            }

        })
    }

    static listCard(arrNews){
        arrNews.forEach((obj) => this.createCard(obj))
    }
}

