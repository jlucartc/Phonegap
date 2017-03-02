var info = document.getElementById('info');
info.appendChild(document.createElement('h3').appendChild(document.createTextNode(localStorage.deviceName+" - "+localStorage.deviceId+" - "+localStorage.deviceRssi)));
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('br'));
var cadastrar1 = document.createElement('button');
var voltar = document.createElement('button');
cadastrar1.style.marginRight = "30px";
cadastrar1.onclick = function(){ cadastrar(localStorage.deviceName,localStorage.deviceId,localStorage.deviceRssi) };
cadastrar1.innerHTML = 'Cadastrar';
cadastrar1.className = "btn btn-primary";
voltar.className = "btn btn-primary";
voltar.innerHTML = "Voltar";
voltar.onclick = function(){ window.location = 'index.html' };
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('br'));
info.appendChild(cadastrar1);
info.appendChild(voltar);

function cadastrar(name,id,rssi){
  if(localStorage.beaconsNames != null){

    var bnames = JSON.parse(localStorage.beaconsNames);
    var bids = JSON.parse(localStorage.beaconsIds);
    var brssi = JSON.parse(localStorage.beaconsRssi);
    var bimg = JSON.parse(localStorage.beaconsImgs);
    var bmsgs = JSON.parse(localStorage.beaconsMsgs);

    bnames.push(name);
    bids.push(id);
    brssi.push(70*(-1));
    bimg.push("NULL");
    bmsgs.push("NULL");

    localStorage.beaconsIds = JSON.stringify(bids);
    localStorage.beaconsRssi = JSON.stringify(brssi);
    localStorage.beaconsNames = JSON.stringify(bnames);
    localStorage.beaconsImgs = JSON.stringify(bimg);
    localStorage.beaconsMsgs = JSON.stringify(bmsgs);

    window.location = 'index.html';
  }else{

    var bnames = [];
    var bids = [];
    var brssi = [];
    var bimg = [];
    var bmsgs = [];

    bnames.push(name);
    bids.push(id);
    brssi.push(70*(-1));
    bimg.push("NULL");
    bmsgs.push("NULL");

    localStorage.beaconsIds = JSON.stringify(bids);
    localStorage.beaconsRssi = JSON.stringify(brssi);
    localStorage.beaconsNames = JSON.stringify(bnames);
    localStorage.beaconsImgs = JSON.stringify(bimg);
    localStorage.beaconsMsgs = JSON.stringify(bmsgs);

    window.location = 'index.html';
  }
}
