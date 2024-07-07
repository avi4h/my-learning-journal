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
          <h3 class="post-head"><a href="/pages/blog${post.id}.html">${post.title}<a></h3>
          <p class="post-desc">${post.abstract}</p>
        </div>`
    }).join('')

    return postHTML
}

function createBlogPost(post) {

    // <p id="blog-date">Date</p>
    // <h1 id="blog-head">Heading</h1>
    // <p id="blog-sub">Abstract</p>
    // <img class="" id="blog-img" src="../images/post.webp">
    // <div class="" id="blog-post">
    //      <p class="blog-inside-para">Para1</p>
    //      <p class="blog-inside-para">Para2</p>
    //      <p class="blog-inside-para">Para3</p>
    //      <p class="blog-inside-para">Para4</p>
    // </div>

    const blogSection = document.getElementById('blog-section')

    const blogDate = document.createElement('p')
    blogDate.id = 'blog-date'
    blogDate.textContent = post.date
    blogSection.appendChild(blogDate)

    const blogHead = document.createElement('h1')
    blogHead.id = 'blog-head'
    blogHead.textContent = post.heading
    blogSection.appendChild(blogHead)

    const blogSub = document.createElement('p')
    blogSub.id = 'blog-sub'
    blogSub.textContent = post.abstract
    blogSection.appendChild(blogSub)

    const blogImg = document.createElement('img')
    blogImg.id = 'blog-img'
    blogImg.src = post.imageLocation
    blogImg.alt = post.title
    blogSection.appendChild(blogImg)

    const blogPostDiv = document.createElement('div')
    blogPostDiv.id = 'blog-post'
    blogSection.appendChild(blogPostDiv)

    post.content.forEach(paragraph => {
        const para = document.createElement('p')
        para.className = 'blog-inside-para'
        para.textContent = paragraph
        blogPostDiv.appendChild(para)
    })
}

document.addEventListener("DOMContentLoaded", function () {
    const blogSection = document.getElementById("blog-section");
    const blogNumber = blogSection.getAttribute("class-blog");

    createBlogPost(posts[blogNumber-1])
})

renderPostCard()