document.addEventListener('DOMContentLoaded', function() {
    var mobileCategories = document.getElementById('mobile-categories');
    var selectedCategory;
    var a = false;

    mobileCategories.addEventListener("click", function(event) {
        if (event.target.tagName === 'LI' || event.target.tagName === 'IMG' || event.target.tagName === 'H5') {
            a = true;
            localStorage.setItem("a", a);
            event.preventDefault();
            isClicked = false;
            menuButtonImg.setAttribute("src", "img/menu-btn.svg");
            mobileMenu.style.transform = "translateX(-100%)";
            body.style.overflowY = "overlay";
            body.style.paddingRight = "0px";
            var targetPosition = parseInt(localStorage.getItem('targetPosition'), 10);
            window.location.href = 'index.html#target=' + targetPosition;

            selectedCategory = event.target.getAttribute('data-category');
            localStorage.setItem("selectedCategory", selectedCategory);
        }
    })
    
});

document.addEventListener('DOMContentLoaded', function() {
  const categories = document.querySelector(".navbar-link-2");
  
  categories.addEventListener("click", function() {
    var targetPosition = parseInt(localStorage.getItem('targetPosition'), 10);
    window.location.href = 'index.html#target=' + targetPosition;
    selectedCategory = "all";
    localStorage.setItem("selectedCategory", selectedCategory);
  })

});

const urlParams = new URLSearchParams(window.location.search);
const postTitle = urlParams.get('title');
const postBody = urlParams.get('body');
const postBody2 = urlParams.get('body2');
const postBody3 = urlParams.get('body3');
const postBody4 = urlParams.get('body4');
const postImg1 = urlParams.get('image1');
const postImg2 = urlParams.get('image2');
const postImg3 = urlParams.get('image3');

loadArticle();

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const blogContainer = document.querySelector(".blog-side-random-post");

var randomIndex1;
var randomIndex2;

handlePrevNextBtns();
randomArticles();


function handlePrevNextBtns() {
  if(prevBtn, nextBtn == null) return;

  if(parseInt(localStorage.getItem("selectedArticleIndex")) == 0) {
    prevBtn.style.display = "none";
  }
  else {
    prevBtn.style.display = "default";
  }
  
  if (parseInt(localStorage.getItem("selectedArticleIndex")) == JSON.parse(localStorage.getItem("combinedArticles")).length - 1) {
    nextBtn.style.display = "none";
  }
  else {
    nextBtn.style.display = "default";
  }
}

function loadArticle () {
  if (postTitle != null) {
    document.getElementById('blogTitle').textContent = postTitle;
    document.getElementById('blogTitle').style.cursor = "default";
    document.getElementById('blogBody').textContent = postBody;
    document.getElementById('blogBody2').textContent = postBody2;
    document.getElementById('blogBody3').textContent = postBody3;
    document.getElementById('blogBody4').textContent = postBody4;
    document.getElementById('articleImage1').innerHTML = postImg1;
    document.getElementById('articleImage2').innerHTML = postImg2;
    document.getElementById('articleImage3').innerHTML = postImg3;
  }
}

function sendInfo (willLoadArticle) {
  window.location.href = `blog.html?title=${encodeURIComponent(willLoadArticle.title)}&body=${encodeURIComponent(willLoadArticle.body)}&body2=${encodeURIComponent(willLoadArticle.body2)}&body3=${encodeURIComponent(willLoadArticle.body3)}&body4=${encodeURIComponent(willLoadArticle.body4)}&image1=${encodeURIComponent(willLoadArticle.image1)}&image2=${encodeURIComponent(willLoadArticle.image2)}&image3=${encodeURIComponent(willLoadArticle.image3)}`;
}

function createRandomArticleIndex () {
  const randomDecimal1 = Math.random();
  const randomDecimal2 = Math.random();
  const scaledRandom1 = randomDecimal1 * 13;
  const scaledRandom2 = randomDecimal2 * 13;

  randomIndex1 = Math.floor(scaledRandom1 + 7);
  randomIndex2 = Math.floor(scaledRandom2 + 7);
}

function randomArticles () {

  while ((randomIndex1 == randomIndex2) || (randomIndex1 == parseInt(localStorage.getItem("selectedArticleIndex"))) || (randomIndex2 == parseInt(localStorage.getItem("selectedArticleIndex")))) {
    createRandomArticleIndex();
  }

  var randomArticle1 = JSON.parse(localStorage.getItem("combinedArticles"))[randomIndex1];
  var randomArticle2 = JSON.parse(localStorage.getItem("combinedArticles"))[randomIndex2];

  var randomArticleArr = [randomArticle1, randomArticle2];
  var randomIndexes = [randomIndex1, randomIndex2];

  var randHTML1 = `
      <div class="post randomArticle" data-category="${randomArticle1.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${randomArticle1.image}" alt = "${randomArticle1.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${randomArticle1.date}</h6>
            <img src="${randomArticle1.divider}">
            <h6>${randomArticle1.author}</h6>
          </div>
          <div class="category">
            ${randomArticle1.categoryIcon}
            <h6>${randomArticle1.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${randomArticle1.title}</h2>
      </div>
      </div>
      `;
      blogContainer.innerHTML += randHTML1;

  var randHTML2 = `
      <div class="post randomArticle" data-category="${randomArticle2.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${randomArticle2.image}" alt = "${randomArticle2.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${randomArticle2.date}</h6>
            <img src="${randomArticle2.divider}">
            <h6>${randomArticle2.author}</h6>
          </div>
          <div class="category">
            ${randomArticle2.categoryIcon}
            <h6>${randomArticle2.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${randomArticle2.title}</h2>
      </div>
      </div>
    `;
      blogContainer.innerHTML += randHTML2;

  var posts = document.querySelectorAll(".randomArticle");

  for (let i = 0; i < posts.length; i++) {
    var post = posts[i];

    let clickableArea1 = post.querySelector(".post-image-holder");
    let clickableArea2 = post.querySelector(".article-title");

    clickableArea1.addEventListener("click", () => {
      sendInfo(randomArticleArr[i]);
      loadArticle();
      localStorage.setItem("selectedArticleIndex", randomIndexes[i]);

    })
    clickableArea2.addEventListener("click", () => {
      sendInfo(randomArticleArr[i]);
      loadArticle();
      localStorage.setItem("selectedArticleIndex", randomIndexes[i]);
    })
  }

  handlePrevNextBtns();
}

if (prevBtn, nextBtn != null) {
  prevBtn.addEventListener("click", function() {
    var willLoadIndex = parseInt(localStorage.getItem("selectedArticleIndex")) - 1;
    var willLoadArticle = JSON.parse(localStorage.getItem("combinedArticles"))[willLoadIndex];

    sendInfo(willLoadArticle);

    loadArticle();

    localStorage.setItem("selectedArticleIndex", parseInt(localStorage.getItem("selectedArticleIndex")) - 1);

    handlePrevNextBtns();
  });
  nextBtn.addEventListener("click", function() {
    var willLoadIndex = parseInt(localStorage.getItem("selectedArticleIndex")) + 1;
    var willLoadArticle = JSON.parse(localStorage.getItem("combinedArticles"))[willLoadIndex];

    sendInfo(willLoadArticle);

    loadArticle();

    localStorage.setItem("selectedArticleIndex", parseInt(localStorage.getItem("selectedArticleIndex")) + 1);

    handlePrevNextBtns();
  });
}