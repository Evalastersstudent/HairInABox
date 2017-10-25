function main() {
      jQuery(document).ready(function() {
          jQuery(".external-link").attr("target", "_blank");
      });
}

window.onload = function() {
      main();
}
