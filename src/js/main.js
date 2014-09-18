var button = document.querySelector("input.add-list");
var func = function () {
    var containerDiv = document.querySelector(".list-container");
    var listDiv = document.createElement("div");
    var html = '<div class="list-title">'
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

    //
    var deleteButton = listDiv.querySelector(".list-title > .typcn-trash");
    deleteButton.addEventListener("click", function (e) {
        containerDiv.removeChild(listDiv);
    });


    var addTaskButton = listDiv.querySelector(".add-item > input[type=button]");
    addTaskButton.addEventListener("click", function (e) {
        var itemDiv = document.createElement("div");
        var html = '<span class="status"><input type="checkbox"/></span> ' +
            '<span class="text-renderer">dxfghmjk,,</span> ' +
            '<span class="typcn typcn-arrow-up"></span> ' +
            '<span class="typcn typcn-arrow-down"></span> ' +
            '<span class="typcn typcn-edit"></span> ' +
            '<span class="typcn typcn-trash"></span>';
        itemDiv.innerHTML = html;
        itemDiv.classList.add("item");
        listDiv.appendChild(itemDiv);

        var deleteItemButton = itemDiv.querySelector(".typcn-trash");
        deleteItemButton.addEventListener("click", function (e){
            listDiv.removeChild(itemDiv);
        })
    });
};

button.addEventListener("click", func);

func();



