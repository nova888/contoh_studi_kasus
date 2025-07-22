const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("comment-list")

commentForm.addEventListener("submit", function(event){
    event.preventDefault()

    const name = this.element["name"].value
    const comment = this.element["comment"].value

    const commentItem = document.createElement("div")
    commentItem.classList.add('comment')
    commentItem.innerHTML = `
        <p><span>${name}</span>Berkata:</p>
        <p>${comment}</p>
    `
    commentList.appendChild(commentItem)
    this.requestFullscreen()
})