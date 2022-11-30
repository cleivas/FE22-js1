const btn = document.querySelector('#search-button');


btn.addEventListener('click', search);

function search(event){
    event.preventDefault();
    document.querySelector('#error-message').innerText= '';
    document.querySelector('#activity').innerText = '';

    const typeInput = document.querySelector('#type-input');
    const searchTerm = typeInput.value;
    typeInput.value = '';

    // console.log(searchTerm);
    fetchActivity(searchTerm);
}

function fetchActivity(type){

    const url = `http://www.boredapi.com/api/activity?type=${type}`;
    // console.log(url);

    fetch(url).then(
        function(response){
            // console.log(response);
            return response.json();
        }
    ).then( handleActivity )
    .catch( handleError );
}

function handleActivity(activityInfo){
    console.log(activityInfo.activity);
    
    if(activityInfo.activity === undefined){
        throw activityInfo.error;
    }else{
        const activityH2 = document.querySelector('#activity');
        activityH2.innerText = activityInfo.activity;
    }
}

function handleError(error){
    console.log(error);
    const errorP = document.querySelector('#error-message');
    errorP.innerText  = error;
}