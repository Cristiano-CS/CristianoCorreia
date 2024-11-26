//============================= Produtos =========================================
var productsList = document.getElementById("productsList");
var btnProduct = document.getElementById("btnDetalhe");

const URL = "https://dummyjson.com/products";


// Busca produtos  e insere na tela
fetch(URL)
.then((data)=>data.json())
.then((data)=>{ 
    productsList.innerHTML = "";
    for(var i=0; i<data.products.length;i++){
        
        productsList.innerHTML += `
            <article > <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${data.products[i].images[0]}" alt="Card image cap">
                <div class="card-body">
                    <h5 >${data.products[i].title}</h5>
                    <p class="card-text">R$${data.products[i].price}</p>
                    <form id="form" method="get" action="products/products.html">
                    <input type="text" name="idUser" value="${data.products[i].id}" class="inputId">
                    <button type="submit" class="btn btn-primary">Detalhes</button>
                </form>
                </div>
                </div>
            </article>
            
        `
        
    }
});




