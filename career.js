document.getElementById("searchSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    const keyWordInput = document.getElementById("keyWord").value;
    const locationInput = document.getElementById("location").value;
    const fullTimeCheckbox = document.getElementById("fullTimeCheckbox").checked;

    if(keyWordInput === "" && locationInput === ""){return;}   
    console.log(keyWordInput);
    console.log(locationInput);
    console.log(fullTimeCheckbox);

    let url = "https://jobs.github.com/positions.json?";
    if(keyWordInput !== ""){
        url += "description=";
        url += keyWordInput;
        url += "&";
    }
    if(fullTimeCheckbox === true){
        url += "full_time=true&";
    }
    if(locationInput !== ""){
        url += "location=";
        url += locationInput;
        url += "&";
    }
    url = url.slice(0, url.length - 1);
   

    fetch(url)
    .then(function(response){
        return response.json();
    }).then(function(json){
        console.log(json);
        
    });
});