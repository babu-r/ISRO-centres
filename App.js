<<<<<<< HEAD
const result = document.getElementById("result");
const searchCity = document.getElementById("city");
const searchState = document.getElementById("state");
const searchCenter = document.getElementById("center");
const searchInput = document.getElementById("search-input");

const url = "https://isro.vercel.app/api/centres";

async function getdata(url) {
    try {
        const response = await fetch(url);
        data = await response.json();
        displayData(data);
    } catch(error) {
        //errror
    }
}
getdata(url);

function displayData(data) {
    let ele = "";
    for (let center of data.centres) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
    }
    result.innerHTML = ele;
}


var flag = "name";


searchCity.addEventListener("click", () => {
    var element = searchCity;
    flag = "city";
    searchData();
});

searchState.addEventListener("click", () => {
    var element = searchState;
    //console.log(searchInput.value);
    flag = "state";
    searchData();
});
  
searchCenter.addEventListener("click", () => {
    var element = searchCenter;
    flag = "name";
    searchData();
});

function searchData() {
    var val = searchInput.value;
    console.log(val);
    let ele = ``;
  
    if (flag === "name") {
      searchByName(ele, val);
    } else if (flag === "city") {
      searchByCity(ele, val);
    } else if (flag === "state") {
      searchByState(ele, val);
    }
    
}
function searchByName(ele, val) {
    for (let center of data.centres) {
      if (center.name.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
}
function searchByCity(ele, val) {
    for (let center of data.centres) {
      if (center.Place.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
}
function searchByState(ele, val) {
    for (let center of data.centres) {
        console.log(center);
      if (center.State.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
=======
const result = document.getElementById("result");
const searchCity = document.getElementById("city");
const searchState = document.getElementById("state");
const searchCenter = document.getElementById("center");
const searchInput = document.getElementById("search-input");

const url = "https://isro.vercel.app/api/centres";

async function getdata(url) {
    try {
        const response = await fetch(url);
        data = await response.json();
        displayData(data);
    } catch(error) {
        //errror
    }
}
getdata(url);

function displayData(data) {
    let ele = "";
    for (let center of data.centres) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
    }
    result.innerHTML = ele;
}


var flag = "name";


searchCity.addEventListener("click", () => {
    var element = searchCity;
    flag = "city";
    searchData();
});

searchState.addEventListener("click", () => {
    var element = searchState;
    //console.log(searchInput.value);
    flag = "state";
    searchData();
});
  
searchCenter.addEventListener("click", () => {
    var element = searchCenter;
    flag = "name";
    searchData();
});

function searchData() {
    var val = searchInput.value;
    console.log(val);
    let ele = ``;
  
    if (flag === "name") {
      searchByName(ele, val);
    } else if (flag === "city") {
      searchByCity(ele, val);
    } else if (flag === "state") {
      searchByState(ele, val);
    }
    
}
function searchByName(ele, val) {
    for (let center of data.centres) {
      if (center.name.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
}
function searchByCity(ele, val) {
    for (let center of data.centres) {
      if (center.Place.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
}
function searchByState(ele, val) {
    for (let center of data.centres) {
        console.log(center);
      if (center.State.toLowerCase().includes(val.toLowerCase())) {
        ele += `
            <div class="searchItems">
                <div class="center">
                    <h4>CENTER</h4>
                    <p>${center.name}</p>
                </div>
                <div class="city">
                    <h4>CITY</h4>
                    <p>${center.Place}</p>
                </div>
                <div class="state">
                    <h4>STATE</h4>
                    <p>${center.State}</p>
                </div>
            </div>`;
      }
    }
    result.innerHTML = ele;
>>>>>>> ad55d8bef61b05c6586bf3d8742e95e2797620b5
}