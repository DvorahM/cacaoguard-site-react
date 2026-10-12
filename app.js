(function(){
  function toast(m){var t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.setAttribute('role','status');document.body.appendChild(t);}
    t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(function(){t.classList.remove('show')},2200);}
  window.toast=toast;
  function refresh(){
    var sels=document.querySelectorAll('select[data-key]'),items=document.querySelectorAll('.fi');
    items.forEach(function(it){var ok=true;sels.forEach(function(s){if(s.value!=='all'&&it.dataset[s.dataset.key]!==s.value)ok=false;});it.hidden=!ok;});
    var n=document.getElementById('active-count');if(n)n.textContent=document.querySelectorAll('.fi:not([data-st="resolved"])').length;
  }
  document.addEventListener('click',function(e){
    var t=e.target.closest('button[data-toast],a[data-toast]');if(t){e.preventDefault();toast(t.dataset.toast);}
    var r=e.target.closest('.resolve');if(r){var c=r.closest('.fi');c.dataset.st='resolved';c.classList.add('done');
      r.outerHTML='<span class="resolved-tag">&#10003; Resolved</span>';refresh();}
  });
  document.addEventListener('submit',function(e){var f=e.target;if(f.dataset&&f.dataset.toast){e.preventDefault();toast(f.dataset.toast);}});
  document.querySelectorAll('select[data-key]').forEach(function(s){s.addEventListener('change',refresh)});
  document.querySelectorAll('input[type=range][data-out]').forEach(function(r){var o=document.getElementById(r.dataset.out);function u(){o.textContent=r.value+'%'}r.addEventListener('input',u);u();});
  refresh();
})();
