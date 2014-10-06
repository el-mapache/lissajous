(function(root) {
  root.LJCanvas = {};

  function Canvas(el) {
    this.canvas = document.querySelector(el);
    this.context = this.canvas.context;
  }
  
}(window))
;
