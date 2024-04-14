function darkMode()
{
  const imgDark = document.getElementById("img-dark");
  imgDark.classList.add("active1");
  
  const imgLight = document.getElementById("img-light");
  imgLight.classList.remove("active1")

  const bodyElement = document.getElementById("body");
  bodyElement.className = "theme-dark";
}


function lightMode()
{
    const imgLight = document.getElementById("img-light");
    imgLight.classList.add("active1");

    const imgDark = document.getElementById("img-dark");
    imgDark.classList.remove("active1");

    const bodyElement = document.getElementById("body");
    bodyElement.className = "theme-light";
}