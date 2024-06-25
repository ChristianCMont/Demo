// Inicializa un array vacío para almacenar los números
let numbers = [];

// Función para agregar un número a la lista
function addNumber() {
    // Obtiene el valor del campo de entrada
    const numberInput = document.getElementById('numberInput');
    // Convierte el valor de la entrada en un número entero
    const number = parseInt(numberInput.value);

    // Verifica si el valor es un número válido
    if (!isNaN(number)) {
        // Agrega el número al array 'numbers'
        numbers.push(number);
        // Actualiza la lista de números en el DOM
        updateNumberList();
        // Limpia el campo de entrada
        numberInput.value = '';
    }
}

// Función para actualizar la lista de números en el DOM
function updateNumberList() {
    // Obtiene el elemento de la lista en el DOM
    const numberList = document.getElementById('numberList');
    // Limpia el contenido actual de la lista
    numberList.innerHTML = '';
    
    // Recorre el array 'numbers' y crea un elemento de lista para cada número
    numbers.forEach(number => {
        const li = document.createElement('li');
        li.textContent = number;
        // Agrega el elemento de lista al contenedor de la lista
        numberList.appendChild(li);
    });
}

// Función para generar y mostrar la lista de frecuencia de los números
function generateFrequencyList() {
    // Inicializa un objeto para almacenar la frecuencia de los números
    const frequency = {};

    // Recorre el array 'numbers' y cuenta la frecuencia de cada número
    numbers.forEach(number => {
        frequency[number] = (frequency[number] || 0) + 1;
    });

    // Ordena la lista de frecuencias en orden descendente
    const sortedFrequency = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .map(entry => `${entry[0]} (Repetido ${entry[1]} veces)`);

    // Obtiene el elemento de la lista de frecuencias en el DOM
    const frequencyList = document.getElementById('frequencyList');
    // Limpia el contenido actual de la lista de frecuencias
    frequencyList.innerHTML = '';
    
    // Recorre la lista de frecuencias ordenada y crea un elemento de lista para cada entrada
    sortedFrequency.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        // Agrega el elemento de lista al contenedor de la lista de frecuencias
        frequencyList.appendChild(li);
    });
}
