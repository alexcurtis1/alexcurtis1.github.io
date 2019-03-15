/* jshint ignore:start */

//Swap Logo on hover
$( ".logo" ).mouseover(function() {
  $( ".logo" ).attr("src", "img/logo-white.png" );
});

$( ".logo" ).mouseout(function() {
  if (window.location.hash != '#home') {
    $( ".logo" ).attr( "src", "img/logo.png" );
  }
});

//SVG Arrows
var totalAnchors = ['#' + document.anchors[0].name, '#' + document.anchors[1].name, '#' + document.anchors[2].name, '#' + document.anchors[3].name];

$(function() {
  setTimeout('topArrow()');
  setTimeout('bottomArrow()')
});

function topArrow() {
  $('#topArrow').animate({
    marginTop: '-=15px'
  }, 800).animate({
    marginTop: '+=15px'
  }, 800);
  setTimeout('topArrow()', 1600);
}

function bottomArrow() {
  $('#bottomArrow').animate({
    marginBottom: '-=15px'
  }, 800).animate({
    marginBottom: '+=15px'
  }, 800);
  setTimeout('bottomArrow()', 1600);
}

function getAnchorTargets(currentAnchor, isLink) {
  var targetAnchor;
  switch(currentAnchor) {
    case totalAnchors[0]:
    if (isLink === 'true') {
      targetAnchor = "#home";
    } else {
      targetAnchor = "#about";
    }
    $('.getAnchor').show();
    break;
    case totalAnchors[1]:
    if (isLink === 'true') {
      targetAnchor = "#about";
    } else {
      targetAnchor = "#projects";
    }
    $('.getAnchor').show();
    break;
    case totalAnchors[2]:
    targetAnchor = "#contact";
    if (isLink === 'true') {
      $('.getAnchor').show();
    } else {
      $('.getAnchor').hide();
    }
    break;
    case totalAnchors[3]:
    targetAnchor = "#contact";
    $('.getAnchor').hide();
    break;
  }
  $('.getAnchor').attr('href', targetAnchor);
}

$(".nav-link").click(function(event) {
  var split = event.currentTarget.href.split("#");
  getAnchorTargets("#" + split[1], 'true');
  setActiveClass("#" + split[1], 'true');
});

$(".aboutButton").click(function(event) {
  var split = event.currentTarget.href.split("#");
  getAnchorTargets("#" + split[1], 'true');
  setActiveClass("#" + split[1], 'true');
});

$(".getAnchor").click(function(event) {
  var split = event.currentTarget.href.split("#");
  var currentHref = "#" + split[1];
  getAnchorTargets("#" + split[1], 'false');
  setActiveClass("#" + split[1], 'false');
});

<!-- Contact Form -->
var currentState = false;

function validate(reg, name) //doesnt seem to register empty boxes as invalid(except on email).
{ // also not sure if the name regex works properly.
  var test = reg.test($(name).val());
  if (test)
  {
    $(name).removeClass('invalid');
    $(name).addClass('valid');
  }
  if ($(name).val() === "")
  {
    $(name).removeClass('valid');
    $(name).addClass('invalid');
  }
  if (!test)
  {
    $(name).removeClass('valid');
    $(name).addClass('invalid');
  }
}

function checkIfValid() {
  //Check if everythings been validated
  if ($('.formName').hasClass('valid') && $('.formEmail').hasClass('valid') && $('.formMessage').hasClass('valid')) {
    currentState = true;
    $('.contactSubmit').removeAttr('disabled');
  } else {
    currentState = false;
    $('.contactSubmit').prop('disabled', 'true');
  }
}

function setActiveClass(href, isLink)
{
  $( ".logo" ).attr( "src", "img/logo.png" );
  $('.activeNav').removeClass('activeNav');
  switch(href) {
    case '#projects':
    if (isLink === 'true')
    {
      $('.nav-link').eq(1).addClass('activeNav');
    } else {
      $('.nav-link').eq(4).addClass('activeNav');
    }
    break;
    case '#home':
    if (isLink === 'true') {
      $( ".logo" ).attr( "src", "img/logo-white.png" );
    } else {
      $('.nav-link').eq(3).addClass('activeNav');
    }
    break;
    case '#about':
    if (isLink === 'true')
    {
      $('.nav-link').eq(3).addClass('activeNav');
    } else {
      $('.nav-link').eq(1).addClass('activeNav');
    }
    break;
    case '#contact':
    $('.nav-link').eq(4).addClass('activeNav');
    break;
  }
}

$('.formName').on('input', function() {
  validate(/[a-zA-Z]*/, '.formName')
  checkIfValid();
});

$('.formEmail').on('input', function() {
  validate(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/, '.formEmail')
  checkIfValid();
});

$('.formMessage').on('input', function() {
  validate(/[a-zA-Z0-9]*/, '.formMessage')
  checkIfValid();
});
