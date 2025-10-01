// Store the Google Maps embed URLs
const mapUrls = {
  gobeklitepe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3177.029983506497!2d38.919256776284584!3d37.22326314373685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153466b65f6e3a5f%3A0x1667510255794d71!2sG%C3%B6beklitepe!5e0!3m2!1sen!2sus!4v1759291516347!5m2!1sen!2sus",

  fuji: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13015.194744497678!2d138.71706366737826!3d35.36064206244014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019629a42fdc899%3A0xa6a1fcc916f3a4df!2sMount%20Fuji!5e0!3m2!1sen!2sus!4v1759293431366!5m2!1sen!2sus",

  tajmahal: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400402283411!2d78.03956727597827!3d27.17514954876227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39747121d702ff6d%3A0xdd2ae4803f767dde!2sTaj%20Mahal!5e0!3m2!1sen!2sus!4v1759293578830!5m2!1sen!2sus"
};

// Function to change the image, description, and map
function changeLandmark(imgPath, description, landmarkKey) {
  document.getElementById("landmark").src = imgPath;
  document.getElementById("description").textContent = description;
  document.getElementById("mapFrame").src = mapUrls[landmarkKey];
}

// Resize function (from your original code)
function resizeImage() {
  const size = document.getElementById("sizeMenu").value;
  const img = document.getElementById("landmark");

  if (size === "small") {
    img.width = 600;
  } else if (size === "medium") {
    img.width = 800;
  } else if (size === "large") {
    img.width = 1000;
  }
}
