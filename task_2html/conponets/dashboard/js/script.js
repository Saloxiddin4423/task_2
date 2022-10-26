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
                <h3  onclick="exchange('Account')"><i   class="bi bi-person-badge-fill"></i> Account</h3>
                <h3 onclick="exchange('Logout')" ><i class="bi bi-box-arrow-left"></i> Logout</h3>
            </div>
        </div>
    </aside>
        `
    }
}
class Card extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <div class="cards">
    <div class="card">
        <img src="../../img/card.png" alt="">
        <h3 class="card-title">Headline label </h3>
        <p class="card-label">Label, Label</p>
        <button class="card-btn">Badge</button>
    </div>
    <div class="card-button">
        <h2><i class="bi bi-three-dots"></i></h2>
    </div>
</div>`
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
let section__body = document.getElementById("section__body")
let section__applicants = document.getElementById("section__applicants")
let section = document.getElementById("section")
let Test = document.getElementById("Test")
let Dashboard = document.getElementById("Dashboard")
let Users = document.getElementById("Users")
let section__test = document.getElementById("section__test")
let section__users = document.getElementById("section__users")
let modal = document.getElementById("modal")
let containers = document.getElementById("containers")
let section__test__body__form = document.getElementById("section__test__body__form")
let section__test__body__form2 = document.getElementById("section__test__body__form2")
const exchange = (arg) => {
    if (arg == "test") {
        text.style.color = "#4C6FFF"
        Applicants.style.color = "#718096"
        section__body.style.display = "block"
        section__applicants.style.display = 'none'
    } else if (arg == "Applicants") {
        text.style.color = "#718096"
        Applicants.style.color = "#4C6FFF"
        section__body.style.display = "none"
        section__applicants.style.display = 'block'
    } else if (arg == "Dashboard") {
        section.style.display = "block"
        section__test.style.display = "none"
        section__users.style.display = "none"
        Test.className = ""
        Dashboard.className = "active"
        Users.className = ' '
    }
    else if (arg == "Test") {
        section.style.display = "none"
        section__test.style.display = "block"
        section__users.style.display = "none"
        Test.className = "active"
        Dashboard.className = ""
        Users.className = ' '

    }
    else if (arg == "Users") {
        section.style.display = "none"
        section__test.style.display = "none"
        section__users.style.display = "block"
        Test.className = ""
        Dashboard.className = ""
        Users.className = 'active'
    }
    else if (arg == "openModal") {
       modal.className = "d-block modal"
       containers.className = "opasity containers"

    }
    else if (arg == "oneOption") {
        modal.className = "d-none"
        containers.className = " containers"
        section__test__body__form.className="d-block section__test__body__form"
        section__test__body__form2.className="d-none"
     }
     else if (arg == "severalOptions") {
        modal.className = "d-none"
        containers.className = " containers"
        section__test__body__form2.className="d-block section__test__body__form2"
        section__test__body__form.className="d-none"

     }
      
} 
