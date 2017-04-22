class ljqPaginator {
	constructor(elem,Space,Contador,elemxpage) {
		this.elem = elem;
		this.Space =Space;
		this.Contador= Contador;
		this.elemxpage=elemxpage;
	}
	DrawPaginator () {
		$('head').append('');
		var elementos = this.elem;
		var tam =elementos.length;
		var pages = Math.ceil(tam/this.elemxpage);
		for(i=0;i<tam;i++){
			if(i<this.elemxpage){
				$(this.Space).append('<div  >'+elementos[i]+'</div>');
			}
		}
		var htmlbase= '	<center><div class="row" id="Paginador_lnx_3000"><div class="col  col-xs-12 col-sm-3 col-md-4"></div><div class="col  col-xs-12 col-sm-6 col-md-4"><div class="row "><div class="col   col-xs-3 "></div><div  align="right" class="col   col-xs-2 "><button align="center" id="PagAnterior" style="width:50px; "  class="btn btn-sm btn-default prefix"> &lt; </button></div><div class="col  col-xs-2  "><input style="width:50px; "  class="form-control" id="PagNumero" type="text" value="1"></div><div align="left" class="col   col-xs-2  "><button id="PagSiguiente" style="width:50px; "  class="btn btn-sm btn-default  postfix"> &gt; </button></div></div></div> </div>  <div id="Pagination_SC" class="row"><center> <small><em> Página  <strong id="No_Cambiante">1</strong> de '+pages+'</em> <br> '+this.elemxpage+' elementos por página de '+tam+' elementos totales </small> </center></div> </center>';
		$(this.Contador).html(htmlbase);
		var xpage= this.elemxpage;
		var spaCe = this.Space;
		$('#PagAnterior').click(function(){
			var num = Number($('#PagNumero').val());
			num = num-1;
			if(num <= 0){
				alert('No hay paginas anteriores a 1');
			}else{
				var valFn= num*xpage;
				var valIn=(valFn-xpage)+1;
				$('#PagNumero').val(num);
				$('#No_Cambiante').html(num);
				$(spaCe).html('');
				var j = 0;
				for(j = valIn ; j<=valFn;j++ ){
					var k=j-1;
					if(elementos[k]){
						$(spaCe).append('<div  >'+elementos[k]+'</div>');
					}
				}
			}
		});
		$('#PagSiguiente').click(function(){
			var num =Number($('#PagNumero').val());
			num = num+1;
			if(num > pages){
				alert('No hay paginas superiores a '+ pages);
			}else{
				var valFn= num*xpage;
				var valIn=(valFn-xpage)+1;
				$('#PagNumero').val(num);
				$('#No_Cambiante').html(num);
				$(spaCe).html('');
				var j = 0;
				for(j=valIn ;j<=valFn ;j++ ){
					var k=j-1;
					if(elementos[k]){
						$(spaCe).append('<div  >'+elementos[k]+'</div>');
					}
				}
			}
		});
		$('#PagNumero').change(function(){
			var num =Number($('#PagNumero').val());
			if(num > pages){
				alert('No hay paginas superiores a '+ pages);
				$('#PagNumero').val(pages);
				$('#No_Cambiante').html(pages);
				num=pages;
				var valFn= num*xpage;
				var valIn=(valFn-xpage)+1;
				$('#PagNumero').val(num);
				$('#No_Cambiante').html(num);
				$(spaCe).html('');
				var j = 0;
				for(j=valIn ;j<=valFn ;j++ ){
					var k=j-1;
					if(elementos[k]){
						$(spaCe).append('<div  >'+elementos[k]+'</div>');
					}
				}

			} else if(num <= 0){
				alert('No hay paginas anteriores a 1');
				$('#PagNumero').val(1);
				$('#No_Cambiante').html(1);
				num=1;
				var valFn= num*xpage;
				var valIn=(valFn-xpage)+1;
				$('#PagNumero').val(num);
				$('#No_Cambiante').html(num);
				$(spaCe).html('');
				var j = 0;
				for(j=valIn ;j<=valFn ;j++ ){
					var k=j-1;
					if(elementos[k]){
						$(spaCe).append('<div  >'+elementos[k]+'</div>');
					}
				}
			}else{
				var valFn= num*xpage;
				var valIn=(valFn-xpage)+1;
				$('#PagNumero').val(num);
				$('#No_Cambiante').html(num);
				$(spaCe).html('');
				var j = 0;
				for(j=valIn ;j<=valFn ;j++ ){
					var k=j-1;
					if(elementos[k]){
						$(spaCe).append('<div  >'+elementos[k]+'</div>');
					}
				}
			}
		});
	}

}