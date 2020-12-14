var objTodoList = [
    { id: 1, text: 'go to dentist' },
    { id: 2, text: 'get groceries' }
];

$(function () {
    let refresh = () => {
        var todoTxt = "";
        objTodoList.map((i) => {
            todoTxt += `<li id="$listItem-${i.id}"><span class="todo-text">${i.text}</span> <span class="remove-item">X</span></li>`;
        });
        $('#todo-list').html(todoTxt);
        $('#task-text').val('');
        $('#todo-list').on('click', '.remove-item', function () { removeItem(this); });
    };

    let addItem = (txt) => {
        var itemToAdd = { id: objTodoList.length + 1, text: txt };
        objTodoList.push(itemToAdd);
        refresh();
    };

    $("#add-todo-task").click(() => {
        var todoText = $('#task-text').val();
        addItem(todoText);
    });

    let removeItem = (e) => {
        var myParent = e.parentElement;
        var myParentId = parseInt(myParent.id.slice(myParent.id.length - 1, myParent.id.length));
        objTodoList.splice(myParentId - 1, 1);
        refresh();
    };
    refresh();
});