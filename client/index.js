// notes list

document.addEventListener('DOMContentLoaded', () => {

    onSubmitFunc = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON',
            },
            body: JSON.stringify({value: input.value}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => console.log('I\'m an error!', err));
    }

    // posting our note into our DB
    const div = document.createElement('div');
    document.body.append(div);
    const form = document.createElement('form');
    form.onsubmit = onSubmitFunc;
    // form.action = '/api' DIL
    // form.method = 'post' DIL
    div.append(form);
    const label = document.createElement('label');
    label.innerText = 'Write your input!';
    form.append(label);
    const input = document.createElement('input');
    input.id = 'note'
    // input.type = 'text'; DIL
    // input.name = 'note'; DIL
    form.append(input);
    const button = document.createElement('button');
    button.setAttribute('type', 'submit')
    button.innerText = 'Submit!';
    form.append(button);
    
    // 
    const notesContainer = document.createElement('div');
    document.body.append(notesContainer);
    // loop over based on what's received from DB
    const noteBox = document.createElement('div');
    notesContainer.append(noteBox);
})