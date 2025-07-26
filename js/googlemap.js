
    function initAutocomplete() {
        const fromInput = document.getElementById('from-location');
        const toInput = document.getElementById('to-location');

        const options = {
            types: ['geocode'], // You can adjust this to 'establishment', 'address', etc.
            componentRestrictions: { country: "us" } // Optional: restrict to a country
        };

        new google.maps.places.Autocomplete(fromInput, options);
        new google.maps.places.Autocomplete(toInput, options);
    }

    // Initialize when the page loads
    window.addEventListener('load', initAutocomplete);