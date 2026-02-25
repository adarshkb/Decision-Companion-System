let factors = [];
let jobs = [];

function addFactor(){

    let factor = document.getElementById("factorInput").value;
    factors.push(factor);

    let li = document.createElement("li");
    li.innerText = factor;
    document.getElementById("factorList").appendChild(li);

    renderInputs();
}

function renderInputs(){

    let div = document.getElementById("ratings");
    div.innerHTML = "";

    factors.forEach(f => {
        let input = document.createElement("input");
        input.placeholder = f + " (1-10)";
        input.id = f;
        div.appendChild(input);
    });
}

function addJob(){

    let company = document.getElementById("company").value;
    let ratings = {};

    factors.forEach(f => {
        ratings[f] = Number(document.getElementById(f).value);
    });

    jobs.push({company, ratings});
    updateMatrix();
}

function updateMatrix(){

    let table = document.getElementById("matrix");
    table.innerHTML = "";

    let header = "<tr><th>Job</th>";
    factors.forEach(f => header += "<th>"+f+"</th>");
    header += "</tr>";

    table.innerHTML += header;

    jobs.forEach(job => {
        let row = "<tr><td>"+job.company+"</td>";
        factors.forEach(f => {
            row += "<td>"+job.ratings[f]+"</td>";
        });
        row += "</tr>";
        table.innerHTML += row;
    });
}

function evaluateJobs(){

    fetch("http://127.0.0.1:5000/evaluate",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({jobs,factors})
    })
    .then(res=>res.json())
    .then(data=>{

        let results = document.getElementById("results");
        results.innerHTML = "";

        data.results.forEach(job=>{
            let li = document.createElement("li");
            li.innerText = job.company + " Score: " + job.score;
            results.appendChild(li);
        });

    });
}