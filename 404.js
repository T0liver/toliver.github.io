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
"https://www.pexels.com/hu-hu/kereses/");
