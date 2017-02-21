function main(){
  alert("OK");
}

main();

$beacons = ['F7:5D:EA:B9:57:58'];

function startScan(){
  evothings.ble.startScan(
      function(device)
      {
        for($key in $beacons){
          if(device.address == $beacons[$key]){
            var table = document.getElementById('lista');
            var button = document.createElement('button');
            button.appendChild(document.createTextNode(device.name+" - "+device.address+" - "+device.rssi));
            button.className = "btn btn-default list-group-item";
            table.appendChild(button);
            evothings.ble.connectToDevice(device,function(per){JSON.stringify(per);},function(per){},function(err){alert(err);});
            //var tx = evothings.ble.getService(evothings.ble.getService(device,'1804'),'2A07');
            //alert(tx);
          }
        }
      },
      function(){
          alert("Error!");
      }
  );
}

document.addEventListener('deviceready',startScan,function(){alert("Fail on device ready!");});
