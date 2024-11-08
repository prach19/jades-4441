document.addEventListener("DOMContentLoaded", function () {
    // references to buttons
    let collection = document.getElementById("collect");
    let rights = document.getElementById("rights");
    let retention = document.getElementById("retention");
    let storage = document.getElementById("storage");

    //reference to content box
    let policyContent = document.getElementById("content");
    let amazonData = {};

    fetch(chrome.runtime.getURL("policy.json"))
    .then((response) => response.json())
    .then((data) => {
      // Store the first object in amazonData for easy access
      amazonData = data[0];
    })
    .catch((error) => console.error("Error loading JSON:", error));

    //functionality for rights button
    collection.addEventListener("click", function () {
        policyContent.textContent = amazonData.collection;
    });

    //functionality for rights button
    rights.addEventListener("click", function () {
        policyContent.textContent = amazonData.rights;
    });

    // functionality for retention button
    retention.addEventListener("click", function () {
        policyContent.textContent = amazonData.retention;
    });

    // functionality for storage button
    storage.addEventListener("click", function () {
        policyContent.textContent = amazonData.storage;
    });

    


});
