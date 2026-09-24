function procesar() {
    const precio = parseFloat(document.getElementById("precio").value)
    const cantidad = parseInt(document.getElementById("cantidad").value)
    if (precio <= 0|| cantidad <= 0 || isNaN(precio) || isNaN(cantidad)) {
        document.getElementById("totalpagar").value = "Valores inválidos"
        document.getElementById("descuento").value = "Valores inválidos"
        return "(1) Invalid input";
    }
    const subtotal = precio * cantidad
    const descuento = calcularDescuento(subtotal)
    const total = subtotal - descuento
    if (descuento > 0) {
        document.getElementById("descuento").value = "Descuento de S/. " + descuento
    } else {
        document.getElementById("descuento").value = "No hay descuento"
    }
    document.getElementById("totalpagar").value = total
    return "(0) Success"
}   
function calcularDescuento(subtotal) {
    if (subtotal > 200) return subtotal * 0.15
    return 0;
}
function limpiar() {
    document.getElementById("precio").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("totalpagar").value = "";
    document.getElementById("descuento").value = "";
}