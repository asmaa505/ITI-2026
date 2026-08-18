function initMap() {
    const coordsElem = document.getElementById("Coordinates");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        // نجاح جلب الموقع
        function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const myLatLng = { lat: latitude, lng: longitude };

            if (coordsElem) {
                coordsElem.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
            }

            const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 15,
                center: myLatLng,
            });

            new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: "My Current Location",
            });
            },
        function () {
            alert("Unable to get your current location.");
            }
        );
        } else {
        alert("Geolocation is not supported by this browser.");
        }
    }

window.initMap = initMap;