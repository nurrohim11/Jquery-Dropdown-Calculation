$(function () {
  $("#attendees_wrapper select").each(function () {
    $(this).change(function () {
      calculateSum();
    });
  });
});
function calculateSum() {
  var adults = 0;
  var children = 0;
  var campers = 0;
  var sel_val = 0;
  var sign = '$';
  $("select.registration_type").each(function () {
    sel_val = this.value;
    switch (sel_val) {
      case "1":
        adults = 25*10;
        children = 100;
        campers = 50;
        sel_val = 10;
        break;
      case "2":
        adults = 25*100;
        children = 25*1000;
        campers = 25*50;
        sel_val = 25*10;
        break;
      case "3":
        campers += 15;
        break;
      case "4":
        adults = 0;
        children = 0;
        campers = 25*50;
        sel_val = 210;
        break;
      default:
        sel_val += 0;
    }
  });
  // $("#adults").text(sign + adults);
  $("#adus").val(sign + adults);
  $("#children").val(sign + children);
  $("#campers").val(sign + campers);
  $("#sel_val").val(sign + sel_val);
  var total = adults + children + campers + sel_val;
  $("#cost").text(sign + total);
}