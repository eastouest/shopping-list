const list = document.querySelector("ul")
const input = document.querySelector("input");
document.getElementById("item").value = "";
document.getElementById("item").placeholder='e.g. Carrots';
const btn = document.querySelector("button")

/* define what happens when you enter a new item in the shopping list */
document.getElementById("focusButton").onclick = () => {
    var input = document.getElementById("item").value;
    document.getElementById("item").value = ""
    let firstItem = input;
    var listItem = document.createElement("li");
    var span = document.createElement("span");
    var deleteButton = document.createElement("button")
    listItem.appendChild(span);
    listItem.appendChild(deleteButton);
    span.textContent = firstItem;
    deleteButton.textContent = "Delete";
    list.appendChild(listItem);
    /* define what happens when you delete an item*/
    deleteButton.onclick = () => {
        var element = span.textContent;
        span.textContent = "";
        document.getElementById("listItem").value = "";
    };
    deleteButton.addEventListener('click', () => {
        deleteButton.remove();
      });

      /* focus on input field to enter new item */

    document.getElementById("focusButton").addEventListener("click", () => {
        document.getElementById("item").focus();
    });
}