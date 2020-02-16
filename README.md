# SafeStreets

SafeStreets is a women safety app which uses a least-cost algorithm to generate the safest route of travel from their current location to any destination using the Google Maps API.

While Google Maps shows the shortest path from a starting point to a destination, this app employs an algorithm which takes safety of a location as a parameter to map the safest route possible with a distance threshold at any time of the day or night.

## Technologies Used

* Android Studio
* ReactJS
* NodeJS
* Google Maps SDK
* Google Maps Directions API
* MapBox

## Instructions to run Android Studio app

1. Import Project "safefam"
2. Get API keys as per instructions from [console.cloud.google.com](console.cloud.google.com)
3. Replace "Your API Key HERE" fields in **BasicMapDemoActivity.JAVA** and **google_maps_api.xml**
4. Run app

## Instructions to run Node Server

1. cd into NodeBackend using ```cd NodeBackend```
2. Run ```npm i```
3. Enter your email credentials in nodemailer.
4. Enter "Your API Key HERE"
5. Run server using ```node index.js```

## Instructions to run React App

1. cd into safereact using ```cd safereact```
2. Run ```npm i```
3. Enter your MAPBOX API Key 
4. To run react application , ```npm start```

This opens React Application on localhost:3000/ 
