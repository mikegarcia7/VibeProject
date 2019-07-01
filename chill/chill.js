$(document).ready(function () {
    console.log("ready!");

    var googleURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAXo0etOXofBdm3qBblvRopzJxjPECY5Mw';

    var locations = {
        nbutton: [
            [32.933090, -96.838654, "Native Coffee", "dallascoffeeshop"],
            [32.955170, -96.768509, "Zero Degree Hookah Lounge", "hookah"],
            [32.955002, -96.840149, "Ron`s Place", "chill"]
        ], ebutton: [
            [32.865679, -96.767127, "Leela`s Wine", "wine"],
            [32.913540, -96.796620, "Fiction Coffee", "coffeeshop"],
            [32.815224, -96.771191, "La La Land Kind Coffee", "coffeeroast"]
        ], sbutton: [
            [32.793288, -96.806554, "Brewed+Pressed Coffee", "chillvibes"],
            [32.747886, -96.827241, "The Wild Detectives", "chillin"],
            [32.768879, -96.798088, "The Loft", "chillchill"]
        ], wbutton: [
            [32.811629, -96.774497, "Houndstooth Coffee", "dallaschill"],
            [32.736212, -96.784359, "Serve 320", "breakfast"],
            [32.801853, -96.921043, "Steam Theory Brewing", "brunch"]
        ], dbutton: [
            [32.782642, -96.795316, "Stupid Good Coffee", "dallaschilling"],
            [32.780443, -96.794827, "Bourbon And Banter", "coffee"],
            [32.815715, -96.801111, "Drip Coffee", "coffeelover"]
        ]
    };

    $("#nbutton,#ebutton,#sbutton,#dbutton,#wbutton").on("click", function () {
        var buttonId = $(this).attr('id');
        dropPins(locations[buttonId])
    })


    $.ajax({
        url: googleURL,
        method: 'GET',
        dataType: 'jsonp'
    }).then(function () {
        var x = 32.7767;
        var y = -96.797;


        var latlng = new google.maps.LatLng(x, y);
        var myOptions = {
            zoom: 10,
            center: latlng,

            styles: [
                { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
                { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },

                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [{ color: '#38414e' }]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#212a37' }]
                },
                {
                    featureType: 'road',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#9ca5b3' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry',
                    stylers: [{ color: '#746855' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'geometry.stroke',
                    stylers: [{ color: '#1f2835' }]
                },
                {
                    featureType: 'road.highway',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#f3d19c' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'geometry',
                    stylers: [{ color: '#2f3948' }]
                },
                {
                    featureType: 'transit.station',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#d59563' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#17263c' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.fill',
                    stylers: [{ color: '#515c6d' }]
                },
                {
                    featureType: 'water',
                    elementType: 'labels.text.stroke',
                    stylers: [{ color: '#17263c' }]
                }
            ]
        };
        map = new google.maps.Map(document.getElementById('map'), myOptions);
    });
    
    var markers = [];
    function dropPins(places) {
        // clearMarkers();
        deleteMarkers();
        var marker, i;
        var infowindow = new google.maps.InfoWindow();
        for (i = 0; i < places.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(places[i][0], places[i][1]),
                map: map,
                instagram: places[i][3]
            });
            markers.push(marker);

            google.maps.event.addListener(marker, 'click', (function (marker, i) {
                return function () {
                    console.log(this.instagram);
                    instagramPic(this.instagram.replace(/\s+/g, ''));
                    infowindow.setContent(places[i][2]);
                    infowindow.open(map, marker);
                }
                
            })(marker, i));
        };
    }

    function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }

    // Removes the markers from the map, but keeps them in the array.
    function clearMarkers() {
        setMapOnAll(null);
    }

    // Deletes all markers in the array by removing references to them.
    function deleteMarkers() {
        clearMarkers();
        markers = [];
    }

    // - - - - - - - - - - - - - - C: ND - Location 1 - - - - - - - - - - - - - - -
    // onClick function for North Dallas Button
    var instagramPic = function (location) {
        console.log(location)
        $("#instaimg").empty();
        // Define variable for Chill: North Dallas
        var instaId = "17841415254952941"
        var accessToken = "&access_token=EAAGZAwK5rShUBAGGjrPWooHiF06tiHk1agIidCwePxBpRPMUAG5yDpc4NsKBfog6o0R7i6TSpKEY2L5OoL7AX4rTEdGBzqOaw5bi1aKS6gtycLxMZBjw4jWYUuMrBkKlEgu6RSq6L2FQU8IoMeQKZB8BwQ4ZAU6DUKKKCY2KKlrujVDvNVEg1sRZBG4UaieSzntn2GUZCORSwwZAkgWdXz8Bfd1a3wgLEk3JhCRQlnT65acdhYlzAGx"
        // var chillnLocation1 = "dallascoffeeshop";
        var getHashtagIdUrl = "https://graph.facebook.com/v3.2/ig_hashtag_search?user_id=" + instaId + "&q=" + location + accessToken;

        // - - - - - - To get the hashtag ID - - - - - - - - 
        $.ajax({
            url: getHashtagIdUrl,
            method: "GET",
        }).then(function (response) {

            var hashtagId = response.data[0].id
            // - - - - To get Media Fields of Hashtag ID - - - - - - - -
            // Define new variable
            var topMediaResultUrl = "https://graph.facebook.com/v3.3/" + hashtagId + "/top_media?fields=media_type,media_url,permalink&limit=20&user_id=" + instaId + accessToken;

            $.ajax({
                url: topMediaResultUrl,
                method: "GET",
            }).then(function (response) {

                // Saving the image_original_url property
                var imageUrl = response.data;
                console.log(response)

                // Looping through each result item
                for (var i = 0; i < imageUrl.length; i++) {
                    // Specifies media-type value
                    if (imageUrl[i].media_type === "IMAGE") {

                        // Creating and storing an image tag
                        var chillnImageLocation1 = $("<img>");
                        // Setting the chillnImageLocation1 src attribute to imageUrl
                        chillnImageLocation1.attr("src", imageUrl[i].media_url);
                        chillnImageLocation1.attr("alt", "chill image");
                        // Prepending the chillnImageLocation1 to the images div
                        $("#instaimg").prepend(chillnImageLocation1);
                    } else {
                        continue;
                    }

                };
            });
        });
    };
});
