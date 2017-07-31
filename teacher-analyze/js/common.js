 function getParam(name, url) {
     var r = new RegExp('(\\?|#|&)' + name + '=(.*?)(#|&|$)');
     var m = (url || location.href).match(r);
     return (m ? m[2] : '');
 }

 function formateNum(num) {
     return parseFloat(num).toFixed(2);
 }

 String.prototype.jstpl_format = function (ns) {
     function fn(w, g) {
         if (g in ns) {
             return ns[g];
         } else {
             return '';
         }
     };
     return this.replace(/%\(([A-Za-z0-9_|.]+)\)/g, fn);
 };