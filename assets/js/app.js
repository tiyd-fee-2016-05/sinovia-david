$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser)
      .fail(showError);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }
  // function onLoadSubmit() {
  //     document.user-form.submit();
  //   }

  function showError(req, status, err) {
    err = err || {};
    err.message = err.message || status;
    console.log(err);
    show('gh-error-template', { message: err });
  }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.user-info').html(fn(model));
  }

});

$(".overviewtab").on('click',function() {
    $(".contributions").css('display', 'block');
    $(".poprepos").css('display', 'none');
    console.log("click works");
});
