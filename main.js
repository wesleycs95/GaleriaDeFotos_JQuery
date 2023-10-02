$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
            const enderecoNovaImagem = $('#enderecoNovaImagem').val();
            const novoItem = $('<li style= "display:none"></li>');
            $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);

            $(`
            
            <div class="overleyImagemLink">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank">
                    Ver imagem em tamanho real
                </a>
            </div>

            `).appendTo(novoItem);

            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $('#enderecoNovaImagem').val(' ')
    })
})