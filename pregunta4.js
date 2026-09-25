function calcularTarifa() {
    const consumo = parseInt(document.getElementById("consumo").value)
    const tarifa = parseFloat(document.getElementById("tarifa").value)

    if (isNaN(consumo) || isNaN(tarifa)) {
        document.getElementById("tipoConsumo").value = "Error: complete todos los campos"
        document.getElementById("montoPagar").value = "";
        return 1;
    } else if (consumo <= 0 || tarifa <= 0) {
        document.getElementById("tipoConsumo").value = "Error: ingrese valores numéricos mayores a 0"
        document.getElementById("montoPagar").value = "";
        return 2;
    }

    let total = consumo * tarifa
    if (consumo > 300) {
        total = total + total*0.1
        document.getElementById("tipoConsumo").value ="Consumo alto: se aplicó un recargo del 10%"
    } else {
        document.getElementById("tipoConsumo").value = "Consumo normal: sin recargo"
    }
    document.getElementById("montoPagar").value = total.toFixed(2)
}

function limpiar() {
    document.getElementById("consumo").value = ""
    document.getElementById("tarifa").value = ""
    document.getElementById("montoPagar").value = ""
    document.getElementById("tipoConsumo").value = ""
}