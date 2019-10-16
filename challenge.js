let likesArray = [];
document.addEventListener("DOMContentLoaded", () => {
    let t = setInterval(increastOne, 1000);

    document.getElementById("plus").addEventListener("click", increastOne)
    document.getElementById("minus").addEventListener("click", decreaseOne)
    document.getElementById("heart").addEventListener("click", addLikes)
    document.getElementById("pause").addEventListener("click", () => {
        clearInterval(t)

    });
    document.getElementById("submit").addEventListener("click", function (e) {
        e.preventDefault()
        addcomment();
    });
});

function increastOne() {
    let counter = parseInt(document.getElementById("counter").textContent)
    counter = counter + 1
    document.getElementById("counter").innerHTML = counter;
}

function decreaseOne() {
    let counter = parseInt(document.getElementById("counter").textContent)
    counter = counter - 1
    document.getElementById("counter").innerHTML = counter;
}

function addLikes() {

    let counter = parseInt(document.getElementById("counter").textContent)
    if (likesArray[counter] === undefined) { likesArray[counter] = 0 }
    likesArray[counter] = parseInt(likesArray[counter]) + 1
    if (document.getElementById(counter) === null) {
        let ul = document.querySelector(".likes");
        let li = document.createElement("li");
        li.setAttribute("id", counter.toString());
        li.appendChild(document.createTextNode(counter.toString() + " has been liked " + likesArray[counter].toString()));
        ul.appendChild(li);
    } else {
        document.getElementById(counter).innerHTML = counter.toString() + " has been liked " + likesArray[counter].toString()
    }


}

function addcomment() {
    var inputTask = document.getElementById("comment-input").value
    var div = document.getElementById("list")
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(inputTask));
    div.appendChild(p);
    document.getElementById("comment-input").value = ""
}
