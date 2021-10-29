document.getElementById("m").addEventListener("click", presentar);

function presentar(){
	var mymap = L.map('mapa').setView([4.612639, -74.0705], 5);

	L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
			maxZoom: 18,
			attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
				'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
			id: 'mapbox/streets-v11',
			tileSize: 512,
			zoomOffset: -1
		}).addTo(mymap);

	L.marker([4.612639, -74.0705]).addTo(mymap).bindPopup("<b>Esto es Bogotá!</b><br />Yo soy un popup.").openPopup();

	L.circle([4.612639, -74.0705], 500, {
			color: 'red',
			fillColor: '#f03',
			fillOpacity: 0.5
	}).addTo(mymap).bindPopup("I am a circle.");

	L.polygon([
			[4.6368, -74.083],
			[4.70796, -74.09948],
			[4.7028, -74.1459]
	]).addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();

	function onMapClick(e) {
			 popup.setLatLng(e.latlng).setContent("You clicked the map at " + e.latlng.toString()).openOn(mymap);
	 }
	mymap.on('click', onMapClick);
}
