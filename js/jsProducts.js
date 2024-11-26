const urlParams = new URLSearchParams(window.location.search);

const idUser = urlParams.get("idUser") 

const URL = `https://dummyjson.com/products/${idUser}`;

fetch(URL)
.then((data)=>data.json())
.then((data)=>{
    detalheProduto.innerHTML = "";

        detalheProduto.innerHTML += `
            <article > 
            <div class="card" style="height:auto;">
                <div class="card-body">
                   
                    <img class="card-img-bottom" src="${data.images[0]}" alt="Card image cap" style="width:450px; ">
                     <img class="card-img-bottom" src="${data.meta.qrCode}" alt="Card image cap" style="width:270px; ">
                     <h5 class="card-title" >${data.title}</h5>
                    
    
                    <p class="card-text"> <strong>Descrição :</strong> ${data.description}</p>
                    <p class="card-text"> <strong>Categoria :</strong> ${data.category}</p>
                    <p class="card-text"> <strong>Largura :</strong> ${data.dimensions.width} cm</p>  
                    <p class="card-text"> <strong>Altura :</strong> ${data.dimensions.height}cm</p>  
                    <p class="card-text"> <strong>Profundidade :</strong> ${data.dimensions.depth}cm</p> 

                    
                    <p class="card-text"> <strong>Quantidade Mínima :</strong> ${data.minimumOrderQuantity} unidades</p> 
                    <hr>
                    <h3 class="card-text"> <strong>Comentários </strong> </h3> 
                    
                    <p class="card-text"> <strong>Comentário :</strong> ${data.reviews[0].comment}</p>
                    <p class="card-text"> <strong>Nome :</strong> ${data.reviews[0].reviewerName}</p>
                    <p class="card-text"> <strong>Email :</strong> ${data.reviews[0].reviewerEmail}</p> 
                    <p class="card-text"> <strong>Data :</strong> ${data.reviews[0].date}</p>  
                    <hr>
                    <p class="card-text"> <strong>Comentário :</strong> ${data.reviews[1].comment}</p>
                    <p class="card-text"> <strong>Nome :</strong> ${data.reviews[1].reviewerName}</p>
                    <p class="card-text"> <strong>Email :</strong> ${data.reviews[1].reviewerEmail}</p> 
                    <p class="card-text"> <strong>Data :</strong> ${data.reviews[1].date}</p>  
                    <hr>
                    <p class="card-text"> <strong>Comentário :</strong> ${data.reviews[2].comment}</p>
                    <p class="card-text"> <strong>Nome :</strong> ${data.reviews[2].reviewerName}</p>
                    <p class="card-text"> <strong>Email :</strong> ${data.reviews[2].reviewerEmail}</p> 
                    <p class="card-text"> <strong>Data :</strong> ${data.reviews[2].date}</p>  

                    <p class="card-text"><small class="text-muted">Ultima atualização 3 minutos</small></p>
                </div>
                
                </div>
            </article>
            
        `
});


