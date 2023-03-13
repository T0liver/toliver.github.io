//let srchval = document.getElementById("search").value;

//import { sites } from "./sites";
var sites = Array("https://www.harmonikum.co/?s=", "https://www.vatera.hu/listings/index.php?q=", "https://www.webbeteg.hu/kereses_talalatok?p=", "https://www.jofogas.hu/magyarorszag?q=", "https://www.gyakorikerdesek.hu/kereses.php?keres=", "https://www.answers.com/search?q=", "https://www.reddit.com/search/?q=", "https://www.php.net/manual-lookup.php?pattern=", "https://www.pornhub.com/video/search?search=", "https://twitter.com/search?q=", "https://web.archive.org/web/*/", "https://www.imdb.com/find/?q=", "https://stackoverflow.com/search?q=", "https://hu.wikipedia.org/w/index.php?go=Menj&search=", "https://github.com/search?q=", "https://www.pexels.com/hu-hu/kereses/");

function search() {
  if (document.getElementById("search").value == "") {
    document.getElementById("search").placeholder = "Kérem, írjon be valamit!";
  } else {
    //document.body.style.backgroundColor = "#ffffff";
    var randomsite = sites[Math.floor(Math.random() * sites.length)];
    window.location.href = randomsite + document.getElementById("search").value;
  }
  /*const queryString = window.location.search;
    const queryValue = queryString.split('=')[1];
    document.getElementById("search").placeholder = queryValue;
    if (queryValue == "") {
      document.getElementById("search").placeholder = "KÉREM ÍRJON BE VALAMIT!";
    } else {
      //document.body.style.backgroundColor = "#ffffff";
      var randomsite = sites[Math.floor(Math.random() * sites.length)];
      window.location.href = randomsite + document.getElementById("search").value;
    }*/
  
}