const commentForm = document.getElementById("comment-form")
const commentList = document.getElementById("comment-list")

commentForm.addEventListener("submit", function(event){
    event.preventDefault()

    const name = this.elements["name"].value    
    const comment = this.elements["comment"].value

    const commentItem = document.createElement("div")
    commentItem.classList.add('comment')
    commentItem.innerHTML = `
        <p><span>${name}</span>Berkata:</p>
        <p>${comment}</p>
    `
    commentList.appendChild(commentItem)
    this.reset()
})