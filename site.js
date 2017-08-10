$(document).ready(function () {
  $('#button').click(function() {
    var addTo = $('input[name=checkListItem]').val();
      //display input to user
    $('.list').append('<div class="item"><ul><li>' +addTo+ '</ul></li></div>');

    //clear form after each input
    $('#myForm').each(function() {
      this.reset();
    });
  });
  //allow user to remove items if clicked
  $(document).on('click','.item', function() {
    $(this).remove();
  });
});