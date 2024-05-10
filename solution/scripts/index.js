const inputsContainer = document.getElementById('inputsContainer')
const interestBtnAdd = document.getElementById('interestBtnAdd')
const interestBtnRemove = document.getElementById('interestBtnRemove')

interestBtnAdd.addEventListener('click', () => {
    let input = document.createElement('input')
    input.setAttribute('class', 'interestInput')
    input.setAttribute('test-id', 'interest')
    inputsContainer.append(input)
})

interestBtnRemove.addEventListener('click', () => {
    let inputs = inputsContainer.getElementsByClassName('interestInput')
    if (inputs.length > 1) {
        inputs[inputs.length - 1].remove()
    }

})

const langBtnAdd = document.getElementById('langBtnAdd')
const langBtnRemove = document.getElementById('langBtnRemove')
const langDivContainer = document.getElementById('langDivContainer')
const firstLangDiv = document.getElementById('firstLangDiv')

langBtnAdd.addEventListener('click', () => {
    langDivContainer.insertAdjacentHTML('beforeend', `<div class="langDiv">
    <input type="text" placeholder="Язык" test-id="language-name">
    <input type="text" placeholder="Уровень владения" test-id="language-level">
    </div>`)
})

langBtnRemove.addEventListener('click', () => {
    let langDivs = langDivContainer.getElementsByClassName('langDiv')
    if (langDivs.length > 1) {
        langDivs[langDivs.length-1].remove()
    }
})

const jobBtnAdd = document.getElementById('jobBtnAdd')
const jobBtnRemove = document.getElementById('jobBtnRemove')
const jobDivContainer = document.getElementById('jobDivContainer')
const firstJobDiv = document.getElementById('firstJobDiv')

jobBtnAdd.addEventListener('click', () => {
    jobDivContainer.insertAdjacentHTML('beforeend', `
    <div class="jobDiv">
        <input type="text" name="exppost" placeholder="Должность" test-id="job-title">
        <input type="date" name="expstartdate" test-id="job-date-start"><input type="date" name="expenddate" test-id="job-date-end">
        <input type="text" name="expworkplace" test-id="job-place" placeholder="Место работы">
        <input type="text" name="expworkdescription" test-id="job-description" placeholder="Доп. информация">
    </div>`)
})

jobBtnRemove.addEventListener('click', () => {
    let jobDivs = jobDivContainer.getElementsByClassName('jobDiv')
    if (jobDivs.length > 1) {
        jobDivs[jobDivs.length - 1].remove()
    }
})


const eduBtnAdd = document.getElementById('eduBtnAdd')
const eduBtnRemove = document.getElementById('eduBtnRemove')
const eduDivContainer = document.getElementById('eduDivContainer')
const firstEduDiv = document.getElementById('firstEduDiv')

eduBtnAdd.addEventListener('click', () => {
    eduDivContainer.insertAdjacentHTML('beforeend', `
    <div class="eduDiv">
        <input type="text" name="edupost" test-id="education-title" placeholder="Образование">
        <input type="date" name="edustartdate" test-id="education-date-start"><input type="date" name="eduenddate" test-id="education-date-end">
        <input type="text" name="eduworkplace" test-id="education-place" placeholder="Место обучения">
        <input type="text" name="eduworkdescription" test-id="education-description" placeholder="Доп. информация">
    </div>`)
})

eduBtnRemove.addEventListener('click', () => {
    let eduDivs = eduDivContainer.getElementsByClassName('eduDiv')
    if (eduDivs.length > 1) {
        eduDivs[eduDivs.length - 1].remove()
    }
})



const courseBtnAdd = document.getElementById('courseBtnAdd')
const courseBtnRemove = document.getElementById('courseBtnRemove')
const courseDivContainer = document.getElementById('courseDivContainer')
const firstCourseDiv = document.getElementById('firstCourseDiv')

courseBtnAdd.addEventListener('click', () => {
    courseDivContainer.insertAdjacentHTML('beforeend', `
    <div class="courseDiv">
        <input type="text" name="coursepost" test-id="course-title" placeholder="Курсы">
        <input type="date" name="coursestartdate" test-id="course-date-start"><input type="date" name="courseenddate" test-id="course-date-end">
        <input type="text" name="coursedescription" test-id="course-place" placeholder="Авторы курса">
    </div>`)
})

courseBtnRemove.addEventListener('click', () => {
    let courseDivs = courseDivContainer.getElementsByClassName('courseDiv')
    if (courseDivs.length > 1) {
        courseDivs[courseDivs.length - 1].remove()
    }
})


let formData = {Interest: [''],
                Languages: {},
                Experience: [], 
                Education: [],
                Courses: [],
                birthday: '',
                city: '',
                email: '',
                personal_data: '',
                phone_number: '',
                name: '',
                description: ''
            }
const LS = localStorage;
const interest = document.getElementById('interest')
const languages = document.getElementById('languages')
const experience = document.getElementById('experience')
const education = document.getElementById('education')
const courses = document.getElementById('courses')

form.addEventListener('input', function(event) {
    if (nameInput.value.trim() === '') {
        genResume.setAttribute("disabled", "")
    }
    else {
        genResume.removeAttribute('disabled')
    }

    if (event.target.name != '') {
        formData[event.target.name] = event.target.value
        LS.setItem('formData', JSON.stringify(formData))
}})


let event_list = ["click", "input"];

event_list.forEach(function(event) {

	interest.addEventListener(event, () => {
        let inputs = inputsContainer.getElementsByClassName('interestInput')
        let tempValue = Array(inputs.length)
        for (let i = 0; i < inputs.length; i++) {
            tempValue[i] = inputs[i].value
        }
        formData.Interest = tempValue
        LS.setItem('formData', JSON.stringify(formData))
    })

    languages.addEventListener(event, () => {
        let langDivs = langDivContainer.getElementsByClassName('langDiv')
        let tempObj = {}
        for (let i = 0; i < langDivs.length; i++) {
            tempObj[langDivs[i].children[0].value] = langDivs[i].children[1].value
        }
        formData.Languages = tempObj
        LS.setItem('formData', JSON.stringify(formData))
    })

    experience.addEventListener(event, () => {
        let jobDivs = jobDivContainer.getElementsByClassName('jobDiv')
        let tempArr = Array(jobDivs.length)
        
        for (let i = 0; i < jobDivs.length; i++) {
            tempObj = {
                exppost: '',
                expstartdate: '',
                expenddate: '',
                expworkplace: '',
                expworkdescription: ''
            }

            jobInputs = jobDivs[i].getElementsByTagName('input')
            Array.from(jobInputs).forEach((input) => {
                tempObj[input.name] = input.value
            })
            tempArr[i]= tempObj
        }
        formData.Experience = tempArr
        LS.setItem('formData', JSON.stringify(formData))
    })

    education.addEventListener(event, () => {
        let eduDivs = eduDivContainer.getElementsByClassName('eduDiv')
        let tempArr1 = Array(eduDivs.length)
        
        for (let i = 0; i < eduDivs.length; i++) {
            tempObj = {
                edupost: '',
                edustartdate: '',
                eduenddate: '',
                eduworkplace: '',
                eduworkdescription: ''
            }

            eduInputs = eduDivs[i].getElementsByTagName('input')
            Array.from(eduInputs).forEach((input) => {
                tempObj[input.name] = input.value
            })
            tempArr1[i]= tempObj
        }
        formData.Education = tempArr1
        LS.setItem('formData', JSON.stringify(formData))
    })


    courses.addEventListener(event, () => {
        let courseDivs = courseDivContainer.getElementsByClassName('courseDiv')
        let tempArr2 = Array(courseDivs.length)
        
        for (let i = 0; i < courseDivs.length; i++) {
            tempObj = {
                coursepost: '',
                coursestartdate: '',
                courseenddate: '',
                coursedescription: ''
            }

            courseInputs = courseDivs[i].getElementsByTagName('input')
            Array.from(courseInputs).forEach((input) => {
                tempObj[input.name] = input.value
            })
            tempArr2[i]= tempObj
        }
        formData.Courses = tempArr2
        LS.setItem('formData', JSON.stringify(formData))
    })

})

// } else {
//     formData = JSON.parse(localStorage.getItem('formData'))
// }

const nameInput = document.getElementById('personal_data')

const backBtn = document.getElementById('back-button')
const genResume = document.getElementById('generate-resume')
const body = document.body

const pageName = document.getElementById('page_username')
const mainName = document.getElementById('main_pageName')
const pageData = document.getElementById('page_data')
const pageCity = document.getElementById('page_city')
const pageTel = document.getElementById('page_tel')
const pageEmail = document.getElementById('page_email')
const resumeName = document.getElementById('resume_name')
const pageDesc = document.getElementById('page_description')

const interestSection = document.getElementById('interest_section')
const langSection = document.getElementById('lang_section')
const jobSection = document.getElementById('job_section')
const eduSection = document.getElementById('education_section')
const courseSection = document.getElementById('courses_section')

backBtn.addEventListener('click', () => {
    form.classList.toggle('disable')
    resume.classList.toggle('disable')
})

function formattedDate(dateString) {
    let parts = dateString.split("-");
    return parts[2] + "." + parts[1] + "." + parts[0];
}

function formattedDateMonth(dateString) {
    if (dateString != '') {
        let dateString1 = new Date(dateString);

        let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

        let month = months[dateString1.getMonth()]
        let year = dateString1.getFullYear()
    
        return month + ' ' + year + ' г.';
    } else return 'наст. время'
}

function formattedDateMonth1(dateString) {
    if (dateString != '') {
        let dateString1 = new Date(dateString);

        let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];

        let month = months[dateString1.getMonth()]
        let year = dateString1.getFullYear()
    
        return month + ' ' + year + ' г.';
    }
}

function dateSort(data) {
    var dataArray = Object.values(data);

    function compareDates(a, b) {
        var dateA = a.expstartdate.split('-').map(Number);
        var dateB = b.expstartdate.split('-').map(Number);
        
        for (var i = 0; i < 3; i++) {
            if (dateA[i] !== dateB[i]) {
                return dateA[i] - dateB[i];
            }
        }
        return 0;
    }

    dataArray.sort(function(a, b) {
        if (a.expstartdate && b.expstartdate) {
            return compareDates(a, b);
        } else if (!a.expstartdate && !b.expstartdate) {
            return 0;
        } else if (!a.expstartdate) {
            return 1;
        } else {
            return -1;
        }
    });

    return dataArray

}


function dateSort1(data) {
    var dataArray = Object.values(data);

    function compareDates(a, b) {
        var dateA = a.edustartdate.split('-').map(Number);
        var dateB = b.edustartdate.split('-').map(Number);
        
        for (var i = 0; i < 3; i++) {
            if (dateA[i] !== dateB[i]) {
                return dateA[i] - dateB[i];
            }
        }
        return 0;
    }

    dataArray.sort(function(a, b) {
        if (a.edustartdate && b.edustartdate) {
            return compareDates(a, b);
        } else if (!a.edustartdate && !b.edustartdate) {
            return 0;
        } else if (!a.edustartdate) {
            return 1;
        } else {
            return -1;
        }
    });

    return dataArray
}

function dateSort2(data) {
    var dataArray = Object.values(data);

    function compareDates(a, b) {
        var dateA = a.coursestartdate.split('-').map(Number);
        var dateB = b.coursestartdate.split('-').map(Number);
        
        for (var i = 0; i < 3; i++) {
            if (dateA[i] !== dateB[i]) {
                return dateA[i] - dateB[i];
            }
        }
        return 0;
    }

    dataArray.sort(function(a, b) {
        if (a.coursestartdate && b.coursestartdate) {
            return compareDates(a, b);
        } else if (!a.coursestartdate && !b.coursestartdate) {
            return 0;
        } else if (!a.coursestartdate) {
            return 1;
        } else {
            return -1;
        }
    });

    return dataArray
}

    
    genResume.addEventListener('click', () => {
    data = JSON.parse(LS.getItem('formData'))

    
    form.classList.toggle('disable')
    resume.classList.toggle('disable')

    resumeName.innerText = data.name
    pageName.innerText = data.personal_data
    mainName.innerText = data.personal_data

    if (data.birthday != '') {
        pageData.innerText = formattedDate(data.birthday)
        pageData.parentElement.classList.remove('disable')
    } else {
        pageData.parentElement.classList.add('disable')
    }

    if (data.city != '') {
        pageCity.innerText = data.city
        pageCity.parentElement.classList.remove('disable')
    } else {
        pageCity.parentElement.classList.add('disable')
    }

    if (data.phone_number != '') {
        pageTel.innerText = data.phone_number
        pageTel.parentElement.classList.remove('disable')
    } else {
        pageTel.parentElement.classList.add('disable')
    }

    if (data.email != '') {
        pageEmail.innerText = data.email
        pageEmail.parentElement.classList.remove('disable')
    } else {
        pageEmail.parentElement.classList.add('disable')
    }

    if (data.description != '') {
        pageDesc.innerText = data.description
        pageDesc.parentElement.classList.remove('disable')
    } else {
        pageDesc.parentElement.classList.add('disable')
    }


    // if (data.email != '') {
    // } else {
        // pageEmail.parentElement.innerHTML = ''
    // }


    let inputs = inputsContainer.getElementsByClassName('interestInput')
    let temp1 = false
    if ((data.Interest.length === 1) && (data.Interest[0] === '')) {
        if (interestSection.parentElement !== null) {
            interestSection.parentElement.classList.add('disable')
            // interestSection.parentElement.removeAttribute('test-id')
        }
    } else {
    for (let i = 0; i < inputs.length; i++) {
        if (data.Interest[i] != '') {
        interestSection.insertAdjacentHTML('beforeend', `
            <p>${data.Interest[i]}</p>
        `)
        temp1 = true
    }}}
    if (!temp1) {
        interestSection.parentElement.classList.add('disable')
        interestSection.parentElement.removeAttribute('test-id')
    } else {
        interestSection.parentElement.classList.remove('disable')
        // interestSection.parentElement.element.setAttribute('test-id', 'resume-main-section')
    }

    let temp = false
    for (let key in data.Languages) {
        if ((key != '') && (data.Languages[key] != '')) {
        langSection.insertAdjacentHTML('beforeend', `
        <div class="statement-mark">
            <p>${key}</p>
            <p>${data.Languages[key]}</p>
        </div>
        `);
        temp = true
    }
}  
    if (!temp) {
        langSection.parentElement.classList.add('disable')
    } else {
        langSection.parentElement.classList.remove('disable')
    }

    let temp2 = false
    let jobDivs = jobDivContainer.getElementsByClassName('jobDiv')
    sortedData = dateSort(data.Experience)
    if (sortedData.length > 0) {
    for (let i = 0; i < jobDivs.length; i++) {
        if (Boolean(sortedData[i].exppost.trim())) {
            if (sortedData[i].expstartdate != '') {
        jobSection.insertAdjacentHTML('beforeend', `
            <div class="resume-info">
                <div>
                    <p>${sortedData[i].exppost}</p>
                    <p>${formattedDateMonth1(sortedData[i].expstartdate)} — ${formattedDateMonth(sortedData[i].expenddate)}</p>
                </div>
                    <p>${sortedData[i].expworkplace}</p>
                    <p>${sortedData[i].expworkdescription}</p>
            </div>
        `)
            
        } else {
            jobSection.insertAdjacentHTML('beforeend', `
            <div class="resume-info">
                <div>
                    <p>${sortedData[i].exppost}</p>
                </div>
                    <p>${sortedData[i].expworkplace}</p>
                    <p>${sortedData[i].expworkdescription}</p>
            </div>
        `)
        }
        temp2 = true}}
    }
    if (!temp2) {
        jobSection.parentElement.classList.add('disable')
    } else {
        jobSection.parentElement.classList.remove('disable')
    }

    let temp3 = false
    let eduDivs = eduDivContainer.getElementsByClassName('eduDiv')
    sortedData1 = dateSort1(data.Education)
    if (sortedData1.length > 0) {
    for (let i = 0; i < eduDivs.length; i++) {
        if (Boolean(sortedData1[i].edupost.trim())) {
            if (sortedData1[i].edustartdate != '') {
        eduSection.insertAdjacentHTML('beforeend', `
            <div class="resume-info">
                <div>
                    <p>${sortedData1[i].edupost}</p>
                    <p>${formattedDateMonth1(sortedData1[i].edustartdate)} — ${formattedDateMonth(sortedData1[i].eduenddate)}</p>
                </div>
                    <p>${sortedData1[i].eduworkplace}</p>
                    <p>${sortedData1[i].eduworkdescription}</p>
            </div>
        `)
            
        } else {
            eduSection.insertAdjacentHTML('beforeend', `
            <div class="resume-info">
                <div>
                    <p>${sortedData1[i].edupost}</p>
                </div>
                    <p>${sortedData1[i].eduworkplace}</p>
                    <p>${sortedData1[i].eduworkdescription}</p>
            </div>
        `)
        }
        temp3 = true}
    }}
    if (!temp3) {
        eduSection.parentElement.classList.add('disable')
    } else {
        eduSection.parentElement.classList.remove('disable')
    }


    
    let temp4 = false
        let courseDivs = courseDivContainer.getElementsByClassName('courseDiv')
        sortedData2 = dateSort2(data.Courses)
        if (sortedData2.length > 0) {
        for (let i = 0; i < courseDivs.length; i++) {
            if (Boolean(sortedData2[i].coursepost.trim())) {
                if (sortedData2[i].coursestartdate != '') {
            courseSection.insertAdjacentHTML('beforeend', `
                <div class="resume-info">
                    <div>
                        <p>${sortedData2[i].coursepost}</p>
                        <p>${formattedDateMonth1(sortedData2[i].coursestartdate)} — ${formattedDateMonth(sortedData2[i].courseenddate)}</p>
                    </div>
                        <p>${sortedData2[i].coursedescription}</p>
                </div>
            `)
                
            } else {
                courseSection.insertAdjacentHTML('beforeend', `
                <div class="resume-info">
                    <div>
                        <p>${sortedData2[i].coursepost}</p>
                    </div>
                        <p>${sortedData2[i].coursedescription}</p>
                </div>
            `)
            }
            temp4 = true}
        }}
        if (!temp4) {
            courseSection.parentElement.classList.add('disable')
        } else {
            courseSection.parentElement.classList.remove('disable')
        }
})


backBtn.addEventListener('click', () => {
    formData['fromAnotherPage'] = false
    LS.setItem('formData', JSON.stringify(formData))
    interestSection.innerHTML = ''
    langSection.innerHTML = ''
    jobSection.innerHTML = ''
    eduSection.innerHTML = ''
    courseSection.innerHTML = ''
})

if (localStorage.getItem('allResumes') === null) {
    let allResumes = {}
    LS.setItem('allResumes', JSON.stringify(allResumes))

    const saveBtn = document.getElementById('save-button')
    saveBtn.addEventListener('click', () => {
    allResumes[formData.name || formData.personal_data] = formData
    LS.setItem('allResumes', JSON.stringify(allResumes))
    window.location.href = './all.html'
})
}
allResumes = JSON.parse(localStorage.getItem('allResumes'))
console.log(allResumes)
const saveBtn = document.getElementById('save-button')
saveBtn.addEventListener('click', () => {
    formData['fromAnotherPage'] = false
    allResumes[formData.name || formData.personal_data] = formData
    LS.setItem('allResumes', JSON.stringify(allResumes))
    window.location.href = './all.html'

})











































// if (!localStorage.getItem('formData').fromAnotherPage) {
//         data = JSON.parse(LS.getItem('formData'))
    
        
//         form.classList.toggle('disable')
//         resume.classList.toggle('disable')
    
//         resumeName.innerText = data.name
//         pageName.innerText = data.personal_data
//         mainName.innerText = data.personal_data
    
//         if (data.birthday != '') {
//             pageData.innerText = formattedDate(data.birthday)
//             pageData.parentElement.classList.remove('disable')
//         } else {
//             pageData.parentElement.classList.add('disable')
//         }
    
//         if (data.city != '') {
//             pageCity.innerText = data.city
//             pageCity.parentElement.classList.remove('disable')
//         } else {
//             pageCity.parentElement.classList.add('disable')
//         }
    
//         if (data.phone_number != '') {
//             pageTel.innerText = data.phone_number
//             pageTel.parentElement.classList.remove('disable')
//         } else {
//             pageTel.parentElement.classList.add('disable')
//         }
    
//         if (data.email != '') {
//             pageEmail.innerText = data.email
//             pageEmail.parentElement.classList.remove('disable')
//         } else {
//             pageEmail.parentElement.classList.add('disable')
//         }
    
//         pageDesc.innerText = data.description
    
    
//         // if (data.email != '') {
//         // } else {
//             // pageEmail.parentElement.innerHTML = ''
//         // }
    
    
//         let inputs = inputsContainer.getElementsByClassName('interestInput')
//         let temp1 = false
//         if ((data.Interest.length === 1) && (data.Interest[0] === '')) {
//             if (interestSection.parentElement !== null) {
//                 interestSection.parentElement.classList.add('disable')
//             }
//         } else {
//         for (let i = 0; i < inputs.length; i++) {
//             if (data.Interest[i] != '') {
//             interestSection.insertAdjacentHTML('beforeend', `
//                 <p>${data.Interest[i]}</p>
//             `)
//             temp1 = true
//         }}}
//         if (!temp1) {
//             interestSection.parentElement.classList.add('disable')
//         } else {
//             interestSection.parentElement.classList.remove('disable')
//         }
    
//         let temp = false
//         for (let key in data.Languages) {
//             if ((key != '') && (data.Languages[key] != '')) {
//             langSection.insertAdjacentHTML('beforeend', `
//             <div class="statement-mark">
//                 <p>${key}</p>
//                 <p>${data.Languages[key]}</p>
//             </div>
//             `);
//             temp = true
//         }
//     }  
//         if (!temp) {
//             langSection.parentElement.classList.add('disable')
//         } else {
//             langSection.parentElement.classList.remove('disable')
//         }
    
//         let temp2 = false
//         let jobDivs = jobDivContainer.getElementsByClassName('jobDiv')
//         sortedData = dateSort(data.Experience)
//         if (sortedData.length > 0) {
//         for (let i = 0; i < jobDivs.length; i++) {
//             if (Boolean(sortedData[i].exppost.trim())) {
//                 if (sortedData[i].expstartdate != '') {
//             jobSection.insertAdjacentHTML('beforeend', `
//                 <div class="resume-info">
//                     <div>
//                         <p>${sortedData[i].exppost}</p>
//                         <p>${formattedDateMonth1(sortedData[i].expstartdate)} — ${formattedDateMonth(sortedData[i].expenddate)}</p>
//                     </div>
//                         <p>${sortedData[i].expworkplace}</p>
//                         <p>${sortedData[i].expworkdescription}</p>
//                 </div>
//             `)
                
//             } else {
//                 jobSection.insertAdjacentHTML('beforeend', `
//                 <div class="resume-info">
//                     <div>
//                         <p>${sortedData[i].exppost}</p>
//                     </div>
//                         <p>${sortedData[i].expworkplace}</p>
//                         <p>${sortedData[i].expworkdescription}</p>
//                 </div>
//             `)
//             }
//             temp2 = true}}
//         }
//         if (!temp2) {
//             jobSection.parentElement.classList.add('disable')
//         } else {
//             jobSection.parentElement.classList.remove('disable')
//         }
    
//         let temp3 = false
//         let eduDivs = eduDivContainer.getElementsByClassName('eduDiv')
//         sortedData1 = dateSort1(data.Education)
//         if (sortedData1.length > 0) {
//         for (let i = 0; i < eduDivs.length; i++) {
//             if (Boolean(sortedData1[i].edupost.trim())) {
//                 if (sortedData1[i].edustartdate != '') {
//             eduSection.insertAdjacentHTML('beforeend', `
//                 <div class="resume-info">
//                     <div>
//                         <p>${sortedData1[i].edupost}</p>
//                         <p>${formattedDateMonth1(sortedData1[i].edustartdate)} — ${formattedDateMonth(sortedData1[i].eduenddate)}</p>
//                     </div>
//                         <p>${sortedData1[i].eduworkplace}</p>
//                         <p>${sortedData1[i].eduworkdescription}</p>
//                 </div>
//             `)
                
//             } else {
//                 eduSection.insertAdjacentHTML('beforeend', `
//                 <div class="resume-info">
//                     <div>
//                         <p>${sortedData1[i].edupost}</p>
//                     </div>
//                         <p>${sortedData1[i].eduworkplace}</p>
//                         <p>${sortedData1[i].eduworkdescription}</p>
//                 </div>
//             `)
//             }
//             temp3 = true}
//         }}
//         if (!temp3) {
//             eduSection.parentElement.classList.add('disable')
//         } else {
//             eduSection.parentElement.classList.remove('disable')
//         }
    
    
        
//         let temp4 = false
//             let courseDivs = courseDivContainer.getElementsByClassName('courseDiv')
//             sortedData2 = dateSort2(data.Courses)
//             if (sortedData2.length > 0) {
//             for (let i = 0; i < courseDivs.length; i++) {
//                 if (Boolean(sortedData2[i].coursepost.trim())) {
//                     if (sortedData2[i].coursestartdate != '') {
//                 courseSection.insertAdjacentHTML('beforeend', `
//                     <div class="resume-info">
//                         <div>
//                             <p>${sortedData2[i].coursepost}</p>
//                             <p>${formattedDateMonth1(sortedData2[i].coursestartdate)} — ${formattedDateMonth(sortedData2[i].courseenddate)}</p>
//                         </div>
//                             <p>${sortedData2[i].coursedescription}</p>
//                     </div>
//                 `)
                    
//                 } else {
//                     courseSection.insertAdjacentHTML('beforeend', `
//                     <div class="resume-info">
//                         <div>
//                             <p>${sortedData2[i].coursepost}</p>
//                         </div>
//                             <p>${sortedData2[i].coursedescription}</p>
//                     </div>
//                 `)
//                 }
//                 temp4 = true}
//             }}
//             if (!temp4) {
//                 courseSection.parentElement.classList.add('disable')
//             } else {
//                 courseSection.parentElement.classList.remove('disable')
//             }
    
    
    
//     backBtn.addEventListener('click', () => {
//         formData['fromAnotherPage'] = false
//         LS.setItem('formData', JSON.stringify(formData))
//         interestSection.innerHTML = ''
//         langSection.innerHTML = ''
//         jobSection.innerHTML = ''
//         eduSection.innerHTML = ''
//         courseSection.innerHTML = ''
//     })
    
//     let allResumes = {}
//     LS.setItem('allResumes', JSON.stringify(allResumes))
    
//     const saveBtn = document.getElementById('save-button')
//     saveBtn.addEventListener('click', () => {
//         formData['fromAnotherPage'] = false
//         allResumes[formData.name || formData.personal_data] = formData
//         LS.setItem('allResumes', JSON.stringify(allResumes))
//         window.location.href = './all.html'
    
//     })
// }