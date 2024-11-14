import{i as a,S as l}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function u(s){const n=`https://pixabay.com/api/?key=47065428-a0220427b8b9e139f136fc7ca&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(e=>e.json()).catch(e=>console.error("Error:",e))}function d(s){const o=document.querySelector(".gallery");if(o.innerHTML="",s.length===0){f("Sorry, there are no images matching your search query. Please try again!");return}s.forEach(r=>{const n=document.createElement("div");n.classList.add("photo-card"),n.innerHTML=`
      <a href="${r.largeImageURL}" class="gallery-item">
        <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes:</b> ${r.likes}
        </p>
        <p class="info-item">
          <b>Views:</b> ${r.views}
        </p>
        <p class="info-item">
          <b>Comments:</b> ${r.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b> ${r.downloads}
        </p>
      </div>
    `,o.appendChild(n)})}function f(s){a.error({title:"Error",message:s,position:"topRight"})}const p=document.querySelector("#search-form"),m=document.querySelector("#search-input"),c=document.querySelector(".loader");p.addEventListener("submit",s=>{s.preventDefault();const o=m.value.trim();if(!o){a.error({title:"Error",message:"Please enter a search term."});return}c.style.display="block",u(o).then(r=>{d(r.hits),c.style.display="none",new l(".gallery a").refresh()}).catch(r=>{c.style.display="none",console.error("Error fetching data: ",r)})});
//# sourceMappingURL=index.js.map
