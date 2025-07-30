
    function initAutocomplete() {
        const fromInput = document.getElementById('from-location');
        const toInput = document.getElementById('to-location');

        const options = {
            componentRestrictions: {
                country: "au"
            },
            types: ["geocode"],
            fields: ["address_components", "formatted_address"]

        };

        new google.maps.places.Autocomplete(fromInput, options);
        new google.maps.places.Autocomplete(toInput, options);
    }

    // Initialize when the page loads
    window.addEventListener('load', initAutocomplete);