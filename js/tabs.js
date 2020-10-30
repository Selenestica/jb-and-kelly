const photosTab = document.getElementById("photos-tab")
const videosTab = document.getElementById("videos-tab")
const photoGallery = document.getElementById("photo-gallery")
const videosGallery = document.getElementById("movie-gallery")

photosTab.addEventListener("click", (e) => {
  photoGallery.style.display = "block"
  videosGallery.style.display = "none"
})

videosTab.addEventListener("click", (e) => {
  photoGallery.style.display = "none"
  videosGallery.style.display = "block"
})