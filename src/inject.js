// this is the code which will be injected into a given page...

(function() {
  console.log('extension loaded')
  var forkedFrom = document.getElementsByClassName('head-ref')[0]
  forkedFrom.onclick = function(){
    window.open(window.location.origin +'/' + forkedFrom.title.split(':')[0]+'/tree/'+forkedFrom.title.split(':')[1],'self')
  }
  forkedFrom.style.cursor = 'pointer';
  forkedFrom.classList.add('btn')
  forkedFrom.classList.add('btn-sm')
})();