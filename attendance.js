function createPerson (fname, lname, gender) {
    let x = new Date()
    return {
        firstName: fname,
        lastName: lname,
        gender: gender,
        time: `${x.getHours()}:${x.getMinutes()}`
    }
}

const myForm = document.querySelector('form')
const tableBody = document.querySelector('tbody')
const people = []

const generatePeopleData = () => {
    tableBody.innerHTML = ''
    people.forEach(person => {
        let tr = document.createElement('tr')
        for (let key in person) {       
            let td = document.createElement('td')
            td.innerHTML = person[key]   // person[key] is the value e.g John
            tr.appendChild(td)
        }

        tableBody.append(tr)
    })
}

myForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let first = evt.target[0].value;            // target means the form
    let last = evt.target[1].value;
    let gender = evt.target[2].value;
    let person = createPerson(first, last, gender)
    people.push(person);
    generatePeopleData()
    evt.target[0].value = ''
    evt.target[1].value = ''
    evt.target[2].value = ''
})



