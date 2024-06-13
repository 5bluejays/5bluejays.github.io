document.addEventListener("DOMContentLoaded", function() {
    
    // Get today's date
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var dd = String(today.getDate()).padStart(2, "0");
    
    // Construct the file name for today's crossword
    var datestr = dd + "-" + mm + "-" + yyyy;
    var filename = "crosswords/" + datestr + ".png";
    console.log("Today's date: ", datestr);
    console.log("Constructed filename: ", filename);
    
    // Create an img element to go in the html
    var img = document.createElement("img");
    img.classList.add("crossword");
    img.src = filename;
    img.alt = "Today's Crossword";
    
    // If the image doesn't exist, make an alternate message
    img.onerror = function() {
        document.getElementById("crosswordimg").innerText = "For some reason, the crossword doesn't exist. If you know the creator of this website personally, please notify him about the problem. This is his first time ever using Javascript."
        console.log("The file doesn't exist. ):");
    };
    
    // Add the image to the webpage
    console.log(img);
    document.getElementById("crosswordimg").appendChild(img)
});
