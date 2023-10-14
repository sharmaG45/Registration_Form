const firstName = document.getElementById("Fname");
    const middleName = document.getElementById("Mname");
    const lastName = document.getElementById("Lname");
    const email = document.getElementById("email");
    const contactNo = document.getElementById("phone");
    const password = document.getElementById("password");
    const rePassword = document.getElementById("cpassword");
    const checkBox = document.getElementById("terms");
    const btnSubmit = document.getElementById("btn");
    const btnReset = document.getElementById("btn1");
    btn.addEventListener("click", validate);
    btn1.addEventListener("click", reset);
    function reset() {
      firstName.value = "";
      Mname.value = "";
      lastName.value = "";
      email.value = "";
      contactNo.value = "";
      password.value = "";
      cpassword.value = "";
      checkBox.checked = false;
    }
    function validate() {
      let valFirstName = Fname.value;
      let valMiddleName = Mname.value;
      let valLastName = lastName.value;
      let valEmail = email.value;
      let valContactNo = phone.value;
      let valPassword = password.value;
      let valRePassword = cpassword.value;
      let valCheckBox = checkBox.checked;
      // Check if something is not filled
      if (
        valFirstName.length == 0 ||
        valMiddleName.length == 0 ||
        valLastName.length == 0 ||
        valContactNo.length == 0 ||
        valEmail.length == 0 ||
        valPassword.length == 0 ||
        valRePassword.length == 0 ||
        valCheckBox == false
      ) {
        alert("Please fill all the fields!!!");
        return;
      }
      // Checking the firstName
      if (valFirstName.length <= 15) {
        let regex = /^[a-zA-Z]+$/;
        if (regex.test(valFirstName) == false) {
          alert("FirstName should be only contains Alphabet");
          return;
        }
      } else {
        alert("FirstName length limit : 15");
        return;
      }
      // Checking the Middle
      if (valMiddleName.length <= 15) {
        let regex = /^[a-zA-Z]+$/;
        if (regex.test(valMiddleName) == false) {
          alert("MiddleName should be only contains Alphabet");
          return;
        }
      } else {
        alert("MiddleName length limit : 15");
        return;
      }
      // Checking the lastName
      if (valLastName.length <= 15) {
        let regex = /^[a-zA-Z]+$/;
        if (regex.test(valLastName) == false) {
          alert("LastName should be only contains Alphabet");
          return;
        }
      } else {
        alert("LastName length limit : 15");
        return;
      }
      // Checking the contact
      if (valContactNo.length != 10 || valContactNo.charAt(0) == "0") {
        alert("Contact no. length should be 10");
        return;
      } else {
        let regex = /^[0-9]+$/;
        if (regex.test(valContactNo) == false) {
          alert("Contact no. should be numeric");
          return;
        }
      }
      // Checking the password
      if (valPassword != valRePassword) {
        alert("Password not matching");
        return;
      }
      alert("Hello " + valFirstName + "!. Your account Successfully created.");
      btnReset.click();
    }