var images = document.getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  if (
    images[i].src ===
    "https://elearning.uni-bremen.de/assets/images/logos/studip-logo.svg"
  )
    images[i].src = chrome.runtime.getURL("assets/stupid-logo.svg");
}
