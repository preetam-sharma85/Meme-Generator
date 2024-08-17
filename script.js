const generateBtn  = document.querySelector(".generate-btn");
const memeTitle  = document.querySelector(".meme-title");
const memeImg  = document.querySelector(".meme-img");
const authorOutput  = document.querySelector(".author span");

generateBtn.addEventListener("click", () => {
 fetch('https://meme-api.com/gimme').then((res) => res.json()).then((data) => {
   
  const {author, title, url} = data
  memeTitle.innerText = title
  memeImg.src = url
  authorOutput.innerText = author

})
})