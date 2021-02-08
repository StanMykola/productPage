$(document).ready(function(){
  $('.slick-wrapper').slick({
    prevArrow: "<div class='slick-prev'><i class='fas fa-chevron-left'></i></div>",
    nextArrow: "<div class='slick-next'><i class='fas fa-chevron-right'></i></div>",
  });
});

$(document).ready(function() {
    $('.header-container__burger').click(function(event) {
        $('.header-container__burger, .header-container__menu').toggleClass('active');
    });
});



function openTab(evt, tabName){
    let tabcontent, tabtitle;
    
    tabcontent = document.getElementsByClassName("tabs-content__item");
    for(let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tabtitle = document.getElementsByClassName("tabs-title__item");
    for(let j = 0; j < tabtitle.length; j++) {
        tabtitle[j].className = tabtitle[j].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.className += " active";

    document.getElementById(tabName).scrollIntoView();

};

var tabs = document.querySelectorAll('.js-tab');

tabs.forEach(function(tab){
    var id = tab.dataset.contentId;
    tab.addEventListener('click', openTab.bind(null,tab,id));
  });