(function () {

    var contadorContactos = 0;

    var $modal = $("#myModal");

    var cargarPagina = function () {
        $("#accion").click(mostrarFormulario);
        $(".agregar").click(cerrarModal);
        $(".agregar").click(agregarContacto);
    };

    var mostrarFormulario = function() {
        $modal.css("display","block");
    };


    var cerrarModal = function() {
        $modal.css("display","none");
    };

    var agregarContacto = function() {

    var datoNombre = $("#first_name");
    var $nombre = datoNombre.val();

    var datoApellido = $("#last_name");
    var $apellido = datoApellido.val();

    var datoTelefono = $("#phone_number");
    var $telefono = datoTelefono.val();

    var $elementoLista = $("<li />", {"class":"collection-item avatar"});
    var $icono = $("<i />", {"class":"material-icons circle "});
    var $campoNombre = $("<span />", {"class":"title"});
    var $campoApellido = $("<p />");
    var $campoTelefono = $("<p />");

    $campoNombre.text($nombre);
    $campoApellido.text($apellido);
    $campoTelefono.text($telefono);
    $icono.text("perm_identity");


    $(".collection").prepend($elementoLista);
    $elementoLista.append($icono);
    $elementoLista.append($campoNombre);
    $elementoLista.append($campoApellido);
    $elementoLista.append($campoTelefono);

    var contactos = $("contactos");
    contadorContactos++;
    contactos.text(contadorContactos);
    };





    $(document).ready(cargarPagina);
})();
