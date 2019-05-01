document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flash").forEach(node => {
    node.addEventListener("click", event => {
      node.remove()
    })
  })
})
