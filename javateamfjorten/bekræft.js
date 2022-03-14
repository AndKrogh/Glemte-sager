
function myFunction() {
  var txt;
  if (confirm("Bekræft reservation med nemid")) {
    txt = "Bekræftigelse godkendt! Du kan nu hente din glemte genstand i informationen";
  } else {
    txt = "Bekræftigelse annuleret";
  }
  document.getElementById("demo").innerHTML = txt;
}
