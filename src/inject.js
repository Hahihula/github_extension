// this is the code which will be injected into a given page...

(function() {
  // console.log('extension loaded')
  var forkedFrom = document.getElementsByClassName('head-ref')[0]
  forkedFrom.onclick = function(){
    window.open(window.location.origin +'/' + forkedFrom.title.split(':')[0]+'/tree/'+forkedFrom.title.split(':')[1],'self')
  }
  forkedFrom.style.cursor = 'pointer';
  forkedFrom.classList.add('btn');
  forkedFrom.classList.add('btn-sm');
  var copyButton = document.createElement('clipboard-copy');
  copyButton.setAttribute('value',forkedFrom.title);
  copyButton.className = 'btn btn-outline btn-sm'
  copyButton.setAttribute('aria-label','Copy the ropository and branch');
  copyButton.setAttribute('role','button');
  copyButton.setAttribute('style','line-height:13px;padding:3px;');
  copyButton.innerHTML = '<svg class="octicon octicon-clippy" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z"></path></svg>';
  forkedFrom.parentNode.insertBefore(copyButton, forkedFrom.nextSibling);
})();