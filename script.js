const currencyFormatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

const button = document.getElementById("calculate");

const tipButtons = document.querySelectorAll(".tip-button");

tipButtons.forEach(function (tipButton) {

    tipButton.addEventListener("click", function () {

        // Quitar selección anterior
        tipButtons.forEach(function (button) {
            button.classList.remove("active");
        });

        // Marcar botón seleccionado
        tipButton.classList.add("active");

        // Obtener porcentaje
        const selectedTip = tipButton.dataset.tip;

        // Colocarlo en el input
        document.getElementById("tip").value = selectedTip;

    });

});

const errorMessage = document.getElementById("errorMessage");

errorMessage.textContent = "";

button.addEventListener("click", function () {

    const bill = Number(document.getElementById("bill").value);
    const tip = Number(document.getElementById("tip").value);
    const people = Number(document.getElementById("people").value);

    // Validaciones
    // 1. cuenta válida
    if (bill <= 0) {
    errorMessage.textContent = "Ingresa un monto de cuenta válido.";
    return;
}
    
// 2. propina válida
    if (tip < 0) {
    errorMessage.textContent = "La propina no puede ser negativa.";
    return;
    }
// 3. número de personas válido
    if (people <= 0 || !Number.isInteger(people)) {
        errorMessage.textContent = "Ingresa un número válido de personas.";
        return;
    }

    // Cálculos
    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    errorMessage.textContent = "";
    
    // Mostrar resultados
   document.getElementById("tipResult").textContent = currencyFormatter.format(tipAmount);
   document.getElementById("totalResult").textContent = currencyFormatter.format(total);
   document.getElementById("personResult").textContent = currencyFormatter.format(perPerson);
});