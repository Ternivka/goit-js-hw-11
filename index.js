import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d(s){const r=`https://pixabay.com/api/?key=47065428-a0220427b8b9e139f136fc7ca&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(r).then(e=>e.json()).catch(e=>console.error("Error:",e))}function f(s){const o=document.querySelector(".gallery");if(o.innerHTML="",s.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}const n=s.map(r=>`<div class="photo-card">
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${r.likes}</p>
        <p class="info-item"><b>Views:</b> ${r.views}</p>
        <p class="info-item"><b>Comments:</b> ${r.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${r.downloads}</p>
      </div>
    </div>`).join("");o.insertAdjacentHTML("beforeend",n)}function l(s){c.error({title:"Error",message:s,position:"topRight"})}const p=document.querySelector("#search-form"),y=document.querySelector("#search-input"),a=document.querySelector(".loader");p.addEventListener("submit",s=>{s.preventDefault();const o=y.value.trim();if(!o){c.error({title:"Error",message:"Please enter a search term."});return}a.style.display="block",d(o).then(n=>{f(n.hits),a.style.display="none",new u(".gallery a").refresh()}).catch(n=>{a.style.display="none",l("An error occurred while fetching data. Please try again later."),console.error("Error fetching data: ",n)})});
//# sourceMappingURL=index.js.map
