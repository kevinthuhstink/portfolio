function loadAnimations() {

  function curtainDraw() {
    const curtain = document.getElementById("curtain")
    curtain.style.animationName = "curtain-slide-out"
    curtain.style.animationTimingFunction = "ease-in-out"
    curtain.style.animationDuration = "3s"
    curtain.style.animationIterationCount = 1
    setTimeout(() => curtain.style.display = "none", 2900)
  }

  function unravelBottom() {
    const bottom = document.getElementById("open-bottom")
    bottom.style.animationName = "unravel-bottom"
    bottom.style.animationTimingFunction = "ease-in"
    bottom.style.animationDuration = "1.5s"
    bottom.style.animationIterationCount = 1
    setTimeout(() => bottom.style.display = "none", 1400)
  }

  function unravelTop() {
    const top = document.getElementById("open-top")
    top.style.animationName = "unravel-top"
    top.style.animationTimingFunction = "ease-in"
    top.style.animationDuration = "1.5s"
    top.style.animationIterationCount = 1
    setTimeout(() => top.style.display = "none", 1400)
  }

  curtainDraw()
  setTimeout(unravelTop, 3000)
  setTimeout(unravelBottom, 3000)
}

window.onload = loadAnimations
