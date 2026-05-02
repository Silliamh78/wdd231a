function updateParkInformation(){
    document.getElementById("parkName").textContent= "Yellowstone"
    document.querySelector("#parkType").textContent= "National Park"
    document.querySelector("#parkStates").innerHTML= "ID, WY, MT"
    document.getElementById("heroImage").src="public/images/yellowstone.jpg"
}

updateParkInformation()

function loadParkData() {

  document.getElementById("parkName").textContent = "Yellowstone";
  document.getElementById("parkType").textContent = "National Park";
  document.getElementById("parkStates").textContent = "WY, ID, MT";
  document.querySelector("#park-image").src = "./images/yellowstone.jpg";

}

loadParkData();