const TuyAPI = require('tuyapi');
var args = process.argv;
handleArgs(args);

function handleArgs(args){
  switch(args[2]){
    case 'toggleFan':
      toggleOutlet1();
    break;

    case 'getStatus':
      getOutlet1Status();
    break;

    default: 
      console.log("Error. Only \'getStatus\' and \'toggleFan\' are allowed values");
    break;
  }
}

function toggleOutlet1(){
  const device = new TuyAPI({ id: '', key: '' });
  var findOptions = {
    timeout: 30
  };
  (async () => {
    await device.find(findOptions);
  
    await device.connect();
  
    let status = await device.get();
  
    //console.log(`Current status: ${status}.`);
  
    await device.set({set: !status});
  
    status = await device.get();
  
    console.log(status);
  
    device.disconnect();
  })();
  
}

function getOutlet1Status(){
  const device = new TuyAPI({ id: '', key: '' });
  var findOptions = {
    timeout: 30
  };
  (async () => {
    await device.find(findOptions);
  
    await device.connect();
  
    let status = await device.get();
    
      if(status){
        console.log("true")
      }
      else{
        console.log("false")
      }

  
    device.disconnect();
  })();
  
}

