var noble = require('noble');

noble.on('stateChange', function(state){
  if(state === 'poweredOn'){
    noble.startScanning();
  }else{
    noble.stopScanning();
  }
});

noble.on('discover',function(peripheral){
  alert("Ok");
  console.log("OK");
  alert(peripheral.advetisement.txPowerLevel);
});
