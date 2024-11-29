function filtrarPorCategoria(event) {
   
    event.preventDefault();

    
    const categoriaSelecionada = event.target.getAttribute('data-categoria');

    
    const produtos = document.querySelectorAll('.tudo .produtos1 div, .tudo .produtos2 div, .produtos3 div');

    
    produtos.forEach(produto => {
       
        const categoriaProduto = produto.getAttribute('data-categoria');

        if (categoriaSelecionada === 'todas' || categoriaSelecionada === categoriaProduto) {
          
            produto.style.display = 'block';
        } else {
            
            produto.style.display = 'none';
        }
    });
}


const linksCategorias = document.querySelectorAll('.filtros a, .filtros button');
linksCategorias.forEach(link => {
    link.addEventListener('click', filtrarPorCategoria);
});

