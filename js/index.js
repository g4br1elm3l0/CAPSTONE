var itensCarrinho = []







function addCards() {
    var vitrine = document.getElementById("vitrine")
    var card = ""
    for (let i = 0; i < data.length; i++) {
        card += "<div class=card>" +
            " <figure> <img class='" + data[i].tag[0] + "' src='" + data[i].img + "' alt='" + data[i].nameItem + "'> </figure>" +
            "<h2>" + data[i].tag[0] + "</h2><br>" +
            "<h1>" + data[i].nameItem + "</h1><br>" +
            "<p>" + data[i].description + "</p><br>" +
            "<p>" + data[i].imageValue + "</p><br>" +
            "<button class=addCart onclick='addCarrinho(" + data[i].id + ")'> adicionar ao carrinho </button>" +
            "</div>"
        vitrine.innerHTML += card
        card = ""
    }

}

addCards()



function addCarrinho(productId) {
    var carrinho = document.getElementById("carrinho")
    var produto = getProduct(productId)
    var htmlCard = ""

    if (itensCarrinho.length == 0 && produto !== null) {
        carrinho.innerHTML = ""
        carrinho.innerHTML += "<h1 id='logoCarrinho'>Carrinho de compras</h1>"
    }

    if (produto !== null) {
        htmlCard += "<div class='cartProduct'>" +
            "<figure> <img class='" + produto.tag[0] + "' src='" + produto.img + "' alt='" + produto.nameItem + "'> </figure>" +
            "<h3>" + produto.nameItem + " </h3> <br> " +
            " <p>" + produto.imageValue + "</p><br> " +
            "<button class='removeItem' onclick='removeCart(" + produto.id + ")'> remover produto </button>"

        carrinho.innerHTML += htmlCard

        itensCarrinho.push(produto.id)
        updateTotal()
    } else {
        alert("erro")
    }
}

function getProduct(productId) {
    for (let i = 0; i < data.length; i++) {
        if (productId == data[i].id) {
            return data[i]
        }
    }

    return null
}

function clearCart() {
    var carrinho = document.getElementById("carrinho")
    carrinho.innerHTML = ""
    carrinho.innerHTML += "<h1 id='logoCarrinho'>Carrinho de compras</h1>"
}

function updateCart() {
    var produto
    var carrinho = document.getElementById("carrinho")
    var htmlCard = ""

    clearCart()
    updateTotal()

    if (itensCarrinho.length !== 0) {

        for (let i = 0; i < itensCarrinho.length; i++) {
            produto = getProduct(itensCarrinho[i])

            htmlCard += "<div class='cartProduct'>" +
                "<figure> <img class='" + produto.tag[0] + "' src='" + produto.img + "' alt='" + produto.nameItem + "'> </figure>" +
                "<h3>" + produto.nameItem + " </h3> <br> " +
                " <p>" + produto.imageValue + "</p><br> " +
                "<button class='removeItem' onclick='removeCart(" + produto.id + ")'> remover produto </button>"

            carrinho.innerHTML += htmlCard
            htmlCard = ""
        }
    } else {
        carrinho.innerHTML += "<h3>O carrinho está vazio<br> Adicione itens.</h3>"
    }

}



function removeCart(productId) {
    if (itensCarrinho.length !== 0) {

        for (let i = 0; i < itensCarrinho.length; i++) {
            if (itensCarrinho[i] == productId) {
                itensCarrinho.splice(i, 1)
                break
            }
        }

        updateCart()

    } else {
        alert("erro")
    }
}



function updateTotal() {
    var qnt = document.getElementById("qnt")
    var ttl = document.getElementById("ttl")

    qnt.innerHTML = itensCarrinho.length
    ttl.innerHTML = "R$" + calcularTotal()
}


updateTotal()

function calcularTotal() {
    var total = 0
    var produto

    for (let i = 0; i < itensCarrinho.length; i++) {
        produto = getProduct(itensCarrinho[i])
        total += produto.value
    }

    return total
}




