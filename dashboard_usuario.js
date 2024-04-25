const viajes = [
    {
        duracion: "2 horas",
        fecha: "2024-04-24",
        origen: "Lima",
        destino: "Arequipa",
        conductor: "Juan Pérez"
    },
    {
        duracion: "1.5 horas",
        fecha: "2024-04-25",
        origen: "Arequipa",
        destino: "Lima",
        conductor: "Alan García"
    },
    {
        duracion: "3 horas",
        fecha: "2024-04-26",
        origen: "Juliaca",
        destino: "Tarapoto",
        conductor: "Luis Suarez"
    },
    {
        duracion: "1 hora",
        fecha: "2024-04-27",
        origen: "Trujillo",
        destino: "Huaraz",
        conductor: "Martin Vizcarra"
    },
    {
        duracion: "2.5 horas",
        fecha: "2024-04-28",
        origen: "Tacna",
        destino: "Tumbes",
        conductor: "Sánchez Cerro"
    },
    {
        duracion: "2 horas",
        fecha: "2024-04-29",
        origen: "Lima",
        destino: "Chosica",
        conductor: "Manuel Odría"
    },
    {
        duracion: "3 horas",
        fecha: "2024-04-30",
        origen: "Chosica",
        destino: "Lima",
        conductor: "Miguel González"
    },
    {
        duracion: "1.5 horas",
        fecha: "2024-05-01",
        origen: "Cusco",
        destino: "Cajamarca",
        conductor: "Paolo Guerrero"
    },
    {
        duracion: "2 horas",
        fecha: "2024-05-02",
        origen: "Iquitos",
        destino: "Huaral",
        conductor: "David Flores"
    },
    {
        duracion: "2.5 horas",
        fecha: "2024-05-03",
        origen: "Lima",
        destino: "Chiclayo",
        conductor: "Leoncio Prado"
    }
];
const ultimosViajes = viajes.slice(-4);
const listaViajes = ultimosViajes.map(viaje => {
    return `<li>
                <strong>Duración:</strong> ${viaje.duracion}<br>
                <strong>Fecha:</strong> ${viaje.fecha}<br>
                <strong>Origen:</strong> ${viaje.origen}<br>
                <strong>Destino:</strong> ${viaje.destino}<br>
                <strong>Conductor:</strong> ${viaje.conductor}
            </li>`;
}).join('');

$("#ultimos-viajes").html(`<ul>${listaViajes}</ul>`);

$("#logout").on("click", function(){
    sessionStorage.removeItem("sesionActiva");
    window.location.href = "index.html";
});
