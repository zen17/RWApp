import Rx from "rxjs/Rx";
export class Login {
  constructor(email, pass) {
    this.email = email;
    this.pass = pass;
  }
  logOut() {
    sessionStorage.clear();
    window.location = "http://localhost:8080/public/login.html";
  }
  loginCheck() {
    let alerthtml = document.getElementById("alerthtml");
    if (alerthtml != undefined && alerthtml != null) {
      if (sessionStorage.getItem("email") != null) {
        alerthtml.innerHTML = "Welcome " + sessionStorage.getItem("name");
      } else {
        window.location = "http://localhost:8080/public/login.html";
      }
    }
  }
  get(email) {
    return fetch("http://localhost:3000/users?email=" + email);
  }
}


let btnsub = document.getElementById("btnsub");
if (btnsub != null || btnsub != undefined) {
  let btnStream$ = Rx.Observable.fromEvent(btnsub, "click");
  let enterStream$ = Rx.Observable.fromEvent(document, "keyup").filter(
    data => data.keyCode === 13
  );
  let inStream = Rx.Observable.merge(btnStream$, enterStream$);
  inStream.subscribe(click => {
    let email = document.getElementById("emailInput");
    let pass = document.getElementById("passwordInput");
    let obj = new Login(email.value, pass.value);
    obj
      .get(email.value)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        if (
          data[0].email == email.value &&
          data[0].password == pass.value &&
          data[0].email !== null &&
          data[0].email != undefined
        ) {
          sessionStorage.setItem("email", data[0].email);
          sessionStorage.setItem("id", data[0].id);
          sessionStorage.setItem("name", data[0].name);
          window.location.href = "http://localhost:8080/public";
        } else {
          alert("neispravan mejl ili lozinka");
        }
      })
      .catch(err => {
        console.log(err);
      });
  });
}
