buttons = document.getElementsByClassName('dropbtn')

document.addEventListener('click', (event => {
    if (event.target.classList[0] == 'dropbtn') {
        event.target.parentElement.getElementsByClassName('serviceClass')[0].classList.toggle('dropdown-content')
}
    if (event.target.classList[0] == 'deleteBtn') {
        deleteResume(event.target.parentElement.parentElement.getElementsByTagName('p')[0].innerText)
        event.target.parentElement.parentElement.remove()
        localStorage.setItem('allResumes', JSON.stringify(allResumes))
    }

    if (event.target.classList[0] == 'saveBtn') {
        q = allResumes[event.target.parentElement.parentElement.getElementsByTagName('p')[0].innerText]
        q['fromAnotherPage'] = true
        localStorage.setItem('formData', JSON.stringify(q))
        localStorage.setItem('allResumes', JSON.stringify(allResumes))
        window.location.href = './index.html'
    }
}))

const resumesContainer = document.getElementById('resumesContainer')

allResumes = JSON.parse(localStorage.getItem('allResumes'))
for (const key in allResumes) {
    resumesContainer.insertAdjacentHTML('beforeend', `
    <div class="dropdown" test-id="resume-title">
        <p test-id="resume-title">${key}</p>
        <button class="dropbtn" title="Действия" test-id="resume-actions">Действия</button>
        <div class="dropdown-content serviceClass">
            <button class="saveBtn" test-id="resume-actions__open">Открыть</button>
            <button class="deleteBtn" test-id="resume-actions__delete">Удалить</button>
            <button class="copyBtn" class="openModalBtn" test-id="resume-actions__copy">Копировать</button>
            <div class="copymodal show" class="copyModal">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Личные данные">
                <input test-id="copy-modal__checkbox" type="checkbox" name="О себе">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Интересы">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Языки">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Опыт работы">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Образоввание">
                <input test-id="copy-modal__checkbox" type="checkbox" name="Курсы">
                <button test-id="copy-modal__copy">Копировать</button>
                <button class="cancelModalBtn" test-id="copy-modal__cancel">Отмена</button>
            </div>
        </div>
        <input type="checkbox" test-id="resume-checkbox">
    </div>
    `)
}

function deleteResume(data) {
    delete allResumes[data]
}

const createResumeBtn = document.getElementById('createResumeBtn')
createResumeBtn.addEventListener('click', () => {
    localStorage.removeItem("formData")
    window.location.href = './index.html'
})


const openModalBtn = document.getElementById('openModalBtn')
const cancelModalBtn = document.getElementById('cancelModalBtn')
const copyModal = document.getElementById('copyModal')

document.addEventListener('click', function(event) {
    if (event.target.classList[0] == 'copyBtn') {
    // copyModal.style.display = 'block'
    console.log(event.target.parentElement.getElementsByTagName('div')[0].classList.remove('show'))
}});

document.addEventListener('click', function(event) {
    if (event.target.classList[0] == 'cancelModalBtn') {
    console.log(event.target.parentElement.classList.add('show'))
}});