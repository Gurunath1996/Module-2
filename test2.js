const formEl = document.querySelector('form');
const tbodyEl = document.querySelector('tbody');
const tableEl = document.querySelector('table')

function add(e){
    e.preventDefault();
    const owner=document.getElementById('owner').value;
    const car = document.getElementById('car').value;
    const licence = document.getElementById('license').value;
    const enDate = document.getElementById('enDate').value;
    const exDate = document.getElementById('exDate').value;
    
    tbodyEl.innerHTML +=`
        <tr>
            <td>${owner}</td>
            <td>${car}</td>
            <td>${licence}</td>
            <td>${enDate}</td>
            <td>${exDate}</td>
            <td><button class='deleteBtn btn btn-danger '>Delete</button></td>
        </tr>
    `;
    
}

function Delete(e){
    if (!e.target.classList.contains('deleteBtn')){
        return;
    }

    const btn = e.target
    btn.closest('tr').remove();
}
formEl.addEventListener('submit', add);
tableEl.addEventListener('click', Delete);

// search
const searchFun = () =>{
    let filter = document.getElementById('search').value;
    let tr = tableEl.getElementsByTagName('tr');
    for(var i=0; i<tr.length; i++){
        let td = tr[i].getElementsByTagName('td')[2];

        if(td){
            let textValue = td.textContent || td.innerHTML;

            if(textValue.indexOf(filter) > -1){
                tr[0].style.display='';
            }
            else{
                tr[i].style.display= 'none';
            }
        }
    }

}

// vadition

function validate(){
    var licenseV = document.getElementById('license');
    var ownerV = document.getElementById('owner')
    var carV= document.getElementById('car')
    var enDateV= document.getElementById('enDate').value
    var exDateV= document.getElementById('exDate').value
    

    if(licenseV.value.trim().length < 10 ){
        alert('Enter valid Licence plate')
        licenseV.style.border = "solid 1px red"
        return false;
    }
    else if(licenseV.value.trim().length > 10 ){
        alert('Enter valid Licence plate')
        licenseV.style.border = "solid 1px red"
        return false;
    }
    else if(ownerV.value.trim() =="" ){
        alert('Please enter owner name');
        ownerV.style.border = "solid 1px red"
        return false;
    }
    else if(carV.value.trim() =="" ){
        alert('Please enter car model');
        carV.style.border = "solid 1px red"
        return false;
    }
    else if(enDateV>exDateV){
        alert('Check entry and exit date')
        return false;
    }
    
    else{
        return true;
    }
    }
    