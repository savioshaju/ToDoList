
const addTask = document.getElementById('add-task');

addTask.addEventListener('click', () => {

    const divmodal = document.createElement('div');
    const divdialog = document.createElement('div');
    const divcontent = document.createElement('div');
    const divheader = document.createElement('div');
    const h5 = document.createElement('h5');
    const btnClose = document.createElement('button');

    divmodal.setAttribute('class', 'modal fade');
    divmodal.setAttribute('tabindex', '-1')

    divdialog.setAttribute('class', 'modal-dialog')
    divcontent.setAttribute('class', 'modal-content')
    divheader.setAttribute('class', 'modal-header');
    h5.setAttribute('class', 'modal-title');
    h5.textContent = 'Add Task';
    btnClose.setAttribute('class', 'btn-close');
    btnClose.setAttribute('data-bs-dismiss', 'modal');
    btnClose.setAttribute('aria-label', 'Close');

    divheader.appendChild(h5);
    divheader.appendChild(btnClose);

    const divbody = document.createElement('div');
    divbody.setAttribute('class', 'modal-body');

    const divform = document.createElement('div');
    divform.setAttribute('class', 'form-floating mb-3');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', 'titleInput');
    input.setAttribute('placeholder', 'Task Title');

    const label = document.createElement('label');
    label.setAttribute('for', 'titleInput');
    label.textContent = 'Task Title';

    divform.appendChild(input);
    divform.appendChild(label);
    divbody.appendChild(divform);


    divcontent.appendChild(divheader);
    divcontent.appendChild(divbody);
    divdialog.appendChild(divcontent);
    divmodal.appendChild(divdialog);

    document.body.appendChild(divmodal);
    const divfooter = document.createElement('div');
    divfooter.setAttribute('class', 'modal-footer');

    const btnAdd = document.createElement('button');
    btnAdd.setAttribute('type', 'button');
    btnAdd.setAttribute('id', 'addBtn')
    btnAdd.setAttribute('class', 'btn btn-primary');
    btnAdd.textContent = 'Add Task';

    divfooter.appendChild(btnAdd);
    divcontent.appendChild(divfooter);

    const bsModal = new bootstrap.Modal(divmodal);

    btnAdd.addEventListener('click', () => {
        const taskInputValue = input.value.trim();

        if (taskInputValue === '') {
            alert('Please enter a task title.');
            return;
        }

        const taskList = document.getElementById('task-list');

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.setAttribute('class', 'd-flex justify-content-between')

        li.setAttribute('class', 'list-group-item  d-flex justify-content-between align-items-center my-4 bg-warning');
        const btnDel = document.createElement('button');
        btnDel.setAttribute('type', 'button delBtn');
        btnDel.setAttribute('id', 'delBtn')
        btnDel.setAttribute('class', 'btn btn-danger ');
        btnDel.textContent = 'Delete Task';

        const divToggle = document.createElement('div')
        divToggle.setAttribute('class', 'form-check form-switch')


        const toggle = document.createElement('input');
        toggle.setAttribute('class', 'form-check-input')
        toggle.setAttribute('type', 'checkbox')
        toggle.setAttribute('id', 'toggleSwitch')

        const toggleLabel = document.createElement('label')
        toggleLabel.setAttribute('class', 'form-check-label')
        label.setAttribute('for', 'toggleSwitch');
        label.textContent = '';

        divToggle.appendChild(toggle)
        divToggle.appendChild(toggleLabel)
        const taskData = document.createElement('div')
        taskData.setAttribute('class', 'mx-3')
        taskData.textContent = taskInputValue;
        span.appendChild(divToggle)
        span.appendChild(taskData)
        li.appendChild(span)
        li.appendChild(btnDel)
        btnDel.addEventListener('click', () => {
            li.remove();
        });

        toggle.addEventListener('click', () => {
            if (span.style.textDecoration === 'line-through') {
                span.style.textDecoration = 'none';
                li.classList.remove('bg-success')

                li.classList.add('bg-warning')
            } else {
                span.style.textDecoration = 'line-through';
                li.classList.remove('bg-warning')

                li.classList.add('bg-success')


            }
        });

        taskList.appendChild(li);
        bsModal.hide();
    });
    bsModal.show();
    divmodal.addEventListener('hidden.bs.modal', () => {
        bsModal.dispose();
        divmodal.remove();
    });

});
