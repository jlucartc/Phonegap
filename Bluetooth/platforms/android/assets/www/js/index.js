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
var app = {
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

        //alert('Received Event: ' + id);

        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        //clean();

    }
};


app.initialize();

//alert("Ok");
var scanning = false;
var beaconsIds = ['F7:5D:EA:B9:57:58','F2:09:F5:7D:E9:AB'];
var beaconsNames = ['EST','DEV0FB0EBB0B'];
var beaconsMsgs = ['Bem vindo à sala de reuniões!','Bem vindo à sala de desenvolvimento!'];
var beaconsImgs = ['img/salare.jpg','img/saladev.jpg'];

function clean(){
  var lista = document.getElementById('dev-list');
  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }
}


function startScan(){
  if(scanning == false){
    clean();
    var escanear = document.getElementById('escanear');
    var parar = document.getElementById('parar');
    escanear.className = 'btn btn-primary';
    parar.className = 'btn btn-default';
    alert("Escaneando...");
    scanning = true;
    ble.startScanWithOptions([],{reportDuplicates : true},function(device){
      for(var i = 0; i < beaconsIds.length; i++){
        if(device.id == beaconsIds[i] && device.rssi <= 70){
          /*ble.connect(device.id,function(peripheral){
              /*ble.read(device.id,"b9404000-f5f8-466e-aff9-25556b57fe6d","b9404002-f5f8-466e-aff9-25556b57fe6d",function(data){
              //var power = new Uint8Array(data);
              if((power[0]*-1) <= device.rssi){
                for (var i = 0; i < beaconsIds.length; i++) {
                  if(beaconsIds[i] == device.id){
                    showMessage(i);
                  }
                }
              }
            },function(err){alert(err);});
          },function(){
          ble.disconnect(device.id,function(){},function(){});
        });*/
          showMessage(i);
        }
      }
      var newButton = document.createElement('button');
      var name = document.createTextNode(device.name+" - "+device.id+" - "+device.rssi);
      newButton.value = device.id;
      newButton.onclick = function(){ devPage(device.id); }
      newButton.className = 'list-group-item';
      newButton.appendChild(name);
      var lista = document.getElementById('dev-list').appendChild(newButton);
    },function(){alert("Erro ao iniciar o scan!");});
  }else{
  }
}

function stopScan(){
  if(scanning == true){
    var escanear = document.getElementById('escanear');
    var parar = document.getElementById('parar');
    escanear.className = 'btn btn-default';
    parar.className = 'btn btn-primary';
    ble.stopScan(function(){
      alert("Parando o escaneamento!");
      scanning = false;
    },function(){
      alert("Erro ao parar o escaneamento!");
    });
  }else{
  }
}

function showMessage(id){
  localStorage.msg = beaconsMsgs[id];
  localStorage.img = beaconsImgs[id];
  window.location = 'showMessage.html';
}

function devPage(id){
  localStorage.device = id;
  window.location = 'devPage.html';
}
