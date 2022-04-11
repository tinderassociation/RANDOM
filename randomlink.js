var random = new Array("https://lead1.pl/p/WRqy/7mhb/NX5G", "https://lead-go.com/p/WRqy/MATb/Dh9i", "https://lead1.pl/p/WRqy/7mhb/NX5G", "https://lead1.pl/p/WRqy/7mhb/NX5G" );

// or

// Regular Array

var random = new Array();

random[0] = "https://lead1.pl/p/WRqy/7mhb/NX5G";
random[1] = "https://lead-go.com/p/WRqy/MATb/Dh9i";
random[2] = "https://lead1.pl/p/WRqy/7mhb/NX5G";
random[3] = "https://lead1.pl/p/WRqy/7mhb/NX5G";
random[4] = "https://lead1.pl/p/WRqy/7mhb/NX5G";

function randomlink() {
window.location = random[Math.floor(Math.random()*random.length)];
}