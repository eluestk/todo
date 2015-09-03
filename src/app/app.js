'use strict';

$(function() {
  
  const $todolist   = $('.js-todolist');
  const $inputText  = $('.js-text');
  const $numListed  = $('.js-num-listed');
  const $numChecked = $('.js-num-checked');
  
  // addボタンクリック
	$('.js-add').click(() => {
    if($inputText.val()) {
      $todolist.append('<li class="js-list"><label><input type="checkbox" class="js-checkbox">' + $inputText.val() + '</input><label></li>');
      $inputText.val('');
      updateChecks();
    } else {
      console.log('未入力です');
    }
  });
  
  // checkboxクリック
  $todolist.click((event) => {
    if ($(event.target).prop('checked')) {
      $(event.target).parent().css('text-decoration', 'line-through');
    } else {
      $(event.target).parent().css('text-decoration', 'none');
    }
    updateChecks();
  });
  
  // archiveボタンクリック
  $('.js-archive').click(() => {
    $('.js-checkbox:checked').parents('.js-list').remove();
    updateChecks();
  });
  
  function updateChecks() {
    $numListed.text($('.js-todolist > li').length);
    $numChecked.text($('.js-checkbox:not(:checked)').length);
  }
});
