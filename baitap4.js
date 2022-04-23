var addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  var li = document.createElement("li");
  var p = document.createElement("p");
  var a = document.createElement("a");

  var inputValueName = document.getElementById("name").value;
  var inputValuePhoneNumber = document.getElementById("phoneNumber").value;
  console.log(inputValueName);
  console.log(inputValuePhoneNumber);
  var textName = document.createTextNode(inputValueName);
  var textPhoneNumber = document.createTextNode(inputValuePhoneNumber);
  // Li
  li.appendChild(textName);
  if (inputValueName === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  a.appendChild(textName);
  if (inputValueName === "") {
    alert("You must write something!");
  } else {
    li.appendChild(a);
  }
  //Phone Number
  p.appendChild(textPhoneNumber);
  if (inputValuePhoneNumber === "") {
    alert("You must write something!");
  } else {
    li.appendChild(p);
  }
});

//Search
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  console.log(filter);
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
