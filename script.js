let form = document.querySelector(".input")
let cont = document.querySelector(".container");

async function getdata(d) {

    if (d != "") {

        let response = await axios.get(d);
        console.log(response);
        showdata(response);


    }

}

function showdata(rs) {
    cont.innerHTML = "";
    let div = document.createElement("div");

    div.innerHTML = `<h1>${rs.Title}</h1>`;
    cont.append(div);
}

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    let inp = document.querySelector(".text");
    //console.log(inp.value);
    let link = "http://www.omdbapi.com/?apikey=" + "26f952a4&t=" + inp.value;
    getdata(link);


})

let clr = document.querySelector(".clr");
clr.addEventListener("click", function (ev) {
    let inp = document.querySelector(".text");
    inp.value = "";
})
