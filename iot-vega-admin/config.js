const isSecure = document.location.protocol.startsWith('https');
const wsProtocol = isSecure ? 'wss://' : 'ws://';
const address_ws = `${wsProtocol}vega-server.ziondev.ru`;
const demo_user = false;
const select_server = false;
//const stock_address_ws = ['ws://192.168.0.1:8002','ws://127.0.0.1:8002'];
const map_tiles_leaflet = {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    options: {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
}
// const map_tiles_leaflet = {
//     url: "https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png",
//     options: {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }
// }
