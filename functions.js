$('document').ready(function (){
  //get status on page load
  getStatus();


  //btn handlers
  $('#btnToggle').click(function(){
    sendCommand('toggleFan');
  });




//Functions 
function sendCommand(userCommand){
  $('#fanStatusIndicator').removeClass('bg-danger bg-success');
  $('#fanStatus').text("waiting...");
  var json = {
    command:userCommand
  }

  $.post('./handler.php', json, function(data, value){
    data = JSON.parse(data);
    toggleIndicator(data);
    if(data){
     $('#fanStatus').text("On");
    }
    else{
      $('#fanStatus').text("Off");
    }
  });
}

function getStatus(){
  sendCommand('getStatus');
}

function toggleIndicator(trueOrFalse){
  if(trueOrFalse){
    $('#fanStatusIndicator').removeClass('bg-danger');
    $('#fanStatusIndicator').addClass('bg-success');
  }
  else{
    $('#fanStatusIndicator').removeClass('bg-success');
    $('#fanStatusIndicator').addClass('bg-danger');
  }
}











});// end document.ready