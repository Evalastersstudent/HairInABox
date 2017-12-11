function main() {
      $(document).ready(function() {
            $('#navigatie').localScroll({speed: 500});
      });

      'use strict';
      (function() {
        var body = document.body;
        var menu = document.getElementsByClassName('menu')[0];
        var navkleinscherm = document.getElementsByClassName('navkleinscherm')[0];

        menu.addEventListener('click', function toggleClasses() {
          [body, menu, navkleinscherm].forEach(function (el) {
            el.classList.toggle('open');
          });
        }, false);
      })();
}

window.onload = function() {
      main();
}
