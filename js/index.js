//나중에 Function 으로 정리
var h = $(document).innerHeight();
var IssueNum = + 1;  // 나중에 처리
var date = new Date();
var year  = date.getFullYear();
var month = date.getMonth() + 1;
var day   = date.getDate();
if (("" + month).length == 1) { month = "0" + month; }
if (("" + day).length   == 1) { day   = "0" + day;   }
var Today = "" + year + month + day;


//addEventlstner 로 나중에 변경해주자
$('.js-open-issue').click(function(){
  var activeClass = "js_input-active";
  var mask = document.createElement("div");
  document.body.appendChild(mask);
  mask.classList.add(activeClass);
  $('.input_issues').show();
});

$('.js-submit-issues').click(function(){
  //createElement 아니면 JSON으로 처리할수 있도록 변경
  var IssueName = $('#issue').val();
  var IssueType = $('#type option:selected').val();
  var AddIssue = $(".TableNum0").html('<li><dl><dt class='+IssueType+'>'+IssueName+'-'+IssueNum+'<dd>Lorem upsum coloef condesxi downlo</dd><dd class="date">'+Today+'</dd></dt></dl></li>');
  $('.input_issues').hide();
  $('.js_input-active').hide();

});

function SortTable() {
  $('.cards').each(function(i) {
    $(".TableNum" + i).sortable({
      connectWith: ".cards",
      opacity: 0.8,
      update: function() {
        CountingIssues();
      }
    });
    $(".TableNum" + i).disableSelection();
  });
}

function CountingIssues(){
  $('.cards').each(function() {
    var CheckNum =  $(this).find('li').size();
    $(this).prev('h3').find('span').html(CheckNum+"&nbsp;");
  });
}

function SetCard() {
  $('.cards').each(function(i) {
    $(this).addClass('TableNum' + i);
    $(this).find('li').addClass("ui-state-default");
    $(this).height(h);
  });
}
CountingIssues();
SetCard();
SortTable();
