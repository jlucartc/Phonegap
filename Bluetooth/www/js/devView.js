var id = localStorage.item;
var name;
var msg;
var img;
var rssi;
var info = document.getElementById('info');
for(var i = 0; i < JSON.parse(localStorage.beaconsIds).length; i++){
  if(id == JSON.parse(localStorage.beaconsIds)[i]){
      name = JSON.parse(localStorage.beaconsNames)[i];
      msg = JSON.parse(localStorage.beaconsMsgs)[i];
      img = JSON.parse(localStorage.beaconsImgs)[i];
      rssi = JSON.parse(localStorage.beaconsRssi)[i];
      break;
  }
}

info.appendChild(document.createElement('h3').appendChild(document.createTextNode("Name: "+name)));
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('h3').appendChild(document.createTextNode("Id: "+id)));
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('label').appendChild(document.createTextNode('Msg: ')));
var input = document.createElement('input');
var input2 = document.createElement('input');
input2.type = 'number';
input2.min = -1000;
input2.max = 0;
input2.step = rssi;
input2.disabled = true;
input2.id = "input2";
input2.value = rssi*-1;
input.type = 'text';
input.value = msg;
input.id = "input";
input.disabled = true;
info.appendChild(input);
info.appendChild(document.createElement('br'));
info.appendChild(document.createElement('label').appendChild(document.createTextNode('Rssi mínimo(em módulo): ')));
info.appendChild(input2);


function excluir(){
  var bids = JSON.parse(localStorage.beaconsIds);
  var bnames = JSON.parse(localStorage.beaconsNames);
  var bimgs = JSON.parse(localStorage.beaconsImgs);
  var bmsgs = JSON.parse(localStorage.beaconsMsgs);
  var index = bids.indexOf(id);
  bids.splice(index,1);
  bnames.splice(index,1);
  bimgs.splice(index,1);
  bmsgs.splice(index,1);

  localStorage.beaconsIds = JSON.stringify(bids);
  localStorage.beaconsNames = JSON.stringify(bnames);
  localStorage.beaconsImgs = JSON.stringify(bimgs);
  localStorage.beaconsMsgs = JSON.stringify(bmsgs);

  window.location.href = 'index.html';

}

function alterar(){
  var input = document.getElementById('input');
  var input2 = document.getElementById('input2');
  if(input.disabled){
    input.disabled = false;
    input2.disabled = false;
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Finalizar Mudanças';
    msg.className = 'btn btn-warning';
    msg.onclick = function(){finalizar();};
  }
}

function finalizar(){
  var input = document.getElementById('input');
  var input2 = document.getElementById('input2');
  if(!input.disabled){
    alert('Mudanças salvas');
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Mudar preferências';
    msg.className = 'btn btn-primary';
    msg.onclick = function(){alterar();};
    var brssi = JSON.parse(localStorage.beaconsRssi);
    var bids = JSON.parse(localStorage.beaconsIds);
    var bmsgs = JSON.parse(localStorage.beaconsMsgs);
    var index = bids.indexOf(id);
    bmsgs[index] = input.value;
    brssi[index] = input2.value*-1;
    localStorage.beaconsMsgs = JSON.stringify(bmsgs);
    localStorage.beaconsRssi = JSON.stringify(brssi);
    input2.disabled = true;
    input.disabled = true;
  }else{

  }
}
