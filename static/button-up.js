function backToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0
}
window.onscroll = function () {
    let toTop = document.documentElement.scrollTop || document.body.scrollTop
    if (toTop != 0) {
        document.getElementById("button-Up").classList.remove("button-Up-off")
        document.getElementById("button-Up").classList.add("button-Up-show")
    }

    else {
        document.getElementById("button-Up").classList.remove("button-Up-show")
        document.getElementById("button-Up").classList.add("button-Up-off")
    }
}
document.getElementById("button-Up").addEventListener("mousemove", () => {
    document.getElementById("button-Up").style.opacity = 1
})