if (document.getElementById("ads").classList.contains("d-none")) {
  setInterval(() => {
    document.getElementById("ads").classList.remove("d-none");
    document.getElementById("main-content").classList.add("blur");
  }, 10000);
}

document.getElementById("close-ad").addEventListener("click", () => {
  document.getElementById("ads").classList.add("d-none");
  document.getElementById("main-content").classList.remove("blur");
});
