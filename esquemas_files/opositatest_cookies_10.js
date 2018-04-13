function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
      "palette": {
        "popup": {
          "background": "#efefef",
          "text": "#404040"
        },
        "button": {
          "background": "#8ec760",
          "text": "#ffffff"
        }
      },
      "theme": "edgeless",
      "content": {
        "message": "Usamos cookies propias y de terceros para mejorar nuestros servicios y su experiencia. Si continúa navegando está aceptando nuestra ",
        "dismiss": "Entendido",
        "link": "Política de cookies",
        "href": "http://ec.europa.eu/justice/data-protection/article-29/documentation/opinion-recommendation/files/2013/wp208_en.pdf"
      }
    })
    setTimeout(function(){ createCookie("cookieconsent_status", "dismiss", 360); }, 8000);

});
