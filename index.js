import * as my_dongle from 'bleuio'
document.getElementById('connect').addEventListener('click', function(){
  my_dongle.at_connect().then((d)=>div.innerHTML += d+'<br>' )
})
document.getElementById('deviceinfo').addEventListener('click', function(){
  my_dongle.ati().then((data)=>div.innerHTML += data+'<br>')
})
const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);
var div = document.getElementById('log');

function logSubmit(event) {
    event.preventDefault();
    var passkey = document.getElementById("passkey").value;
    var macaddress = document.getElementById("macaddress").value;
    var connectionOption = document.getElementById("connectionOption").value;
    if(connectionOption==1){
            my_dongle.at_central().then((d)=>{
                console.log(d)
                div.innerHTML += d+'<br>';
                my_dongle.at_gapiocap(2).then((d)=>{
                    console.log(d)
                    div.innerHTML += d+'<br>';
                    my_dongle.at_gapconnect(macaddress).then((d)=>{
                        setTimeout(() => {  
                            my_dongle.at_enterpasskey(passkey).then((d)=>{
                                console.log(d)
                                div.innerHTML += d+'<br>';
                            })
                         }, 2000);
                         console.log(d)
                         div.innerHTML += d+'<br>';
                         my_dongle.at_seclvl().then((d)=>{
                            console.log(d)
                            div.innerHTML += d+'<br>';
                        })
                        
                    })
                })

            })
        }
    if(connectionOption==2){
        my_dongle.at_central().then(()=>{
            my_dongle.at_gapiocap(1).then(()=>{
                my_dongle.at_numcompa(0).then(()=>{
                    my_dongle.at_gapconnect(macaddress).then((d)=>{
                        setTimeout(() => { 
                            my_dongle.at_numcompa().then((d)=>{ 
                                console.log(d)
                                div.innerHTML += d+'<br>';
                            })
                        }, 2000);
                        console.log(d)
                        div.innerHTML += d+'<br>';
                            my_dongle.at_seclvl().then((d)=>{
                                console.log(d)
                                div.innerHTML += d+'<br>';
                            })
                    })
                })

            })

        })
    }
    

}

