import Rx from "rxjs/Rx";
export class RegisterManager {
  constructor() {}
  register(n, e, p) {
    let obj = JSON.stringify({ name: n, email: e, password: p });
    if (check(n, e, p)) {
      fetch("http://localhost:3000/users?email=" + e)
        .then(res => res.json())
        .then(data => {
          if (data.length > 0) {
            alert("korisnik vec postoji");
          } else {
            fetch("http://localhost:3000/users", {
              method: "POST",
              headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
              },
              body: obj
            });
            alert("Uspesno ste napravili nalog ulogujte se ");
            window.location.href = "http://localhost:8080/public/login.html";
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      alert("Popunite sva polja");
    }
  }
}

let btnReg = document.getElementById("btnreg");
if (btnReg != null || btnReg != undefined) {
  let btnRegStream$ = Rx.Observable.fromEvent(btnReg, "click");
  let enterStream$ = Rx.Observable.fromEvent(document, "keyup").filter(
    data => data.keyCode === 13
  );
  let inStream$ = Rx.Observable.merge(btnRegStream$, enterStream$).subscribe(
    data => {
      let email = document.getElementById("emailReg");
      let password = document.getElementById("passwordReg");
      let name = document.getElementById("nameReg");
      let registerManager = new RegisterManager();
      registerManager.register(name.value, email.value, password.value);
    }
  );
}

function check(name, email, password) {
  if (name != "" && email != "" && password != "") return true;
  else return false;
}
