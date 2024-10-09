function clearDisplay() {
    document.getElementById('display').value = '';
}

function addToDisplay(value) {
    document.getElementById('display').value += value;
}


function deleteLast() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}


function calculateResult() {
    const expression = document.getElementById("expression").value;

    fetch('/api/calculate', {  // Pastikan path mengarah ke endpoint API
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ expression }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById("result").innerText = "Hasil: " + data.result;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("result").innerText = "Error: " + error.message;
    });
}

function showHistory() {
    const historyDiv = document.getElementById('history');
    const historyList = document.getElementById('historyList');

    historyList.innerHTML = ''; // Clear previous history

    history.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        historyList.appendChild(listItem);
    });

    // Toggle the history section visibility
    historyDiv.style.display = (historyDiv.style.display === 'none') ? 'block' : 'none';
}
