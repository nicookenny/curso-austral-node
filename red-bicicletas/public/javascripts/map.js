let map = L.map('main_map').setView([-34.636865, -58.372283],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
}).addTo(map)

$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: function(result){
        
        console.log(result);

        result.bicicletas.forEach((bici)=>{
            L.marker(bici.ubicacion,{title:bici.id}).addTo(map)
        })
    }
})