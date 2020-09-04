// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            console.log(json);
            json.sort(function(a,b){
                return b.hoursInSpace - a.hoursInSpace;
            })
            const container = document.querySelector('#container');
            let astronauts = '';
            let astronautCount = 0
            for (astronaut of json) {
                if (astronaut.active == true){
                    astronauts += `
                    <div class='astronaut'>
                        <div class="bio">
                            <h3>${astronaut.firstName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li class='active'>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}"/>
                    </div>`
                    astronautCount ++
                } else {
                    astronauts += `
                    <div class='astronaut'>
                        <div class="bio">
                            <h3>${astronaut.firstName}</h3>
                            <ul>
                                <li>Hours in space: ${astronaut.hoursInSpace}</li>
                                <li>Active: ${astronaut.active}</li>
                                <li>Skills: ${astronaut.skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class="avatar" src="${astronaut.picture}"/>
                    </div>`
                    astronautCount ++
                }
            }
            container.innerHTML = astronauts;
            const heading = document.querySelector('h1');
            heading.innerHTML = `Astronauts (${astronautCount})`;
        });
    });
});

// const container = document.getElementById('container') would also work




//attempt with a return statement
