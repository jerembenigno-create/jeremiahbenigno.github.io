(()=>{
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  const menu=document.querySelector('.menu-toggle'); const nav=document.getElementById('site-nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const opened=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!opened));nav.classList.toggle('is-open',!opened)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}})}
  const filters=document.querySelectorAll('.filter-chip'); const projects=document.querySelectorAll('.project-card');
  filters.forEach(chip=>chip.addEventListener('click',()=>{const filter=chip.dataset.filter;filters.forEach(c=>{c.classList.toggle('is-active',c===chip);c.setAttribute('aria-pressed',String(c===chip))});projects.forEach(card=>card.hidden=filter!=='all'&&!card.dataset.category.split(' ').includes(filter))}));
  // Optional original certificate scans: replace the preview when a matching local JPG is available.
  // Until then, clearly labeled portfolio artwork remains visible and the preview button stays disabled.
  document.querySelectorAll('[data-certificate-card] img[data-original-base]').forEach(img=>{
    const base=img.dataset.originalBase;
    const extensions=['.png','.jpg','.jpeg','.webp'];
    const card=img.closest('[data-certificate-card]');
    function loadCandidate(i){
      if(i>=extensions.length)return;
      const candidate=new Image();
      candidate.onload=()=>{
        img.src=candidate.src;
        img.alt=img.alt.replace('Illustrative portfolio cover for ', 'Certificate: ');
        card?.classList.remove('cert-card-pending');
        card?.querySelector('.cert-asset-note')?.remove();
        const view=card?.querySelector('.cert-view');
        if(view){view.dataset.src=candidate.src;view.hidden=false;}
      };
      candidate.onerror=()=>loadCandidate(i+1);
      candidate.src=base+extensions[i];
    }
    loadCandidate(0);
  });
  const dialog=document.querySelector('.certificate-dialog');
  document.querySelectorAll('.cert-view').forEach(btn=>btn.addEventListener('click',()=>{if(!dialog)return;const img=dialog.querySelector('img');img.src=btn.dataset.src;img.alt=btn.dataset.alt||'Certificate image';dialog.querySelector('.dialog-title').textContent=btn.dataset.title||'Certificate';dialog.showModal()}));
  if(dialog){dialog.querySelector('.dialog-close')?.addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()})}
})();
