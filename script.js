document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

// button call

document.getElementById("calculat").onclick = function() {
    calculattip();
}

function calculattip(){
    // Store the data of from
    var billAmount = document.getElementById("billamount").value;
    var servisQ = document.getElementById("servisQ").value;
    var people = document.getElementById("people").value;

    if (billAmount === "" || servisQ == 0) {
        window.alert("Please Enter the value");
        return;
    }

    if (people ==="" || people <= 1) {
        people = 1;

        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    // LOGIC 
    var total = (billAmount * servisQ) / people;
    
    total = Math.round(total * 100)/ 100;

    total = total.toFixed(2);

    document.getElementById("totaltip").style.display = "block";
    document.getElementById("tipaa").innerHTML = total;
    document.getElementById("each").style.display = "block"
}