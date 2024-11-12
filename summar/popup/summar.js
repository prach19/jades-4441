document.addEventListener("DOMContentLoaded", function () {
    // references to buttons
    let collection = document.getElementById("collect");
    let rights = document.getElementById("rights");
    let retention = document.getElementById("retention");
    let storage = document.getElementById("storage");

    //reference to title element
    let title = document.getElementById("title");
    //reference to content box
    let policyContent = document.getElementById("content");

    //reference to data groups
    let jsonData = {};

    //fetching and storing json data
    fetch(chrome.runtime.getURL("policy.json"))
        .then((response) => response.json())
        .then((data) => {
            //checking current tab, and chosing json data according to URL
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                let currentURL = new URL(tabs[0].url);
                if (/amazon\./.test(currentURL)) {
                    jsonData = data[0];
                }
                //testing if URL matches temu
                else if (/temu\./.test(currentURL)) {
                    jsonData = data[1];
                }
                //testing if URL matches shein
                else if (/shein\./.test(currentURL)) {
                    jsonData = data[2];
                }
            });
        })
        .catch((error) => console.error("Error loading JSON:", error));

    //functionality for collection button
    collection.addEventListener("click", function () {
        policyContent.textContent = jsonData.collection;
    });

    //functionality for rights button
    rights.addEventListener("click", function () {
        policyContent.textContent = jsonData.rights;
    });

    // functionality for retention button
    retention.addEventListener("click", function () {
        policyContent.textContent = jsonData.retention;
    });

    // functionality for storage button
    storage.addEventListener("click", function () {
        policyContent.textContent = jsonData.storage;
    });

    //changing title based on URL
    window.onload = function () { setTitle() };
    function setTitle() {
        chrome.windows.getAll({ populate: true }, function (windows) {
            windows.forEach(function (window) {
                window.tabs.forEach(function (tab) {
                    let url = new URL(tab.url);

                    if (/amazon\./.test(url)) {
                        title.innerHTML = "Amazon";
                    } else if (/temu\./.test(url)) {
                        title.innerHTML = "Temu";
                    } else if (/shein\./.test(url)) {
                        title.innerHTML = "Shein";
                    }
                    else {
                        title.innerHTML = "Welcome to Summar";
                    }

                });
            });
        });
    }
});