jQuery(document).ready(function($) {
	
	// Adicionar aos favoritos com JQUERY
	$('.infoMusic').click(function(){
		$(this).css('color','black');
		nome = $(this).attr('nome');
		alert(nome + ' adicionado com sucesso aos favoritos! ');
		
		
	})

	
});

	// ADICIONAR AOS FAVORITOS COM JAVASCRIPT
function add(nome){
	alert('Compra realizada com sucesso do album : '+nome+' !');
}