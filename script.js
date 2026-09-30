const currencyFormatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0
});

const button = document.getElementById("calculate");

const tipButtons = document.querySelectorAll(".tip-button");

tipButtons.forEach(function (tipButton) {

    tipButton.addEventListener("click", function () {

        const selectedTip = tipButton.dataset.tip;

        document.getElementById("tip").value = selectedTip;

    });

});

button.addEventListener("click", function () {

    const bill = Number(document.getElementById("bill").value);
    const tip = Number(document.getElementById("tip").value);
    const people = Number(document.getElementById("people").value);

    // Validaciones
    // 1. cuenta válida
    if (bill <= 0) {
        alert("Ingresa un monto de cuenta válido.");
        return;
    }
// 2. propina válida
    if (tip < 0) {
        alert("La propina no puede ser negativa.");
        return;
    }
// 3. número de personas válido
    if (people <= 0 || !Number.isInteger(people)) {
        alert("El número de personas debe ser un entero mayor que 0.");
        return;
    }

    // Cálculos
    const tipAmount = bill * (tip / 100);
    const total = bill + tipAmount;
    const perPerson = total / people;

    // Mostrar resultados
   document.getElementById("tipResult").textContent = currencyFormatter.format(tipAmount);
   document.getElementById("totalResult").textContent = currencyFormatter.format(total);
   document.getElementById("personResult").textContent = currencyFormatter.format(perPerson);
});