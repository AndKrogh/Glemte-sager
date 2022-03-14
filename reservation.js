
function myFunction() {
  let txt;
  if (confirm("Bekræft reservation med nemid")) {
    txt = "Bekræftigelse godkendt! Du kan nu hente din glemte genstand i informationen";
  } else {
    txt = "Bekræftigelse annulleret";
  }
  document.getElementById("demo").innerHTML = txt;
}
