import { posts } from './posts.js'

const postGridEl = document.getElementById('post-grid')
const postsCurrent = [...posts].sort(() => 0.5 - Math.random()).slice(0, 3)


function renderPostCard() {
    postGridEl.innerHTML = postCardHtml()
}

function postCardHtml() {
    const postHTML = postsCurrent.map(function (post) {
        return `<div class="post-div" class-post="${post.id}">
          <img class="post-img" src="${post.imageLocation}" alt="${post.title}">
          <p class="post-date">${post.date}</p>
          <h3 class="post-head"><a href="/pages/blog${post.id}.html">${post.title}</a></h3>
          <p class="post-desc">${post.abstract}</p>
        </div>`
    }).join('')

    return postHTML
}

renderPostCard()