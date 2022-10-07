window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}



setTimeout(() => {
  const box = document.getElementById('loaddingbox');

  
  box.style.display = 'none';

 
}, 4000); // 👈️ t






  $(document).ready(function () {
    $('#nav-icon3').click(function () {
      $(this).toggleClass('open');
    });
  });

 