const reasonInput = document.querySelector("#input-reason");
const reasonReason = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#input-clear");
const confirmBtn = document.querySelector("#input-add");
//const alert = document.querySelector("ion-alert");
confirmBtn.addEventListener("click", () => {
  //console.log("It works....");
  const alert = document.querySelector("ion-alert");

  alert.buttons = ["Action"];
});
