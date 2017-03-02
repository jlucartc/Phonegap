/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
/*var app = {
// Application Constructor
initialize: function() {
document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
},

// deviceready Event Handler
//
// Bind any cordova events here. Common events are:
// 'pause', 'resume', etc.
onDeviceReady: function() {
this.receivedEvent('deviceready');
},

// Update DOM on a Received Event
receivedEvent: function(id) {

alert('Received Event: ' + id);

var parentElement = document.getElementById(id);
var listeningElement = parentElement.querySelector('.listening');
var receivedElement = parentElement.querySelector('.received');
document.getElementById("title").innerHTML = "bg-primary";

listeningElement.setAttribute('style', 'display:none;');
receivedElement.setAttribute('style', 'display:block;');

//clean();

}
};*/


document.addEventListener('deviceready',function(){enable();},function(){alert("Fail!");});

function enable(){
  localStorage.exit = 'false';
  var escanear = document.getElementById('escanear');
  var parar = document.getElementById('parar');
  escanear.disabled = false;
  parar.disabled = false;
}

var scanning = false;

//localStorage.beaconsIds = ['F7:5D:EA:B9:57:58','F2:09:F5:7D:E9:AB'];
//localStorage.beaconsNames = ['EST','DEV0FB0EBB0B'];
//localStorage.beaconsMsgs = ['Bem vindo à sala de reuniões!','Bem vindo à sala de desenvolvimento!'];
//localStorage.beaconsImgs = ['img/salare.jpg','img/saladev.jpg'];

function clean(){
  var lista = document.getElementById('dev-list');
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }
}


function startScan(){
  if(localStorage.exit == 'true'){
    navigator.app.exitApp();
  }
  var title = document.getElementById('title');
  title.innerHTML = "Escaneando...";
  var escanear = document.getElementById('escanear');
  var parar = document.getElementById('parar');
  escanear.className = 'btn btn-primary';
  parar.className = 'btn btn-default';
  ble.isEnabled(function(){
    localStorage.exit = false;
    if(scanning == false){
      clean();
      scanning = true;
      ble.startScanWithOptions([],{reportDuplicates : true},function(device){
        if(typeof localStorage.beaconsIds !== 'undefined'){
          for(var i = 0; i < localStorage.beaconsIds.length; i++){
            if(device.id == JSON.parse(localStorage.beaconsIds)[i] && device.rssi >= JSON.parse(localStorage.beaconsRssi)[i]){
              showMessage(i);
            }else{
              addEl(device.name,device.id,device.rssi);
            }
          }
        }else{
          addEl(device.name,device.id,device.rssi);
        }
        },function(){alert("Erro ao iniciar o scan!");});
      }},function(){ble.enable(startScan,false);});
    }

    function addEl(name,id,rssi){
      var list = document.getElementById('dev-list');
      var el = document.createElement('button');
      el.className = 'btn btn-default list-group-item';
      el.appendChild(document.createTextNode(name+" - "+id+" - "+rssi));
      el.onclick = function(){ devPage(name,id,rssi); };
      list.appendChild(el);
    }

    function stopScan(){
      var title = document.getElementById("title");
      title.innerHTML = "";
      if(scanning == true){
        var escanear = document.getElementById('escanear');
        var parar = document.getElementById('parar');
        escanear.className = 'btn btn-default';
        parar.className = 'btn btn-primary';
        ble.stopScan(function(){
          scanning = false;
        },function(){
          alert("Erro ao parar o escaneamento!");
        });
      }else{
      }
    }

    function showMessage(id){
      localStorage.msg = JSON.parse(localStorage.beaconsMsgs)[id];
      localStorage.img = JSON.parse(localStorage.beaconsImgs)[id];
      window.location = 'showMessage.html';
    }

    function devPage(name,id,rssi){
      localStorage.deviceName = name;
      localStorage.deviceId = id;
      localStorage.deviceRssi = rssi
      window.location = 'devPage.html';
    }
