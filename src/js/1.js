const form = document.querySelector('form');
const data = document.querySelector('#data');
let hid = document.getElementById('sub');
let pop = document.querySelector('.pop');

// pop.addEventListener('click', function(event){
//     hid.classList.toggle("hiddenclass");
//     // alert('ji')  
// });


form.addEventListener('submit',function(event) {
    event.preventDefault();
    let firstname = document.querySelector('#fname').value;
    // let lastname = document.querySelector('#lname').value; 

    let formdata = new FormData(form);
    formdata.append("firstname", firstname);
    // formdata.append("lastname", lastname);

    const xrh = new XMLHttpRequest();
    xrh.open('POST','http://127.0.0.1:5000/login/');
    xrh.addEventListener("readystatechange",function(){
        if (xrh.readyState == 4){
            if((xrh.status >= 200 && xrh.status <= 300) || xrh.status == 304)
            {
                data.innerHTML = xrh.responseText;
                // data.innerHTML = xrh.
                // var newWindow = window.open('./../html/index.html');
                // hid.classList.toggle("hiddenclass");
            }
            else{
                data.innerHTML = "Error: " + xrh.status;
            }
        }      
    });
    xrh.send(formdata);
});

    // let firstname = document.querySelector('#fname').value;
    // let lastname = document.querySelector('#lname').value; 

    // let formdata = new FormData(form);
    // formdata.append("firstname", firstname);
    // formdata.append("lastname", lastname);

    // const xrh = new XMLHttpRequest();
    // xrh.open('GET','http://127.0.0.1:5000/login/');

    // xrh.send(formdata);

