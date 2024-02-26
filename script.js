function toggleAnswer(id) {
    var answer = document.getElementById("answer"+id);
    var icon = document.getElementById("toggleIcon"+id);

    if(answer.style.display === "block"){
        answer.style.display = "none";
        icon.textContent = "+";
    }
    else{
        answer.style.display = "block";
        icon.textContent = "-";

    }
}