document.getElementById("DOMContentLoaded", function(){
    const questions =document.querySelectorAll(".question")

    questions.forEach(function(question){
        question.addEventListener("click", function(){
            if(answer.clasList.contains("active")){
                answer.classList.remove("active")
            }else{
                
            }
        })
    })
})