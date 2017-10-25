function main() {
      jQuery(document).ready(function() {
          jQuery(".external-link").attr("target", "_blank");
      });

      $('.grid').isotope({
        layoutMode: 'cellsByRow',
        itemSelector: '.grid-item',
        cellsByRow: {
          columnWidth: 220,
          rowHeight: 220
        }
      });
}

window.onload = function() {
      main();
}
