document.addEventListener("DOMContentLoaded", () => {

  const worker =
  {
    "Personal Information":{
      "Full Name": "First Worker",
      "Birthday":"30-09-1997",
      "Mobile":"069876543",
      "Home phone":"023139080",
      "Address":"Balti,str.Decebal 1",
      "gender":"male",
      "IDNP":"1231124124",
      "Place of Birth":"Balti",
      "mail":"test@gmail.com"
    },
    "Work Information": {
      "function":"developer",
      "Department":"IT",
      "Start Wokring Date":"20.08.2018",
      "Work Expreience":3,
      "Salary":10000,
      "Graphic": {
        "work":"8:00-17:00",
        "lunch":"12:00-13:00"
      }
    }  
  };

  let json = JSON.stringify(worker);
  document.getElementById("JsonContent").innerHTML += json;





});