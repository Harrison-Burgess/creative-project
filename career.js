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
        document.getElementById("searchResults").innerHTML = '';

        if(json.length === 0){
            document.getElementById("searchResults").innerHTML += '<h2>No jobs found</h2>';
        }
        for(job of json){
            let jobLink = job.url;
            let jobTitle = job.title;
            let jobCompany = job.company;
            let jobLocation = job.location;

            let jobBox = '<div class="single-search-result">';
            jobBox += '<a class="job-title-link" href=' + jobLink + '>' + jobTitle + '</a>';
            jobBox += '<div class="company-location">';
            jobBox += '<p>' + jobCompany + '</p>'
            jobBox += '<p>' + jobLocation + '</p>'
            jobBox += '</div>';
            jobBox += '</div>';

            document.getElementById("searchResults").innerHTML += jobBox;
        }

    });
});