document.addEventListener("DOMContentLoaded", function () {
    // references to buttons
    let collection = document.getElementById("collect-btn");
    let rights = document.getElementById("rights-btn");
    let retention = document.getElementById("ret-btn");
    let storage = document.getElementById("storage-btn");

    //reference to content box
    let policyContent = document.getElementById("content");

    //functionality for collection button
    collection.addEventListener("click", function () {
        policyContent.textContent = "collection policy";
    });

    //functionality for rights button
    rights.addEventListener("click", function () {
        policyContent.textContent = "rights policy";
    });

    // functionality for retention button
    retention.addEventListener("click", function () {

        policyContent.textContent = "retention policy";
    });

    // functionality for storage button
    storage.addEventListener("click", function () {
        policyContent.textContent = "storage policy";
    });
});
