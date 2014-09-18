var button = document.querySelector("input.add-list");
button.addEventListener("click", function(e) {
    var containerDiv = document.querySelector(".list-container");
    var listDiv = document.createElement("div");
    var html ='<div class="list-title">'
                + '<span class="typcn typcn-clipboard"></span>'
                + '<span class="text-renderer">' + "listName" + '</span>'
                + '<span class="typcn typcn-edit"></span>'
                + '<span class="typcn typcn-trash"></span>'
            + '</div>'
            + '<div class="add-item">'
                + '<span class="typcn typcn-plus"></span>'
                + '<input class="new-item-text" type="text"/>'
                + '<input class="add-item-button" type="button" value="Add Task"/>'
            + '</div>';
    listDiv.innerHTML = html;
    listDiv.classList.add("list");
    containerDiv.insertBefore(listDiv, document.querySelector("input.add-list"));

});
