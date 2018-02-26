$(document).ready(function () {

    // Inicializando input 
    Materialize.updateTextFields();
    //Obtener valor del input y limpiarlos
    $('.btn-go').click(function () {
        var inputSearch = $('#search').val();
        $('#search').val('');
        $('#search').empty();
        $('product-info').empty();
        //llamando API
        $.ajax({
            url: 'https://api.mercadolibre.com/sites/MLC/search?q=' + inputSearch + '&' + 'limit=20 ',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                var product = data.query;
                /*var results = data.results
                     console.log(results); */
                //generando variables
                for (i = 0; i < data.results.length; i++) {
                    var images = data.results[i].thumbnail;
                    console.log(images);
                    var title = data.results[i].title;
                    var id = data.results[i].id;
                    console.log(id)
                    console.log(title);
                    var price = data.results[i].price;
                    console.log(price);
                    var condition = data.results[i].condition;
                    console.log(condition);
                    var available = data.results[i].available_quantity;
                    console.log(available);
                    var sold = data.results[i].sold_quantity;
                    console.log(sold);
                    var city = data.results[i].address.state_name;
                    console.log(city);
                    var state = data.results[i].address.city_name;
                    console.log(state);
                    //Inyectando HTML con variables obtenidas
                    $('.product-info').append('<div class="col s12 m7 l6">' +
                        '<h5 class = "header center-align">' + title + '</h5>' +
                        '<div class = "card horizontal">' +
                        '<div class = "card-image">' +
                        '<img id="image" src="' + images + '">' +
                        '</div>' +
                        '<div class = "card-stacked">' +
                        '<div class = "card-content">' +
                        '<ul>' +
                        '<li id="foto1" draggable="true" class="red-text precio"> Precio:$' + price + '</li>' +
                        '<li> Condición:' + condition + '</li>' +
                        '<li> Disponibles:' + available + '</li>' +
                        '<li> Vendidos:' + sold + '</li>' +
                        '<li> Ciudad:' + city + '</li>' +
                        '<li> Comuna:' + state + '</li>' +
                        '</ul></div>' +
                        '<div class = "card-action">' +
                        '<a class="red-text buy" href = "#">Comprar Ahora</a>' +
                        '<a class="teal-text shopping" href = "#">Agregar al carro</a>' +
                        '</div></div></div></div>')

                    $(".shopping").click(function () {
                        $("#cart").append();
                        $("#cart").append("");
                    })


                }
            }

        });
    });

});

//Cargar productos al iniciar la página

function loadProducts() {
    const phone = products.celular.datos
    const bicycle = products.bicicleta.datos
    const bed = products.camaElastica.datos
    const fridge = products.refrigerador.datos


    $('#recomended-products').append('<div class="col s12 m7 l3">' +
        '<div class="card">' +
        '<div class="card-image">' +
        '<img src="' + phone[0].picture + '">' +
        '</div>' +
        '<div class="card-content">' +
        '<ul>' +
        '<li>' + phone[0].nombre + '</li>' +
        '<li class="red-text">' + phone[0].precio + '</li>' +
        '<li>' + phone[0].condicion + '</li>' +
        '</ul></div>' +
        '<div class="card-action">' +
        '<a class="teal-text" href="#">Comprar Ahora</a>' +
        '</div></div></div></div>')

    $('#recomended-products').append('<div class="col s12 m7 l3">' +
        '<div class="card">' +
        '<div class="card-image">' +
        '<img src="' + bicycle[0].picture + '">' +
        '</div>' +
        '<div class="card-content">' +
        '<ul>' +
        '<li>' + bicycle[0].nombre + '</li>' +
        '<li class="red-text">' + bicycle[0].precio + '</li>' +
        '<li>' + bicycle[0].condicion + '</li>' +
        '</ul></div>' +
        '<div class="card-action">' +
        '<a class="teal-text" href="#">Comprar Ahora</a>' +
        '</div></div></div></div>')

    $('#recomended-products').append('<div class="col s12 m7 l3">' +
        '<div class="card">' +
        '<div class="card-image">' +
        '<img src="' + bed[0].picture + '">' +
        '</div>' +
        '<div class="card-content">' +
        '<ul>' +
        '<li>' + bed[0].nombre + '</li>' +
        '<li class="red-text">' + bed[0].precio + '</li>' +
        '<li>' + bed[0].condicion + '</li>' +
        '</ul></div>' +
        '<div class="card-action">' +
        '<a class="teal-text" href="#">Comprar Ahora</a>' +
        '</div></div></div></div>')

    $('#recomended-products').append('<div class="col s12 m7 l3">' +
        '<div class="card">' +
        '<div class="card-image">' +
        '<img src="' + fridge[0].picture + '">' +
        '</div>' +
        '<div class="card-content">' +
        '<ul>' +
        '<li>' + fridge[0].nombre + '</li>' +
        '<li class="red-text">' + fridge[0].precio + '</li>' +
        '<li>' + fridge[0].condicion + '</li>' +
        '</ul></div>' +
        '<div class="card-action">' +
        '<a class="teal-text" href="#">Comprar Ahora</a>' +
        '</div></div></div></div>')
    //Agregando tarjetas coloreadas

    $('#more').append('<div class="col s12 m5 l4">' +
        '<div class="card-panel teal lighten-3">' +
        '<h4 class="center-align white-text">SOLO POR HOY</h4>' +
        '<h5 class="center-align yellow-text">destacados</h5>' +
        '<a href=""><i class="large material-icons">av_timer</i></a>' +
        '</div></div>')

    $('#more').append('<div class="col s12 m5 l4">' +
        '<div class="card-panel teal lighten-3">' +
        '<h4 class="center-align white-text">Especial Mochilas</h4>' +
        '<img src= "assets/images/.jpeg">' +
        '</div></div>')

    $('#more').append('<div class="col s12 m5 l4">' +
        '<div class="card-panel teal lighten-3">' +
        '<h4 class="center-align white-text">SOLO POR HOY</h4>' +
        '<h5 class="center-align yellow-text">destacados</h5>' +
        '<a href=""><i class="large material-icons">av_timer</i></a>' +
        '</div></div>')
};

//Carrito de compra


