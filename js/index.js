const button = document.querySelector('button')

button.addEventListener( 'click', e => {
    e.preventDefault()
    
    const form = document.querySelector('form')

    const div = document.createElement('div')

    const input = document.createElement('input')
    input.type = 'text'
    input.value = document.querySelector('#main-input').value

    const deleteButton = document.createElement('button')
    deleteButton.type = 'button'
    deleteButton.textContent = 'x'
    deleteButton.id = 'd-button'
    deleteButton.style.backgroundColor = 'red'

    deleteButton.addEventListener('click', e => {
        e.target.closest('div').remove()
    } )
    
    div.append(input)
    div.append(deleteButton)
    form.append(div)

    
} )

