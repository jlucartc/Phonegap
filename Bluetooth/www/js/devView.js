var id = localStorage.item;
var name;
var msg;
var img;
var info = document.getElementById('info');

for(var i = 0; i < JSON.parse(localStorage.beaconsIds).length; i++){
  if(id == JSON.parse(localStorage.beaconsIds)[i]){
      name = JSON.parse(localStorage.beaconsNames)[i];
      msg = JSON.parse(localStorage.beaconsMsgs)[i];
      img = JSON.parse(localStorage.beaconsImgs)[i];
      break;
  }else{
    alert(id+" - "+JSON.parse(localStorage.beaconsIds)[i]);
  }
}

info.appendChild(document.createElement('h3').appendChild(document.createTextNode("Name: "+name)));
info.appendChild(document.createElement('h3').appendChild(document.createTextNode("Id: "+id)));
info.appendChild(document.createElement('h3').appendChild(document.createTextNode("Img: "+img)));
info.appendChild(document.createElement('p').appendChild(document.createTextNode("Msg:"+msg)));
