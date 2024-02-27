function loadAnimation() {

  function curtainDraw() {
    const curtain = document.getElementById("curtain")
    setTimeout(() => curtain.style.display = "none", 2000)
  }

  curtainDraw()
}

window.onload = loadAnimation 
