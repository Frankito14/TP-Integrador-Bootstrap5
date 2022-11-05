function descuentoSegunCategoria(){
    /*
        Describe el descuento correspondiente segun la categoria elegida en el select con id="valorCategoria";
        Tipo: Número.
    */
    let tipoDeCategoria = document.getElementById("valorCategoria").value;
    const descuentos = {
        "estudiante": 80,
        "trainee": 50,
        "junior": 15
    }

    return descuentos[tipoDeCategoria] || 0 ;
}


function totalAPagar(){
    /*
        Describe el total a pagar segun las opciones elegidas.
        Tipo: Número.
    */
   const VALOR_TICKET = 200;
   const cantidadTickets = document.getElementById("cantidadTickets").value;
   const descuento = descuentoSegunCategoria();
   const totalSinDescuento = (VALOR_TICKET * cantidadTickets);

   const totalAPagar = totalSinDescuento - (totalSinDescuento * descuento/100);

   (cantidadTickets < 0 || cantidadTickets == "") ? alert("No se ingreso ninguna cantidad de Tickets") 
                                                  : alert(`El total a pagar es $${totalAPagar}`);

   return  totalAPagar;
}

function MostrarResumen(){
    /*
        Mostrar el resumen en el p con id="totalAPagar"
        Modifica el DOM.
    */
    document.getElementById("totalAPagar").innerHTML  = ("Total a pagar: $"+totalAPagar());
}

function ReiniciarTotalAPagar(){
    /*
        Mostrar el resumen en el p con id="totalAPagar" con un total a pagar de 0
        Modifica el DOM
    */
    document.getElementById("totalAPagar").innerHTML  = ("Total a pagar: $0");
}