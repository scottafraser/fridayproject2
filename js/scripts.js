function hideAll() {
  $("#cssResult").hide();
  $("#cSharpresult").hide();
  $("#rubyResult").hide();
}

$(".btn btn-primary").click(function(){
});

$(document).ready(function() {
  $("form#buttons").submit(function(event){
      event.preventDefault();
    var answer1 = parseInt($("input:radio[name=q1]:checked").val());
    var answer2 = parseInt($("input:radio[name=q2]:checked").val());
    var answer3 = parseInt($("input:radio[name=q3]:checked").val());
    var answer4 = parseInt($("input:radio[name=q4]:checked").val());
    var answer5 = parseInt($("input:radio[name=q5]:checked").val());
    var result = (answer1+answer2+answer3+answer4+answer5)


    if (result <= 5) {
      console.log("ruby");
      hideAll();
      $('#rubyResult').show();
      $('#resultModal').modal('show')
    } else if (result > 5 && result <= 10) {
      console.log("css");
      hideAll();
      $('#resultModal').modal('show')
      $('#cssResult').show();
    } else if (result > 10 && result <= 15) {
      console.log("c#");
      hideAll();
      $('#resultModal').modal('show')
      $('#cSharpresult').show();
    } else {
      alert("you missed one!");
    }

  });
});
