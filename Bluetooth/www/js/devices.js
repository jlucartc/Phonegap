var bids = JSON.parse(localStorage.beaconsIds);
var bnames = JSON.parse(localStorage.beaconsNames);
for(var i = 0; i < bids.length; i++){
  (function(i){
      var list = document.getElementById('list');
      var item = document.createElement('button');
      item.value = bids[i];
      item.className = "btn btn-default list-group-item";
      item.onclick = function(){devView(item.value);}
      item.innerHTML= bnames[i]+" - "+bids[i];
      list.appendChild(item);
  })(i);
}

function devView(id){
localStorage.item = id;
return window.location.href='devView.html';

}
