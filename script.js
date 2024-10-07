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
    const expression = document.getElementById('display').value;
    fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ expression }),
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                document.getElementById('display').value = 'Error';
            } else {
                document.getElementById('display').value = data.result;
            }
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
