/* if (document.getElementById("reservbutton").clicked == false) {
  document.getElementById("buttonprint").style.visibility = "hidden";
}
else {
  document.getElementById("buttonprint").style.visibility = "visible";
} */
function myFunction() {
  var firstn = document.getElementById("firstn").value;
  var lastn = document.getElementById("lastn").value;
  var date = document.getElementById("date").value;
  var aduattend = document.getElementById("aduattend").value;
  var childattend = document.getElementById("childattend").value;
  var daysattend = document.getElementById("numdays").value;

  var activity = [document.getElementById("a1"), document.getElementById("a2"),
  document.getElementById("a3"), document.getElementById("a4"), document.getElementById("a5")];
  var act = [];
  var i;
  for (i = 0; i < activity.length; i++) {
    if (activity[i].checked) {
      act += activity[i].value + " ";
    }
  }

  var disabeled = [document.getElementById("disyes"), document.getElementById("disno")];
  var dis = [];
  var i;
  for (i = 0; i < disabeled.length; i++) {
    if (disabeled[i].checked) {
      dis += disabeled[i].value + " ";
    }
  }
  var numdisabeled = document.getElementById("numdisabeled").value;

  var allerg = [document.getElementById("allergiesyes"), document.getElementById("allergiesno")];
  var allergies = [];
  var i;
  for (i = 0; i < allerg.length; i++) {
    if (allerg[i].checked) {
      allergies += allerg[i].value + " ";
    }
  }
  var allergiesexplain = document.getElementById("allergiesexplain").value;

  var reserv = {firstname:firstn, lastname:lastn, date:date, adultattending:aduattend,
  childrenattending:childattend, daysattending:daysattend, activities:act, disabeled:dis,
  numdisabeled:numdisabeled, allergies:allergies, allergiesexplain:allergiesexplain};
  document.getElementById("greeting").innerHTML = "firstname:" + reserv["firstname"] + " lastname:" + reserv["lastname"] +
  " date attending:" + reserv["date"] + " number of adults attending:" + reserv["adultattending"]
  +  " number of children attending:" + reserv["childrenattending"] + " number of days attending:" + reserv["daysattending"] +
  " activities attending:" + reserv["activities"] + " handicapped persons:" + reserv["disabeled"] +
  " number of handicapped persons:" + reserv["numdisabeled"] + " people with allergies:" + reserv["allergies"] +
  " Explaination of allergies:" + reserv["allergiesexplain"];
}
function Print() {
    document.getElementById("greeting").innerHTML.print();
}
