function insertMenu() {
    // Create a new XMLHttpRequest (XHR) object
    var xhr = new XMLHttpRequest();

    // Specify the file to be loaded
    xhr.open('GET', 'menu.html', true);

    // Define the function to execute when the request is complete
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Insert the HTML code into the page
            var menu = document.querySelector('.menu'); // Change to your target element
            menu.innerHTML = xhr.responseText;
        }
    };

    // Send the request
    xhr.send();
}

/*Light/dark modes*/
function toggleMode() {
    const currentTheme = document.getElementById('theme').getAttribute('href');
    const lightTheme = 'style_light.css';
    const darkTheme = 'style_dark.css';
    const theme = currentTheme === lightTheme ? darkTheme : lightTheme;

    document.getElementById('theme').setAttribute('href', theme);
}