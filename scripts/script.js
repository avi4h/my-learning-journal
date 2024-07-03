import { posts } from './posts.js'

const postGridEl = document.getElementById('post-grid')
const postHeadEl = document.getElementById('main-section')
const postsCurrent = [...posts].sort(() => 0.5 - Math.random()).slice(0, 6) 
const headPost = getRandomElement(posts)



function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

function renderPostCard() {
    postGridEl.innerHTML = postCardHtml()
}

function renderHeadPost() {
    postHeadEl.innerHTML = headPostHtml()
}

function postCardHtml() {
    const postHTML = postsCurrent.map(function(post) {
      return `<div class="post-div" class-post="${post.id}">
          <img class="post-img" src="${post.imageLocation}" alt="${post.title}">
          <p class="post-date">${post.date}</p>
          <h3 class="post-head"><a href="/pages/blog${post.id}.html">${post.heading}<a></h3>
          <p class="post-desc">${post.abstract}</p>
        </div>`
    }).join('')
  
    return postHTML
}

function headPostHtml() {
      return `<img src=${headPost.imageLocation} id="main-img">
            <div id="main-bg-color"></div>
            <div class="" id="main-post">
                <p class="" id="main-date">${headPost.date}</p>
                <h2 class="" id="main-head"><a href="/pages/blog${headPost.id}.html">${headPost.title}</a></h2>
                <p class="" id="main-desc">${headPost.abstract}</p>
            </div>`
}

renderHeadPost()
renderPostCard()
