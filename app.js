document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("content").value = localStorage.getItem("content");
  document.getElementById("saveBtn").addEventListener("click", () => {
    const content = document.getElementById("content").value;
    localStorage.setItem("content", content);
  })





});