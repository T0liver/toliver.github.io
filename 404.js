function searchterm() {
  var srch = document.getElementById("search").value;
  if (srch) {
    var randomsite = sites[Math.floor(Math.random() * sites.length)];
    var url = randomsite + srch;
    window.location.href = url;
    return false;
  } else {
    return false;
  }
}

window.onclick = function() {
  if (document.getElementById("modalid").style.display == "block") {
    document.getElementById("modalid").style.display = "block";
  }
}

function openpopup() {
  document.getElementById("modalid").style.display = "block";
  listsites();
}

function closepopup() {
  document.getElementById("modalid").style.display = "none";
  document.getElementById("sitelist").innerHTML = "";
}

function listsites() {
  for(var i= 0; i < sites.length; i++) {
    document.getElementById("sitelist").innerHTML += "<a href='https://" + sites[i].split("/")[2] + "'>" + sites[i].split("/")[2] + "</a>" + "<br>";
  }
}

var sites = Array(
  "https://www.harmonikum.co/?s=",
  "https://www.vatera.hu/listings/index.php?q=",
  "https://www.webbeteg.hu/kereses_talalatok?p=",
  "https://www.jofogas.hu/magyarorszag?q=",
  "https://www.gyakorikerdesek.hu/kereses.php?keres=",
  "https://www.answers.com/search?q=",
  "https://www.reddit.com/search/?q=",
  "https://www.php.net/manual-lookup.php?pattern=",
  "https://www.pornhub.com/video/search?search=",
  "https://twitter.com/search?q=",
  "https://web.archive.org/web/*/",
  "https://www.imdb.com/find/?q=",
  "https://stackoverflow.com/search?q=",
  "https://hu.wikipedia.org/w/index.php?go=Menj&search=",
  "https://github.com/search?q=",
  "https://www.pexels.com/hu-hu/kereses/",
  "https://www.arukereso.hu/CategorySearch.php?st=",
  "https://www.mindmegette.hu/kereses/",
  "https://alternativeto.net/browse/search/?q=",
  "https://www.deviantart.com/search?q=",
  "https://downforeveryoneorjustme.com/",
  "https://giphy.com/search/",
  "https://bookline.hu/search/search.action?searchfield=php",
  "https://moly.hu/kereses?q=",
  "https://www.goodreads.com/search?query=",
  "https://imgur.com/search?q=",
  "https://vimeo.com/search?q=",
  "https://www.ikea.com/hu/hu/search/?q=",
  "https://www.spar.hu/kereses?q=",
  "https://tesco.hu/kereses/?q=",
  "https://www.wikihow.com/wikiHowTo?search=",
  "https://hogyankell.hu/Hogyankell:GoogleSearch?q=",
  https://www.urbandictionary.com/define.php?term=
);
