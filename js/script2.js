const list = document.getElementById('list');


if(localStorage.formData){
    let data = JSON.parse(localStorage.formData);
    for(let key in data){
        const li = document.createElement('li');
        li.innerHTML = data[key];
        list.append(li);
    }
}; 
