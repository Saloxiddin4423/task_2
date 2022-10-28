class Aside extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside class="aside">
        <div class="logo">
            <h1><i class="bi bi-lightning-charge "></i> Clever</h1>
        </div>
        <div class="aside__saidbar">
            <div class="aside__saidbar-route">
                <h3 id="Dashboard"  onclick="exchange('Dashboard')" class="active"><i class="bi bi-house"></i> Dashboard</h3>
                <h3 id="Test" onclick="exchange('Test')" ><i class="bi bi-chat "  ></i> Test CRUD</h3>
                <h3 id="Users" onclick="exchange('Users')"><i class="bi bi-person-circle"></i> Users</h3>
            </div>
            <div class="aside__saidbar-register">
                <h3 class="" id="Account" onclick="exchange('Account')"><i   class="bi bi-person-badge-fill"></i> Account</h3>
                <h3 onclick="exchange('Logout')" ><i class="bi bi-box-arrow-left"></i> Logout</h3>
            </div>
        </div>
    </aside>
        `
    }
}
class Card extends HTMLElement {
    connectedCallback() {

        this.innerHTML = ` 
   
    <div class="cards">
    <div class="card">
        <img src="../../img/card.png" alt="">
        <h3 class="card-title">Headline label </h3>
        <p class="card-label">Label, Label</p>
        <button class="card-btn">Badge</button>
    </div>
    <div class="card-button">
        <h2><i class="bi bi-three-dots"></i></h2>
    </div>
</div>
    </a> 
   `
    }
}
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <nav class="navbar">
        <div class="navbar__text">
            <h1>Dashboard</h1>
            <div class="navbar__text-p">
                  <p id="text" class="active"  onclick="exchange('test')">Tests</p>
                <p id="Applicants" onclick="exchange('Applicants')">Applicants</p>
            </div>
        </div>
        <div class="navbar__button">
            <button>+ create</button>
        </div>
    </nav>`
    }
}
class Table extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `  
        <table class="section__applicants-table">
        <thead>
            <tr>
                <th>User</th>
                <th>Result</th>
                <th>Modified</th>
                <th>Subject</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <div class="tbody__title">
                        <div class="tbody__title-icon">
                            <i class="bi bi-image"></i>
                        </div>
                        <div class="tbody__title-text">
                            <b>Alfreds Futterkiste</b>
                            <p>toshmat@eshmatov.uz</p>
                        </div>
                    </div>
                </td>
                <td>5/10</td>
                <td>5/23/2020, 10:45 AM</td>
                <td><button>Mathematics</button> </td>
            </tr>
            <tr>
            <td>
                <div class="tbody__title">
                    <div class="tbody__title-icon">
                        <i class="bi bi-image"></i>
                    </div>
                    <div class="tbody__title-text">
                        <b>Alfreds Futterkiste</b>
                        <p>toshmat@eshmatov.uz</p>
                    </div>
                </div>
            </td>
            <td>5/10</td>
            <td>5/23/2020, 10:45 AM</td>
            <td><button>Mathematics</button> </td>
        </tr> <tr>
        <td>
            <div class="tbody__title">
                <div class="tbody__title-icon">
                    <i class="bi bi-image"></i>
                </div>
                <div class="tbody__title-text">
                    <b>Alfreds Futterkiste</b>
                    <p>toshmat@eshmatov.uz</p>
                </div>
            </div>
        </td>
        <td>5/10</td>
        <td>5/23/2020, 10:45 AM</td>
        <td><button>Mathematics</button> </td>
    </tr>
        </tbody>
    </table>
        `
    }
}
customElements.define('main-table', Table);
customElements.define('main-navbar', Navbar);
customElements.define('main-card', Card);
customElements.define('main-aside', Aside);
let text = document.getElementById("text")
let Applicants = document.getElementById("Applicants")
let Dashboard = document.getElementById("Dashboard")
let section = document.getElementById("section")
let Test = document.getElementById("Test")
let Users = document.getElementById("Users")
let modal = document.getElementById("modal")
let Account = document.getElementById("Account")
let containers = document.getElementById("containers")
let section__body = document.getElementById("section__body")
let section__applicants = document.getElementById("section__applicants")
let section__test = document.getElementById("section__test")
let section__users = document.getElementById("section__users")
let section__test__body__form = document.getElementById("section__test__body__form")
let section__test__body__form2 = document.getElementById("section__test__body__form2")
let section__account = document.getElementById("section__account")
let sectionInput1 = document.getElementById("sectionInput1")
let inputA = document.getElementById("inputA")
let inputB = document.getElementById("inputB")
let inputD = document.getElementById("inputD")
let turi = document.getElementById("turi")
let resOnaTili = JSON.parse(localStorage.getItem("OnaTili"))
let resTarx = JSON.parse(localStorage.getItem("tarx"))
let resMetematika = JSON.parse(localStorage.getItem("metematika"))
let a = document.getElementById("a")
let b = document.getElementById("b")
let d = document.getElementById("d")
let OnaTili = []
let tarx = []
let metematika = []
let test = []
let answers;
const exchange = (arg) => {
    if (arg == "test") {
        text.style.color = "#4C6FFF"
        Applicants.style.color = "#718096"
        section__body.className = "section__body d-block"
        section__applicants.className = 'd-none'
    } else if (arg == "Applicants") {
        text.style.color = "#718096"
        section__body.className = "section__body d-none"
        Applicants.style.color = "#4C6FFF"
        section__applicants.className = 'd-block section__applicants'
    } else if (arg == "Dashboard") {
        section.className = "d-block section "
        section__test.className = "d-none"
        section__users.className = "d-none"
        section__account.className = "d-none"
        Dashboard.className = "active"
        Test.className = ""
        Account.className = ""
        Users.className = ' '
    }
    else if (arg == "Test") {
        section__test.className = "d-block section__test"
        section.className = "d-none"
        section__account.className = "d-none"
        section__users.className = "d-none"
        Test.className = "active"
        Dashboard.className = ""
        Users.className = ''
        Account.className = ""
    }
    else if (arg == "Users") {
        section__users.className = "d-block"
        section.className = "d-none"
        section__test.className = "d-none"
        section__account.className = "d-none"
        Users.className = 'active'
        Test.className = ""
        Dashboard.className = ""
        Account.className = ""
    }
    else if (arg == "openModal") {
        modal.className = "d-block modal"
        containers.className = "opasity containers"

    }
    else if (arg == "oneOption") {
        modal.className = "d-none"
        containers.className = " containers"
        section__test__body__form.className = "d-block section__test__body__form"
        section__test__body__form2.className = "d-none"
        section__account.className = "d-none"
    }
    else if (arg == "severalOptions") {
        modal.className = "d-none"
        containers.className = " containers"
        section__test__body__form2.className = "d-block section__test__body__form2"
        section__test__body__form.className = "d-none"
        section__account.className = "d-none"

    } else if (arg == "Account") {
        section__account.className = "d-block section__account"
        section__users.className = "d-none"
        section__test.className = "d-none"
        section.className = "d-none"
        Account.className = "active"
        Test.className = ""
        Users.className = ''
        Dashboard.className = ""
    }
}



const p = () => {
    if (a.checked) {
        answers = a.value
    } else if (b.checked) {
        answers = b.value
    }
    else if (d.checked) {
        answers = d.value
    }
    let person = {
        name: sectionInput1.value,
        inputA: inputA.value,
        inputB: inputB.value,
        inputD: inputD.value,
        answer:answers

    }
    test.push(person)
    sectionInput1.value = ""
    inputA.value = ""
    inputB.value = ""
    inputD.value = ""
}
const addTest = () => {
    if (turi.value == "OnaTili") {
        if (localStorage.getItem("OnaTili")) {
            OnaTili = []
            JSON.parse(localStorage.getItem("OnaTili")).forEach(elem => {
                OnaTili.push(elem)
            });
            OnaTili.push(test)
            localStorage.setItem("OnaTili", JSON.stringify(OnaTili))
        } else {
            OnaTili.push(test)
            localStorage.setItem("OnaTili", JSON.stringify(OnaTili))
        }

        location.reload()
    }
    else if (turi.value == "tarx") {
        if (localStorage.getItem("tarx")) {
            tarx = []
            JSON.parse(localStorage.getItem("tarx")).forEach(elem => {
                tarx.push(elem)
            });
            tarx.push(test)
            localStorage.setItem("tarx", JSON.stringify(tarx))
        } else {
            tarx.push(test)
            localStorage.setItem("tarx", JSON.stringify(tarx))
        }

        location.reload()
    }
    else if (turi.value == "metematika") {
        if (localStorage.getItem("metematika")) {
            metematika = []
            JSON.parse(localStorage.getItem("metematika")).forEach(elem => {
                metematika.push(elem)
            });
            metematika.push(test)
            localStorage.setItem("metematika", JSON.stringify(metematika))
        } else {
            metematika.push(test)
            localStorage.setItem("metematika", JSON.stringify(metematika))
        }

        location.reload()
    }
}
if (localStorage.getItem("OnaTili")) {
    resOnaTili.forEach((elem, index) => {
        section__body.innerHTML += `
        <a href="../../index.html"  onclick="access('${index}','onatili')">
        <div class="cards">
          <div class="card">
             <img src="../../img/onatili.png" alt="">
             <h3 class="card-title">Ona-tili</h3>
             <p class="card-label">Label, Label</p>
             <button class="card-btn">Badge</button>
          </div>
          <div class="card-button">
              <h2><i class="bi bi-three-dots"></i></h2>
          </div>
        </div></a>
    `
    });
}
if (localStorage.getItem("tarx")) {
    resTarx.forEach((elem, index) => {
        section__body.innerHTML += `
            <a href="../../index.html" onclick="access(${index},'tarx')">
            <div class="cards" >
              <div class="card">
                 <img src="../../img/unnamed.webp" alt="">
                 <h3 class="card-title">Tarix</h3>
                 <p class="card-label">Label, Label</p>
                 <button class="card-btn">Badge</button>
              </div>
              <div class="card-button">
                  <h2><i class="bi bi-three-dots"></i></h2>
              </div>
            </div></a>
        `
    });
}
if (localStorage.getItem("metematika")) {
    resMetematika.forEach((elem, index) => {
        section__body.innerHTML += `
            <a href="../../index.html" onclick="access(${index},'matem')">
            <div class="cards"  >
              <div class="card">
                 <img src="../../img/matem.png" alt="">
                 <h3 class="card-title">Matematika </h3>
                 <p class="card-label">Label, Label</p>
                 <button class="card-btn">Badge</button>
              </div>
              <div class="card-button">
                  <h2><i class="bi bi-three-dots"></i></h2>
              </div>
            </div></a>
        `
    });
}





const access = (id, science) => {
    if (science == 'onatili') {
        localStorage.setItem("id", id)
        localStorage.setItem("science", 'OnaTili')
    } else if (science == "tarx") {
        localStorage.setItem("id", id)
        localStorage.setItem("science", 'tarx')
    }
    else if (science == "matem") {
        localStorage.setItem("id", id)
        localStorage.setItem("science", "metematika")
    }

}

