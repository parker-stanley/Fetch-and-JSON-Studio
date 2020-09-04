// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            })
            const container = document.querySelector('#container');
            container.innerHTML = `
                <div>
                    <h2>Crew count: ${json.length}</h2>
                </div>
            `
            let astronauts = '';
            for (astronaut of json) {
                astronauts += `
                    <div class='astronaut'>
                        <div class="bio">
                            <h3>${astronaut.firstName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                ${(astronaut.active===true) ? `<li class='active'>Active: ${astronaut.active}</li>`:`<li>Active: ${astronaut.active}</li>`}
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}"/>
                    </div>`
            }
            container.innerHTML += astronauts;
        });
    });
});

// const container = document.getElementById('container') would also work
