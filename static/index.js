
//TODO: Get elements from HTML(inputs, selects, buttons)
const amountInput = document.getElementById('amount');
const from_select = document.getElementById('from_currency');
const to_select = document.getElementById('to_currency');
const resultBox = document.getElementById('result_number');
const convertBtn = document.getElementById('convert-btn');
const swapBtn = document.getElementById("swap-btn");

//TODO: Load old selection from localStorage
from_select.value = localStorage.getItem("lastFrom") || "CZK";
to_select.value = localStorage.getItem("lastTo") || "EUR";

//TODO: Event listeners to the convert button
convertBtn.addEventListener("click", function () {
    const amount = amountInput.value;
    const from_currency = from_select.value;
    const to_currency = to_select.value;

    // Validate inputs: amount is entered, more than 0, numeric value
    if(!amount) {
        resultBox.textContent = "Insert amount for conversion!";
    return;
}
    if ( isNaN(amount) || amount <= 0) {
        resultBox.textContent = "Value for conversion has to be more than 0.";
        return;
    }
    // different currencies
    if (from_currency === to_currency) {
        resultBox.textContent = "Pick two different currencies.";
        return;
    }

    //TODO: Disable convert button during conversion and show some info during action
    resultBox.textContent = "Converting..";
    convertBtn.disabled = true;

    //TODO: Send a fetch request to the Flask backend
    fetch("/convert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            amount: amount,
            from_currency: from_currency,
            to_currency: to_currency
        })
    })

    //TODO: Process the answer and display the result
    .then(response => response.json())
    .then(data => {
        if (data.result !== undefined) {
            resultBox.textContent = `${amount} ${from_currency} = ${data.result}`;
        } else {
        resultBox.textContent = "Convert Error"
        }
    })
    .catch(() => {
        resultBox.textContent = "Server Error";
    })
    //TODO: Restore button status, hide loader
    .finally(() => {
        convertBtn.disabled = false;
    });


    // Save to local storage
    localStorage.setItem("lastFrom", from_currency);
    localStorage.setItem("lastTo", to_currency);
});

//TODO: Possibility to switch currencies with a button
swapBtn.addEventListener("click", function () {
    const temp = from_select.value;
    from_select.value = to_select.value;
    to_select.value = temp;
    })
