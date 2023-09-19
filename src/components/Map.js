import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import L from "leaflet";
// import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import "leaflet-defaulticon-compatibility";
import axios from "axios";

// arrow function
const Map = () => {
  useEffect(() => {
    //declearing and retriving the DOM element with id "map" using leaflet's utility function
    var container = L.DomUtil.get("map");

    //checking if the container element exisits
    if (container != null) {
      // setting id of container to null so it can detach from any existing map instances
      container._leaflet_id = null;
    }
    // initializing the map
    var map = L.map("map", { dragging: true }).setView([39.1031, -84.512], 12);
    // Adding a title to the map views
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // connecting and retriving data from database using axios(.then and catch)
    axios
      .get(process.env.REACT_APP_BACKEND + "attractions/")
      .then((res) => {
        const allAttractions = res.data;

        allAttractions.forEach((Att) => {
          let { lat, lng } = Att;

          L.marker([lat, lng]).addTo(map).bindPopup(Att.name);
        });
      })
      .catch((err) => console.log(err));

    // // Adding markers to each of attractions using L (leaflet JS liberary)
    // L.marker([39.1427, -84.5089]).addTo(map).bindPopup("Cincinnati Zoo"); //cincinnati zoo
    // L.marker([39.1304, -84.5149]).addTo(map).bindPopup("Museum"); // Cincinnati Museum
    // L.marker([39.094, -84.5255]).addTo(map).bindPopup("Ohio Riverfront"); // Ohio Riverfront
    // L.marker([39.1112, -84.5175]).addTo(map).bindPopup("Over-the-Rhine"); // Over-the-Rhine
    // L.marker([39.0986, -84.5079]).addTo(map).bindPopup("Aquarium"); // Aquarium
    // L.marker([39.1046, -84.5122]).addTo(map).bindPopup("View Tower"); // View Tower
    // L.marker([39.1018, -84.5128]).addTo(map).bindPopup("Restaurants"); // Restaurants
    // L.marker([39.1025, -84.5126]).addTo(map).bindPopup("Movie Theater"); // Movie Theater
    // L.marker([39.104, -84.5123]).addTo(map).bindPopup("Shopping"); // Shopping
    // L.marker([39.1055, -84.5127]).addTo(map).bindPopup("Hiking"); // Hiking
    // L.marker([39.0925, -84.5087]).addTo(map).bindPopup("Fishing"); // Fishing
    // L.marker([39.0971, -84.5082]).addTo(map).bindPopup("Baseball Stadium"); // Baseball Stadium
    // L.marker([39.1037, -84.5104]).addTo(map).bindPopup("Cincinnati Art Museum"); // Cincinnati Art Museum
    // L.marker([39.1032, -84.5099]).addTo(map).bindPopup("Krohn Conservatory"); // Krohn Conservatory
    // L.marker([39.1091, -84.5158]).addTo(map).bindPopup("Cincinnati Music Hall"); // Cincinnati Music Hall
    // L.marker([39.1065, -84.5081]).addTo(map).bindPopup("Cincinnati Shakespeare Company"); // Cincinnati Shakespeare Company
    // L.marker([39.1103, -84.5167]).addTo(map).bindPopup("Washington Park"); // Washington Park
    // L.marker([39.1052, -84.5129]).addTo(map).bindPopup("Findlay Market"); // Findlay Market
    // L.marker([39.1127, -84.5151]).addTo(map).bindPopup("Taft Museum of Art"); // Taft Museum of Art
    // L.marker([39.1049, -84.5131]).addTo(map).bindPopup("Contemporary Arts Center"); // Contemporary Arts Center
    // L.marker([39.1034, -84.5137]).addTo(map).bindPopup("Great American Ball Park"); // Great American Ball Park
    // L.marker([39.0979, -84.5094]).addTo(map).bindPopup("Cincinnati History Museum"); // Cincinnati History Museum
    // L.marker([39.1006, -84.508]).addTo(map).bindPopup("Cincinnati Observatory Center"); // Cincinnati Observatory Center
    // L.marker([39.1015, -84.5136]).addTo(map).bindPopup("Cincinnati Fire Museum"); // Cincinnati Fire Museum
    // L.marker([39.0988, -84.5115]).addTo(map).bindPopup("Cincinnati Children's Museum"); // Cincinnati Children's Museum
    // L.marker([39.0959, -84.5156]).addTo(map).bindPopup("Fountain Square"); // Fountain Square
    // L.marker([39.1069, -84.5109]).addTo(map).bindPopup("Cincinnati Playhouse in the Park"); // Cincinnati Playhouse in the Park
    // L.marker([39.0973, -84.5185]).addTo(map).bindPopup("Cincinnati Public Library"); // Cincinnati Public Library
    // L.marker([39.1078, -84.5143]).addTo(map).bindPopup("Cincinnati Ballet"); // Cincinnati Ballet
    // L.marker([39.1, -84.5151]).addTo(map).bindPopup("Eden Park"); // Eden Park
    // L.marker([39.1117, -84.5162]).addTo(map).bindPopup("Cincinnati Memorial Hall"); // Cincinnati Memorial Hall
    // L.marker([39.0962, -84.517]).addTo(map).bindPopup("Cincinnati Symphony Orchestra"); // Cincinnati Symphony Orchestra
    // L.marker([39.1011, -84.5133]).addTo(map).bindPopup("Cincinnati Food Tours"); // Cincinnati Food Tours
    // L.marker([39.0983, -84.5138]).addTo(map).bindPopup("Cincinnati Brewing Heritage Trail"); // Cincinnati Brewing Heritage Trail
    // L.marker([39.0967, -84.512]).addTo(map).bindPopup("Cincinnati Zoo Botanical Garden"); // Cincinnati Zoo Botanical Garden
    // L.marker([39.1021, -84.5154]).addTo(map).bindPopup("Cincinnati Art Underground"); // Cincinnati Art Underground
    // L.marker([39.0981, -84.5119]).addTo(map).bindPopup("Cincinnati Nature Center"); // Cincinnati Nature Center
    // L.marker([39.1016, -84.5158]).addTo(map).bindPopup("Cincinnati Segway Tours"); // Cincinnati Segway Tours
    // L.marker([39.0998, -84.5172]).addTo(map).bindPopup("Cincinnati Escape Room"); // Cincinnati Escape Room
    // L.marker([39.1072, -84.5085]).addTo(map).bindPopup("Cincinnati Reds Hall of Fame & Museum"); // Cincinnati Reds Hall of Fame & Museum
    // L.marker([39.101, -84.5176]).addTo(map).bindPopup("Cincinnati Axe Throwing"); // Cincinnati Axe Throwing
    // L.marker([39.1065, -84.5110]).addTo(map).bindPopup("Cincinnati Riverwalk"); // Cincinnati Riverwalk
    // L.marker([39.0995, -84.5135]).addTo(map).bindPopup("Cincinnati Cyclones Ice Hockey"); // Cincinnati Cyclones Ice Hockey
    // L.marker([39.1045, -84.5162]).addTo(map).bindPopup("Cincinnati Bengals Stadium"); // Cincinnati Bengals Stadium<--Benjamin McQueen
    // L.marker([39.1020, -84.5139]).addTo(map).bindPopup("Cincinnati Brewing Company"); // Cincinnati Brewing Company
    // L.marker([39.1080, -84.5110]).addTo(map).bindPopup("Cincinnati Comedy Club"); // Cincinnati Comedy Club
    // L.marker([39.1000, -84.5175]).addTo(map).bindPopup("Cincinnati Riverboat Cruise"); // Cincinnati Riverboat Cruise
    // L.marker([39.1060, -84.5140]).addTo(map).bindPopup("Cincinnati Farmers Market"); // Cincinnati Farmers Market
    // L.marker([39.1038, -84.5168]).addTo(map).bindPopup("Cincinnati Historic District"); // Cincinnati Historic District
    // L.marker([39.0982, -84.5108]).addTo(map).bindPopup("Cincinnati Skate Park"); // Cincinnati Skate Park
    // L.marker([39.1042, -84.5105]).addTo(map).bindPopup("Cincinnati Rock Climbing Gym"); // Cincinnati Rock Climbing Gym
  }, []); //empty array run this effect only once

  return <div id="map" style={{ height: "75vh" }}></div>;
};

export default Map;
