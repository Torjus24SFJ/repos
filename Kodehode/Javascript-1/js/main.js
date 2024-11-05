const mainContent = document.getElementById("content")
const mainImage = document.getElementById("img")
const gallery = document.getElementById("gallery")

// newImage.src = "../img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg";

const imageurls = [
  "../img/amber-kipp-75715CVEJhI-unsplash.jpg",
  "../img/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
  "../img/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg",
  "../img/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg",
  "../img/pacto-visual-cWOzOnSoh6Q-unsplash.jpg",
];

const randomNum = Math.floor(Math.random() * imageurls.length)

mainImage.src = imageurls[randomNum]

imageurls.forEach(url => {
  const newImage = document.createElement("img")
  newImage.src = url
  gallery.appendChild(newImage)
})

