$(document).ready(function() {

$('.overviewtab').on('click', function() {
    $('.poprepos').css('display', 'block');
    $('.contributions').css('display', 'none');
    console.log("Click works again!");
});

$('.repotab').on('click', function() {
    $('.contributions').css('display', 'block');
    $('.poprepos').css('display', 'none');
    console.log("Second Click works");
});
});

$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin)
      .done(showUser, console.log ("user info pulled"))
      .fail(showError);
  });

  function showUser(user) {
    show('gh-user-template', user);
  }
  // function onLoadSubmit() {
  //     document.user-form.submit();
  //   }

  function show(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.user-info').html(fn(model));
  }

});
//
// REPO ATTEMPT!!

$(function () {

  $('.user-form').on('submit', function (e) {
    e.preventDefault();

    var ghLogin = $('input[name="gh-login"]').val();
    $.getJSON('https://api.github.com/users/' + ghLogin + "/repos")
      .done(showRepos, console.log (ghLogin + " repos pulled"))
      ;
  });

  function showRepos(repo) {
    show2('gh-repo-template', repo);
    console.log(repo [0])
  }
  // function onLoadSubmit() {
  //     document.user-form.submit();
  //   }

  function show2(template, model) {
    var fn = _.template($('#' + template).html(), { variable: 'm' });
    $('.repo-info').html(fn(model));
  }

});
