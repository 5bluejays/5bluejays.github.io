document.addEventListener("DOMContentLoaded", function() {

    // Create the day of the week header list
    var dowheaderlist = [
        "Sunday - The Midi",
        "Monday - The Mini",
        "Tuesday - The Mini",
        "Wednesday - The Big Mini",
        "Thursday - The Cryptic",
        "Friday - The Mini",
        "Saturday - The Super Cryptic"
    ];
    
    // Get today's date
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var dd = String(today.getDate()).padStart(2, "0");
    var dow = String(today.getDay());

    // Construct the file name for today's crossword
    var datestr = dd + "-" + mm + "-" + yyyy;
    var filename = "crosswords/" + datestr + ".png";
    console.log("Today's date -", datestr);

    // Create an h3 element to go above the image
    var h3 = document.createElement("h3");
    h3.textContent = dowheaderlist[dow];

    // Create an img element to go in the html
    var img = document.createElement("img");
    img.classList.add("crosswordimg");
    img.src = filename;
    img.alt = "Today's Crossword";

    // If the image doesn't exist, make an alternate message
    img.onerror = function() {
        document.getElementById("crossword").innerText = "For some reason, the crossword doesn't exist. If you know the creator of this website personally, please notify him about the problem. This is his first time ever using Javascript."
        console.log("The file doesn't exist. ):");
    };

    // Create the across and down clues
    var across = document.createElement("embed");
    across.classList.add("crosswordelement");
    across.src = "crosswords/" + datestr + "A.html";
    
    var down = document.createElement("embed");
    down.classList.add("crosswordelement");
    down.src = "crosswords/" + datestr + "D.html"

    // Add everything to the webpage
    document.getElementById("crosswordheader").appendChild(h3);
    document.getElementById("crossword").appendChild(img);
    document.getElementById("crossword").appendChild(across);
    document.getElementById("crossword").appendChild(down);
});
