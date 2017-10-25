function main() {
      jQuery(document).ready(function() {
          jQuery(".external-link").attr("target", "_blank");
      });
      var elem = document.querySelector('.grid');
      var iso = new Isotope( elem, {
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

      // element argument can be a selector string
      //   for an individual element
      var iso = new Isotope( '.grid', {
        // options
      });
}

window.onload = function() {
      main();
}
