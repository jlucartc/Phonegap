var bids = JSON.parse(localStorage.beaconsIds);
var bnames = JSON.parse(localStorage.beaconsNames);
for(var i = 0; i < bids.length; i++){
  var list = document.getElementById('list');
  var item = document.createElement('button');
  item.className = "btn btn-default list-group-item";
  item.onclick = function(){devView(bids[i])};
  item.innerHTML= bnames[i]+" - "+bids[i];
  list.appendChild(item);
}

function devView(id){

localStorage.item = id;
window.location = 'devView.html';

}
