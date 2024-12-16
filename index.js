import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function f(o){const i="47671198-bf70cd038d5f77d4168ecf4e9",s=new URLSearchParams({key:i,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText||"Something went wrong");return t.json()}).then(t=>{if(!t.hits.length)throw new Error("Sorry, there are no images matching your search query. Please, try again");return t})}function h(o){return o.map(({webformatURL:i,largeImageURL:s,tags:t,likes:e,views:r,comments:n,downloads:u})=>`
                <a href="${s}" class="list-item">
                    <div class="describe">
                        <img src="${i}" alt="${t}" class="list-image">
                    </div>
                    <ul class="categories">
                        <li class="categories-item">
                            <h2 class="link-text">Likes</h2>
                            <p class="number">${e}</p>
                        </li>
                        <li class="categories-item">
                            <h2 class="link-text">Views</h2>
                            <p class="number">${r}</p>
                        </li>
                        <li class="categories-item">
                            <h2 class="link-text">Comments</h2>
                            <p class="number">${n}</p>
                        </li>
                        <li class="categories-item">
                            <h2 class="link-text">Downloads</h2>
                            <p class="number">${u}</p>
                        </li>
                    </ul>
                </a>
            </li>
        `).join("")}const p=document.querySelector(".form"),d=document.querySelector('input[name="search"]'),c=document.querySelector(".list"),l=document.querySelector(".loader");p.addEventListener("submit",g);function g(o){o.preventDefault();const i=d.value.trim();if(!i){a.warning({position:"topRight",message:"Please enter a search item."});return}c.innerHTML="",l.style.display="inline-block",f(i).then(({hits:s,total:t})=>{if(t===0){a.error({position:"topRight",message:"Sorry, no images found. Please try again!"});return}c.innerHTML=h(s),y()}).catch(s=>{a.error({position:"topRight",message:s.message})}).finally(()=>{l.style.display="none"})}function y(){new m(".list-item",{captions:!0,captionsData:"alt",captionDelay:150}).refresh()}
//# sourceMappingURL=index.js.map
