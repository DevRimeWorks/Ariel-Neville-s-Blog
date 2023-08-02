/* post handle */

const previousBtn = document.getElementById("loadPrevious");
const categories = document.getElementById('categories');
const mobileCategories = document.getElementById('mobile-categories');
var posts;
var postCount;
var loadedPosts;
var totalCategory = 0;
var shownCategory = 0;
var shownArticles = 0;
var selectedCategory = 'all';
var selectedArticleIndex;
const blogPostsContainer = document.getElementById("posts");
const hotPostContainer = document.getElementById("hotPostContainer");
const sliderContainer = document.getElementById("sliderWrapper");
const cards = document.querySelectorAll(".slider-cards");

/* slider */

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const prevButtonf = document.querySelector("#prev-f");
const nextButtonf = document.querySelector("#next-f")
const slider = document.querySelector(".slider-flex");

var screenWidth = window.innerWidth;

let cardWidth = cards[0].clientWidth;
let sliderWidth = slider.clientWidth;
let slide;
let waitForScroll;
let clickCheck;

let scrollWidth = slider.scrollWidth - slider.clientWidth;
let isAnimating = false;
let leftClick = 0;
let rightClick = cards.length - 2;

if (screenWidth <= 768) {
  slide = cardWidth;
  waitForScroll = (cardWidth * 4) - 400;
  clickCheck = cards.length - 2;
  leftClick = -1;
}
else {
  slide = cardWidth + 50;
  waitForScroll = sliderWidth + 100;
  clickCheck = cards.length - 2;
}

function slideNext() {
  if (!isAnimating) {
    isAnimating = true;

    slider.scrollBy({
        left: slide,
        behavior: "smooth",
      });
    
      if (leftClick === clickCheck) {
        if (screenWidth > 768) {leftClick = -1;}
        else {leftClick = -2;}

        if(screenWidth >= 1025) {
          nextButton.disabled = true;
          prevButton.disabled = true;
        }
        else {
          nextButtonf.disabled = true;
          prevButtonf.disabled = true;
        }

        slider.scrollTo({
            left: 0,
            behavior: "smooth",
        })

        rightClick = cards.length - 1;

        setTimeout(() => {
          if (screenWidth >= 1025) {
            nextButton.disabled = false;
            prevButton.disabled = false;
          }
          else{
            nextButtonf.disabled = false;
            prevButtonf.disabled = false;
          }
        }, waitForScroll);
      }

      setTimeout(() => {
        isAnimating = false;
        leftClick++;
        rightClick--;
      }, slide + 100);
  }
}

function slidePrev() {
    if (!isAnimating) {
        isAnimating = true;

        slider.scrollBy({
        left: -slide,
        behavior: "smooth",
        });

        if (rightClick === clickCheck) {
          if (screenWidth > 768) {rightClick = -1;}
          else {rightClick = -2;}

          if(screenWidth >= 1025) {
            nextButton.disabled = true;
            prevButton.disabled = true;
          }
          else {
            nextButtonf.disabled = true;
            prevButtonf.disabled = true;
          }

          slider.scrollTo({
            left: scrollWidth,
            behavior: "smooth",
          })

            leftClick = cards.length - 1;

            setTimeout(() => {
              if (screenWidth >= 1025) {
                nextButton.disabled = false;
                prevButton.disabled = false;
              }
              else{
                nextButtonf.disabled = false;
                prevButtonf.disabled = false;
              }
            }, waitForScroll);
          }

        setTimeout(() => {
            isAnimating = false;
            leftClick--;
            rightClick++;
        }, slide + 100);
    }
}

nextButton.addEventListener("click", slideNext);
prevButton.addEventListener("click", slidePrev);

nextButtonf.addEventListener("click", slideNext);
prevButtonf.addEventListener("click", slidePrev);

var indexHolder = [];

const blogPosts = [
  {
    category: "cosmos",
    image: "img/post1-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-earth-americas"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-18",
    author: "Ariel Neville",
    title: "The Cosmic Odyssey: Journeying Through the Universe",
    summary: "Embark on a cosmic odyssey as we explore the vastness of the universe, from distant galaxies to mysterious black holes. This article delves into the wonders of space exploration, celestial phenomena, and the quest to understand our place in the cosmos...",
    body: "The universe, an infinite expanse of stars, galaxies, and celestial wonders, has always fascinated humanity. Throughout history, we have looked to the skies with wonder and curiosity, seeking to unravel the mysteries of the cosmos. Today, space exploration has brought us closer than ever to understanding the vastness of the universe. Cutting-edge technology and scientific advancements have enabled us to peer into distant corners of space, allowing us to marvel at the beauty and complexity of our cosmic home. Venturing beyond our own solar system, astronomers have discovered a multitude of galaxies, each containing billions of stars and untold planets. These distant galaxies, like shimmering islands in the sea of space, hold valuable clues to the origins and evolution of the universe. As we map and study them, we gain insights into the cosmic forces shaping the very fabric of existence.",
    body2: "Amidst the cosmic dance of galaxies, the enigmatic black holes lurk, their immense gravitational pull devouring anything that comes too close. Black holes have puzzled scientists for decades, and while they remain mysterious, we have made great strides in understanding their significance in the cosmos. They play a crucial role in the life cycle of stars and contribute to the formation of galaxies, making them key players in the cosmic symphony of creation and destruction. Space exploration not only takes us to far-off places but also grants us glimpses of celestial phenomena that astound the human imagination. Nebulas, cosmic clouds of gas and dust, create breathtaking cosmic landscapes that have inspired artists and scientists alike. Supernovae, the explosive deaths of massive stars, release unimaginable amounts of energy, shaping the universe around them and seeding the cosmos with vital elements necessary for life.",
    body3: "As we journey through the cosmos, we also seek to understand our place in this vast expanse. The study of exoplanets, planets beyond our solar system, has opened up the possibility of finding other habitable worlds and potential signs of extraterrestrial life. The search for life beyond Earth ignites the human spirit of exploration and pushes the boundaries of our understanding of life's origins and prevalence in the universe. While space exploration is an endeavor of scientific discovery, it also has profound philosophical implications. The vastness of the universe challenges us to contemplate our significance in the grand scheme of things. Our exploration of space can lead to questions about the nature of existence, our purpose as a species, and our responsibilities as stewards of a delicate planet in the cosmic sea.",
    body4: "In conclusion, the cosmic odyssey is an unending journey of exploration and discovery. It takes us from the depths of interstellar space to the innermost workings of subatomic particles. As we peer into the heavens, we are humbled by the majesty of the universe and reminded of our collective human spirit to seek knowledge and understanding. The wonders of space exploration, from distant galaxies to mysterious black holes, inspire us to reach for the stars and continue our quest to unlock the secrets of the cosmos. Our cosmic odyssey is a testament to the power of curiosity, ingenuity, and the unyielding desire to explore the great unknown.",
    image1: "<img src = 'img/post1-min.png'>",
    image2 : "<img src = 'img/post-1-1-min.png'>",
    image3 : "<img src = 'img/post-1-2-min.png'>"
  },

  {
    category: "relationship",
    image: "img/post2-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-heart"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-17",
    author: "Ariel Neville",
    title: "Navigating Love: The Journey of Relationships",
    summary: "Explore the intricacies of love and relationships as we delve into the journey of human connections. This article celebrates the different stages of relationships, from initial attraction to long-lasting companionship, and the lessons they teach us about ourselves and others...", 
    body: "Love, a profound and fundamental human emotion, has been a driving force behind countless stories, songs, and works of art throughout history. It is a complex and multifaceted experience that binds us to one another and shapes the course of our lives. The journey of relationships, like a captivating voyage, takes us through a series of stages that are both thrilling and challenging, revealing the depth of human connections and the growth they inspire. At the genesis of every relationship lies the spark of attraction, an enchanting dance of chemistry and shared interests. The initial stage, often filled with excitement and uncertainty, sets the tone for the connection to come. As we navigate the waters of getting to know someone, we learn about ourselves and our preferences, discovering what truly matters in a potential partner.",
    body2: "As the relationship deepens, we embark on a voyage of intimacy and vulnerability. This stage is where we share our dreams, fears, and aspirations, gradually intertwining our lives with another. It is a period of profound growth, as we learn to communicate openly, resolve conflicts, and embrace our partner's unique qualities. Along the way, we discover that love is not always smooth sailing, but it is the storms we weather together that strengthen the bonds of affection. The journey of relationships is not just about the two individuals involved; it also involves navigating the complexities of merging two lives together. This may include blending families, sharing living spaces, and making joint decisions about the future. In these moments, we learn the art of compromise and the value of teamwork, realizing that love requires a shared effort to overcome challenges and create a harmonious life together.",
    body3: "As the relationship matures, it enters a stage of comfort and companionship. The initial infatuation may mellow into a steady and enduring love, rooted in mutual understanding and acceptance. This phase teaches us the beauty of familiarity and how a long-lasting connection evolves through shared experiences and the ability to grow together while still maintaining individual identities. Throughout the journey of relationships, we also encounter endings and new beginnings. Some relationships come to a natural conclusion, while others endure and evolve into lifelong partnerships. The endings, though often painful, offer opportunities for self-reflection and growth, allowing us to carry the lessons learned into future connections. Every encounter, whether brief or enduring, contributes to the tapestry of our lives and shapes our understanding of love and ourselves.",
    body4: "In conclusion, navigating love and relationships is a transformative odyssey, one that illuminates our hearts and minds with both joy and challenges. It is a journey of self-discovery, empathy, and learning to connect with others in profound and meaningful ways. Each stage, from the initial attraction to long-lasting companionship, adds depth to our understanding of love's boundless possibilities. As we navigate the ever-changing seas of relationships, we come to appreciate the beauty of human connections and the way they shape us into more compassionate and authentic beings.",
    image1: "<img src = 'img/post2-min.png'>",
    image2 : "<img src = 'img/post-2-1-min.png'>",
    image3 : "<img src = 'img/post-2-2-min.png'>"
  },

  {
    category: "tv-series",
    image: "img/post3-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-tv"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-16",
    author: "Ariel Neville",
    title: "The Golden Age of Television: A Renaissance of Quality Series",
    summary: "Delve into the golden age of television and the rise of quality series that have redefined the medium. This article celebrates the diverse genres, complex storytelling, and compelling characters that have captivated audiences worldwide...",
    body: "Television, once considered a mere source of mindless entertainment, has undergone a remarkable transformation over the past few decades. The advent of streaming platforms and cable networks has ushered in a new era of storytelling, offering viewers a vast array of high-quality series that rival the cinematic experience. This golden age of television has become a renaissance of sorts, elevating the medium to an art form that consistently captivates and challenges audiences with its depth and creativity. One of the defining features of the golden age of television is the diversity of genres and themes explored in modern series. From intricate crime dramas that delve into the complexities of the human psyche to epic fantasy sagas that transport viewers to fantastical realms, there is something for every taste. This variety not only keeps audiences engaged but also allows for nuanced explorations of social issues, personal relationships, and the human condition.",
    body2: "The rise of quality series has also brought with it a new era of complex storytelling. Gone are the days of episodic formats that offered self-contained stories each week. Instead, we find intricately woven narratives that span multiple seasons, creating a rich tapestry of plotlines and character arcs. The depth and sophistication of storytelling in these series demand active engagement from viewers, inviting them to become immersed in the worlds created by talented writers and showrunners. At the heart of the golden age of television are the unforgettable characters that have become cultural icons. These series present well-rounded, multi-dimensional characters with flaws and virtues that resonate with viewers on a profound level. From morally ambiguous anti-heroes to strong and resilient heroines, these characters challenge stereotypes and offer a refreshing departure from conventional archetypes.",
    body3: "One of the key factors driving the success of quality series is the willingness of creators to take risks and push boundaries. Freed from the constraints of traditional broadcast networks, streaming platforms and cable channels have encouraged bold storytelling that tackles controversial topics, embraces diverse perspectives, and explores uncharted territory. This willingness to break molds and experiment has resulted in groundbreaking series that leave a lasting impact on both television and popular culture. The golden age of television has also witnessed an expansion of opportunities for talented actors, writers, and directors. With the proliferation of platforms and demand for fresh content, there is now a greater focus on inclusivity and representation both in front of and behind the camera. This has allowed underrepresented voices to shine and brought forth stories that might have otherwise gone untold, enriching the medium with unique and diverse perspectives.",
    body4: "In conclusion, the golden age of television is a testament to the power of storytelling and the potential of the medium to shape our culture and collective consciousness. The rise of quality series has redefined television, offering viewers an unparalleled level of artistry and engagement. As we continue to witness the evolution of television and the exploration of new narratives, we celebrate the creativity, innovation, and diverse voices that have made this era of television truly golden.",
    image1: "<img src = 'img/post3-min.png'>",
    image2 : "<img src = 'img/post-3-1-min.png'>",
    image3 : "<img src = 'img/post-3-2-min.png'>"
  },

  {
    category: "books",
    image: "img/post4-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-book"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-15",
    author: "Ariel Neville",
    title: "The Timeless Magic of Classic Literature",
    summary: "Dive into the enchanting world of classic literature and discover why these timeless tales continue to captivate readers across generations. This article explores the enduring appeal of literary masterpieces, the impact of renowned authors, and the importance of preserving literary heritage...",
    body: "Classic literature stands as a testament to the enduring power of storytelling. These timeless tales, crafted by literary geniuses of the past, transcend time and space to resonate with readers across generations. From the pages of ancient epics to the intricate prose of 19th-century novels, classic literature has the ability to transport us to distant lands, introduce us to unforgettable characters, and explore profound themes that still hold relevance in our contemporary world. One of the primary reasons classic literature maintains its magic lies in its universality. The themes and emotions depicted in these works are fundamentally human and speak to the shared experiences of humanity. Love, loss, ambition, and the quest for identity are just a few of the timeless motifs that continue to connect readers from diverse backgrounds and cultures to the characters and narratives woven by skilled authors.",
    body2: "Renowned authors of classic literature have left an indelible mark on literary history. The likes of William Shakespeare, Jane Austen, Charles Dickens, Leo Tolstoy, and many others have not only shaped the literary landscape of their time but also influenced countless writers and artists in the centuries that followed. Their profound insights into the human psyche and their mastery of language have elevated classic literature to a level of artistry that remains unparalleled. Beyond their artistic value, classic literary works often serve as windows into different periods and cultures. These texts offer readers a glimpse into the social, political, and philosophical contexts of the time they were written, providing valuable historical insights. Through the eyes of characters and their struggles, readers can better understand the complexities and challenges faced by societies throughout history.",
    body3: "Preserving literary heritage is crucial for passing down the wisdom and cultural heritage of the past to future generations. Classic literature serves as a bridge that connects us to our ancestors, allowing us to learn from their experiences, values, and perspectives. These works carry the collective memory of humanity and remind us of our shared journey through time, fostering a sense of continuity and belonging. While classic literature has stood the test of time, it also faces the challenges of evolving reading habits and changing educational curriculums. As technology and media vie for attention, the need to preserve and promote classic works becomes even more vital. Initiatives to encourage reading and appreciation of classic literature, both in educational institutions and society at large, are essential to ensure that these literary treasures remain accessible and cherished for generations to come.",
    body4: "In conclusion, the timeless magic of classic literature lies in its ability to transcend the boundaries of time and culture, offering readers an everlasting connection to the human experience. From the brilliance of the authors to the universality of their themes, classic literary works continue to inspire, challenge, and comfort readers around the world. As we celebrate the richness of our literary heritage, let us embrace the enchanting world of classic literature and ensure that it remains an enduring source of wonder and wisdom for generations yet to come.",
    image1: "<img src = 'img/post4-min.png'>",
    image2 : "<img src = 'img/post-4-1-min.png'>",
    image3 : "<img src = 'img/post-4-2-min.png'>"
  },

  {
    category: "nature",
    image: "img/post5-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-leaf"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-14",
    author: "Ariel Neville",
    title: "The Symphony of the Wild: Exploring Earth's Breathtaking Biodiversity",
    summary: "Embark on a journey to explore the incredible biodiversity of our planet, from lush rainforests to vast oceans. This article celebrates the beauty of nature's intricate ecosystems and the importance of preserving Earth's precious wildlife...",
    body: "The Earth is a masterpiece of biodiversity, where an astounding array of life flourishes in diverse ecosystems. From the vibrant coral reefs teeming with marine life to the majestic canopies of dense rainforests filled with exotic creatures, our planet's biodiversity is a symphony of life, each species playing a unique role in the grand composition of nature. As we explore the depths of Earth's wilderness, we encounter the intricate connections between plants, animals, and microorganisms, forming a delicate web of life that sustains our planet. The lush rainforests, known as the lungs of our planet, are home to an astonishing diversity of plant and animal species. These vibrant ecosystems provide habitat for countless creatures, from colorful birds and playful primates to elusive big cats and ancient reptiles. Beyond their ecological importance, rainforests also play a crucial role in regulating the Earth's climate, absorbing vast amounts of carbon dioxide and releasing oxygen into the atmosphere.",
    body2: "Venturing into the vast oceans, we uncover an underwater world that rivals the richness of any rainforest. Coral reefs, often referred to as the 'rainforests of the sea,' support a myriad of marine life, from tiny shrimp to magnificent sea turtles and majestic whales. These fragile ecosystems face threats from climate change, pollution, and overfishing, making their preservation all the more critical to safeguard the ocean's biodiversity. Across the grasslands and savannas, an array of iconic wildlife thrives. From the powerful herds of African elephants and swift prides of lions to the acrobatic movements of graceful antelopes, these landscapes are a testament to the harmony of life that exists in nature. As climate change and human activities pose challenges to these habitats, conservation efforts become essential to ensure the survival of these majestic creatures.",
    body3: "The Symphony of the Wild also extends to the smallest organisms, such as insects and microorganisms, which play vital roles in maintaining ecological balance. Bees, for instance, are essential pollinators that enable the reproduction of countless plant species, thus supporting the foundation of terrestrial ecosystems. Likewise, microorganisms in the soil and oceans contribute to nutrient cycling and help sustain life throughout the planet. Preserving Earth's precious biodiversity is not merely a matter of sentimentality; it is crucial for the well-being of all life, including humans. Biodiversity provides ecosystem services such as clean air, water, and soil, and plays a fundamental role in agriculture, medicine, and food security. As we witness the alarming decline of many species due to human activities, protecting and restoring biodiversity becomes an urgent global priority.",
    body4: "In conclusion, Earth's biodiversity is a masterpiece that harmonizes the living beings in a grand symphony of life. From the depths of the oceans to the highest mountains, every species plays a unique role in this intricate composition of nature. As custodians of this planet, it is our responsibility to celebrate and protect this extraordinary biodiversity, ensuring that the Symphony of the Wild continues to resound in all its splendor for generations to come.",
    image1: "<img src = 'img/post5-min.png'>",
    image2 : "<img src = 'img/post-5-1-min.png'>",
    image3 : "<img src = 'img/post-5-2-min.png'>"
  },

  {
    category: "technology",
    image: "img/post6-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-microchip"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-13",
    author: "Ariel Neville",
    title: "The Digital Revolution: How Technology Transformed the World",
    summary: "Take a journey through the digital revolution and its profound impact on society. This article explores the rise of computers, the internet, and smartphones, and their transformative effects on communication, information access, and daily life...",
    body: "The digital revolution, a momentous era that unfolded over the past few decades, has revolutionized the way we live, work, and interact with the world. At the heart of this transformative shift are computers, the internet, and smartphones, which have become ubiquitous in our daily lives. These technological advancements have shaped the fabric of society, empowering individuals and connecting people across the globe in unprecedented ways. The advent of computers marked the beginning of the digital revolution, ushering in a new era of information processing and data management. From the early room-sized mainframes to today's compact and powerful laptops, computers have become an integral part of almost every industry and aspect of modern life. They have revolutionized fields such as science, medicine, finance, and education, streamlining processes and enabling faster and more accurate data analysis.",
    body2: "The internet, a groundbreaking creation of the digital revolution, has transformed communication and information access on a global scale. With the click of a button, people can now connect with others from different corners of the world, transcending geographical boundaries and cultural barriers. The internet has democratized knowledge, making information readily available to anyone with a connection, and has facilitated the rise of e-commerce, social media, and online entertainment, reshaping the way we shop, connect, and entertain ourselves. Smartphones, a marvel of the digital revolution, have brought the power of computing and the internet to our pockets. With these handheld devices, we can access a vast array of applications and services, making our lives more efficient and connected. Smartphones have become indispensable tools for communication, navigation, and accessing information on the go, revolutionizing the way we interact with technology and the world around us.",
    body3: "The digital revolution has also profoundly impacted the way we communicate and share information. Social media platforms have become the new public square, enabling us to connect, engage, and express ourselves in real-time with a global audience. However, this revolution has also posed challenges, including the spread of misinformation, privacy concerns, and issues related to online harassment and addiction. In the realm of education, the digital revolution has transformed the learning experience. Online courses and educational platforms have democratized access to knowledge, allowing people from all walks of life to pursue their interests and acquire new skills. The integration of technology in classrooms has also enhanced interactive learning and equipped students with essential digital literacy skills for the future.",
    body4: "In conclusion, the digital revolution has been a transformative force that reshaped the world in profound ways. From the rise of computers to the internet's global connectivity and the ubiquitous presence of smartphones, technology has become an inseparable part of our daily lives. While the digital revolution has brought unprecedented benefits, it also demands our vigilance to address its challenges responsibly. As we navigate this ongoing revolution, let us harness the power of technology to create a more inclusive, informed, and connected world.",
    image1: "<img src = 'img/post6-min.png'>",
    image2 : "<img src = 'img/post-6-1-min.png'>",
    image3 : "<img src = 'img/post-6-2-min.png'>"
  },

  {
    category: "cosmos",
    image: "img/post7-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-earth-americas"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-12",
    author: "Ariel Neville",
    title: "Cosmic Dance: The Beauty of Northern Lights",
    summary: "Witness the enchanting spectacle of the Northern Lights and explore the science behind this natural light display. This article delves into the phenomenon of auroras, their cultural significance, and the best places to experience their ethereal dance...",
    body: "The Northern Lights, also known as the Aurora Borealis, are one of nature's most mesmerizing displays, captivating the hearts and minds of people across cultures for centuries. This ethereal dance of colorful lights that illuminates the night sky occurs predominantly in the high-latitude regions near the Arctic and Antarctic circles. Understanding the science behind this awe-inspiring phenomenon adds even more wonder to its beauty. The dance of the Northern Lights is a result of interactions between the Earth's magnetic field and charged particles from the Sun. These particles, mainly electrons and protons, are carried towards the poles by the solar wind. When they collide with the gases in the Earth's atmosphere, particularly oxygen and nitrogen, the particles release energy in the form of vibrant light, creating the stunning light show that graces the night sky.",
    body2: "Beyond their scientific explanation, the Northern Lights hold immense cultural significance for many indigenous communities living in the regions where they occur. For these communities, the lights are often woven into myths, legends, and spiritual beliefs. They are seen as celestial dancers, spirits, or even messages from ancestors. This cultural connection adds an extra layer of reverence and enchantment to the already breathtaking spectacle. For those yearning to witness this cosmic dance firsthand, there are several prime locations known for their exceptional aurora displays. Tromsø in Norway, Fairbanks in Alaska, and Abisko in Sweden are some of the most popular destinations for Northern Lights enthusiasts. These places offer not only a higher probability of clear skies but also a range of activities and tours designed to enhance the aurora-chasing experience.",
    body3: "While witnessing the Northern Lights is a matter of chance, patience, and favorable weather conditions, the experience is undoubtedly unforgettable. The dancing lights shift and undulate across the night sky, painting it with hues of green, pink, and purple. The stillness of the Arctic or Antarctic night amplifies the beauty of the lights, creating an almost otherworldly ambiance that leaves spectators in awe of nature's artistic prowess. In recent years, the allure of the Northern Lights has attracted travelers from all over the world. As a result, sustainable and responsible tourism practices have become essential to preserve the fragile environments where the lights grace the skies. Respect for local cultures, ecosystems, and minimizing light pollution are crucial to ensuring that future generations can continue to revel in the cosmic dance of the Northern Lights.",
    body4: "In conclusion, the Northern Lights are a cosmic dance that captivates and inspires all who are fortunate enough to witness this celestial spectacle. Beyond their scientific marvel, these dancing lights hold cultural significance and weave enchanting tales of myths and legends. For travelers seeking to experience this breathtaking display, certain destinations offer the best chances of witnessing the Northern Lights' ethereal beauty. As we appreciate the wonder of the Northern Lights, let us also embrace sustainable practices to protect these extraordinary natural displays and ensure they continue to illuminate the night skies for generations to come.",
    image1: "<img src = 'img/post7-min.png'>",
    image2 : "<img src = 'img/post-7-1-min.png'>",
    image3 : "<img src = 'img/post-7-2-min.png'>"
  },

  {
    category: "tv-series",
    image: "img/post8-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-tv"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-11",
    author: "Ariel Neville",
    title: "The Power of Fandom: How TV Series Connect with Audiences",
    summary: "Explore the phenomenon of fandoms and the passionate connections viewers forge with their favorite TV series. This article delves into the community, creativity, and camaraderie that fandoms bring to the television landscape...",
    body: "In the vast landscape of television, certain series have a remarkable ability to not only entertain but also create profound connections with their audiences. These connections often give rise to vibrant communities known as fandoms, where passionate viewers come together to celebrate, discuss, and immerse themselves in the world of their beloved shows. The power of fandoms is undeniable, shaping the television landscape and leaving a lasting impact on both viewers and creators. Fandoms are more than just groups of dedicated viewers; they are dynamic communities that foster a sense of belonging and shared enthusiasm. Through social media platforms, forums, and fan conventions, fans from all corners of the globe come together to express their love for a particular TV series. These communities create safe spaces for fans to interact, share theories, and even form lasting friendships based on a mutual passion for the show.",
    body2: "The emotional connection between fans and their favorite TV series goes beyond simply watching the episodes. Fans invest themselves emotionally in the characters' journeys, formulating their interpretations of the storylines, and even creating fan fiction and fan art to further immerse themselves in the show's universe. This creativity not only enriches the fandom experience but also demonstrates the profound impact the series has on viewers' lives. Fandoms can also have a significant influence on the television industry. The passion and dedication of fans can impact a show's success, often leading to increased viewership, social media buzz, and even extended seasons or spin-offs. Networks and creators are now more aware of the power of fandoms and often engage with fans through online platforms, incorporating fan feedback into the storytelling process.",
    body3: "Television series that successfully connect with audiences often tap into universal themes and emotions that resonate with viewers on a personal level. Whether it's themes of friendship, love, loss, or the exploration of identity, these shows reflect the human experience and offer a sense of catharsis and escapism. In return, fans reward these shows with unwavering loyalty and dedication. The camaraderie within fandoms extends beyond the online sphere, leading to the rise of fan conventions and events where fans can come together in person to celebrate their shared love for a series. These gatherings provide a unique sense of community, where fans can meet their favorite actors, attend panels, and immerse themselves in the world of the show. Such events become joyful celebrations of fandom culture, fostering a sense of unity among fans and providing them with unforgettable experiences.",
    body4: "In conclusion, the power of fandoms is a testament to the deep emotional connections that television series can forge with their audiences. These communities not only enhance the enjoyment of a show but also shape the television landscape through their dedication and influence. Fandoms create a unique space for fans to express their passion, creativity, and camaraderie, ultimately making the television viewing experience a more enriching and communal journey. As the phenomenon of fandoms continues to grow, their impact on television and pop culture is likely to remain a powerful force in the years to come.",
    image1: "<img src = 'img/post8-min.png'>",
    image2 : "<img src = 'img/post-8-1-min.png'>",
    image3 : "<img src = 'img/post-8-2-min.png'>"
  },

  {
    category: "relationship",
    image: "img/post9-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-heart"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-10",
    author: "Ariel Neville",
    title: "The Art of Communication: Key to Healthy Relationships",
    summary: "Discover the art of communication and its pivotal role in fostering healthy and fulfilling relationships. This article explores the power of active listening, empathy, and effective expression in building strong connections...",
    body: "Communication is the lifeblood of any relationship, be it romantic, familial, or professional. It forms the foundation for understanding, empathy, and trust, and its mastery is crucial to building and maintaining healthy connections. The art of communication goes beyond mere words; it involves active listening, genuine empathy, and effective expression to ensure that messages are conveyed with clarity and received with understanding. Active listening is a cornerstone of effective communication. It entails giving our full attention to the speaker, focusing not only on their words but also on their emotions and body language. By listening actively, we convey respect and validation to the speaker, creating a safe space for them to express themselves openly and honestly. Active listening encourages dialogue and understanding, helping to bridge any gaps in communication and prevent misunderstandings.",
    body2: "Empathy is the ability to understand and share the feelings and perspectives of others. It is a powerful tool in communication, as it allows us to see beyond our own experiences and connect with others on a deeper level. Empathetic communication helps build emotional intimacy, as it reassures the other person that their emotions are acknowledged and valued. By practicing empathy, we foster an environment of mutual support and compassion, strengthening the bond between individuals in a relationship. Effective expression is equally essential in communication. It involves articulating thoughts and feelings clearly and respectfully, ensuring that the message is conveyed accurately. When we express ourselves effectively, we reduce the likelihood of misunderstandings and conflicts, as our intentions and desires are communicated in a way that can be easily understood by the other person. This clarity facilitates constructive conversations, where both parties can openly address their needs and concerns.",
    body3: "In the digital age, the art of communication has taken on new challenges and opportunities. While technology has facilitated instant connections, it can also hinder authentic communication. Misinterpretations in text messages or social media posts are not uncommon, emphasizing the importance of considering the context and emotions behind the words. Balancing virtual communication with face-to-face interactions can foster a deeper understanding of one another, as non-verbal cues play a significant role in effective communication. Healthy relationships thrive on communication that is both honest and respectful. Avoiding passive-aggressive behavior, defensiveness, or stonewalling is crucial to promoting open dialogue. Creating a safe and non-judgmental space for communication encourages both partners to share their thoughts and feelings without fear of retribution. Honesty, even when it involves difficult conversations, is essential to building trust and resolving conflicts.",
    body4: "In conclusion, the art of communication is the key to healthy and fulfilling relationships. Active listening, empathy, and effective expression form the cornerstones of this art, fostering understanding, trust, and emotional intimacy. By mastering the art of communication, we create a solid foundation for our connections with others, ensuring that our relationships flourish with respect, love, and genuine understanding. Whether in personal or professional settings, communication is the conduit through which we connect with one another and enrich our lives with meaningful connections.",
    image1: "<img src = 'img/post9-min.png'>",
    image2 : "<img src = 'img/post-9-1-min.png'>",
    image3 : "<img src = 'img/post-9-2-min.png'>"
  },

  {
    category: "books",
    image: "img/post10-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-book"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-09",
    author: "Ariel Neville",
    title: "The Journey of Self-Discovery: Coming-of-Age Novels",
    summary: "Embark on a transformative journey through the pages of coming-of-age novels. This article explores the power of these stories in helping readers navigate the complexities of adolescence, self-discovery, and personal growth...",
    body: "Coming-of-age novels hold a timeless allure, drawing readers into the captivating world of young protagonists as they navigate the tumultuous waters of adolescence and self-discovery. These stories offer a unique lens through which readers can explore the universal themes of identity, friendship, love, and personal growth. The journey of self-discovery depicted in these novels resonates with readers of all ages, providing insights and understanding that can be transformative. At the heart of coming-of-age novels lies the journey of the protagonist as they transition from childhood to adulthood. The challenges and obstacles they encounter mirror the uncertainties and insecurities that many individuals experience during their formative years. Through the eyes of these characters, readers gain empathy and a deeper understanding of the complex emotions that accompany the process of self-discovery.",
    body2: "Coming-of-age novels often tackle sensitive and relevant topics such as self-acceptance, peer pressure, and finding one's place in the world. These narratives offer a safe space for readers to explore their own feelings and thoughts, validating their experiences and providing comfort in knowing that they are not alone in their struggles. The characters' triumphs and setbacks become a mirror for readers to reflect upon their own lives and consider their own paths of growth and change. Friendship is a recurring theme in many coming-of-age novels. The bonds forged between characters often reflect the deep connections that form during adolescence. These friendships become a source of support, guiding the protagonists through their journeys of self-discovery. The portrayal of diverse friendships in these novels also highlights the importance of empathy and understanding in building meaningful relationships.",
    body3: "Love, in all its forms, is another central theme in coming-of-age novels. From first crushes to profound romantic relationships, the exploration of love is a powerful aspect of the characters' development. These stories teach readers valuable lessons about the complexities of relationships, the importance of communication, and the significance of personal growth within the context of love. The transformative power of coming-of-age novels lies in their ability to instill a sense of hope and optimism. Despite the challenges and uncertainties faced by the characters, these stories often culminate in moments of realization and self-acceptance. Such moments not only inspire readers but also encourage them to embrace their own personal journeys of growth and self-discovery.",
    body4: "Moreover, coming-of-age novels have a lasting impact on readers, transcending generational boundaries. The themes explored in these stories are relevant to people of all ages, as each stage of life involves continuous growth and introspection. Even as readers grow older, the lessons and insights gained from these novels remain meaningful, serving as reminders of the resilience and strength that emerge from the journey of self-discovery. In conclusion, the journey of self-discovery depicted in coming-of-age novels provides readers with a profound and transformative experience. These stories offer a lens through which readers can explore their own emotions, struggles, and growth. The universal themes of identity, friendship, love, and personal development resonate with readers of all ages, offering solace and inspiration as they navigate their own paths of self-discovery. The power of coming-of-age novels lies in their ability to evoke empathy, understanding, and hope, making them an enduring and cherished genre in the literary landscape.",
    image1: "<img src = 'img/post10-min.png'>",
    image2 : "<img src = 'img/post-10-1-min.png'>",
    image3 : "<img src = 'img/post-10-2-min.png'>"
  },

  {
    category: "cosmos",
    image: "img/post11-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-earth-americas"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-08",
    author: "Ariel Neville",
    title: "The Unexplored Frontier: Journey to Exoplanets",
    summary: "Venture into the unexplored frontier of exoplanets - distant worlds orbiting stars beyond our solar system. This article explores the discoveries of exoplanets, the potential for habitability, and the search for extraterrestrial life...",
    body: "The cosmos has always been a source of fascination and wonder for humanity, but the discovery of exoplanets has opened up an entirely new frontier for exploration. Exoplanets are planets that exist beyond our solar system, orbiting stars in distant corners of the universe. Over the past few decades, advancements in technology and space observation have allowed scientists to detect and study these intriguing celestial bodies, revolutionizing our understanding of the cosmos and the potential for life beyond Earth. The discovery of exoplanets has been nothing short of revolutionary. Before this breakthrough, we could only speculate about the existence of other planets beyond our solar system. Now, astronomers have confirmed the presence of thousands of exoplanets, ranging from rocky worlds to gas giants, and everything in between. These discoveries have provided valuable insights into the diversity of planetary systems in the universe.",
    body2: "One of the most exciting aspects of exoplanet research is the quest for habitability. Scientists are constantly on the lookout for exoplanets that may have conditions suitable for life as we know it. The search for 'Goldilocks planets' - those located in the habitable zone of their host stars, where conditions might be just right for liquid water to exist - is a priority in the search for potential life beyond Earth. While the majority of exoplanets discovered so far are inhospitable to life as we understand it, the mere existence of such a diverse array of worlds sparks curiosity about the possibilities that might lie beyond our own solar system. These discoveries have prompted us to question what conditions are necessary for life to flourish and whether life, as we know it, might be just one of many potential forms of cosmic existence.",
    body3: "The search for extraterrestrial life has become a significant focus in the field of exoplanet research. While we have yet to detect definitive signs of life beyond Earth, the discovery of potentially habitable exoplanets offers hope and optimism in our quest to find evidence of life elsewhere in the universe. New space missions and technologies are being developed to further explore exoplanets and look for possible biosignatures that could indicate the presence of life. The exploration of exoplanets is not without its challenges. The vast distances between stars and their orbiting planets make direct exploration difficult with current technology. However, scientists are exploring innovative methods, such as space telescopes and advanced instruments, to probe exoplanet atmospheres and learn more about their properties.",
    body4: "The study of exoplanets also has broader implications for understanding our own place in the universe. By exploring the diversity of planetary systems, we gain a deeper understanding of the conditions that led to the formation of our solar system and Earth. The knowledge gained from exoplanet research informs our understanding of planetary science and astrobiology, shedding light on the cosmic processes that shape the universe. In conclusion, the discovery of exoplanets has opened up an unexplored frontier in astronomy, captivating the imaginations of scientists and enthusiasts alike. The diversity of exoplanets, the search for habitability, and the quest for extraterrestrial life are pushing the boundaries of our understanding of the cosmos and our place in it. As technology continues to advance, we can look forward to even more exciting discoveries and insights as we journey to these distant worlds beyond our solar system.",
    image1: "<img src = 'img/post11-min.png'>",
    image2 : "<img src = 'img/post-11-1-min.png'>",
    image3 : "<img src = 'img/post-11-2-min.png'>"
  },

  {
    category: "books",
    image: "img/post12-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-book"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-07",
    author: "Ariel Neville",
    title: "Exploring Fantasy Worlds: The Allure of Epic Fantasy Novels",
    summary: "Step into the enchanting realms of epic fantasy novels, where magical worlds and epic quests await. This article celebrates the imaginative brilliance of authors like J.R.R. Tolkien, George R.R. Martin, and J.K. Rowling, whose works have sparked a global fascination with fantasy fiction...",
    body: "In the realm of literature, epic fantasy novels stand as portals to extraordinary worlds of magic, myth, and adventure. These imaginative works transport readers to enchanting realms where heroes embark on epic quests, ancient prophecies unfold, and fantastical creatures roam the lands. Authors like J.R.R. Tolkien, George R.R. Martin, and J.K. Rowling have gifted readers with captivating tales that have ignited a global fascination with fantasy fiction. At the heart of epic fantasy novels lies the art of world-building. Authors meticulously craft intricate landscapes, cultures, and magical systems, making these worlds feel astonishingly real. From the sprawling landscapes of Middle-earth in Tolkien's 'The Lord of the Rings' to the complex political intrigue of Westeros in Martin's 'A Song of Ice and Fire' series, these immersive settings become characters in their own right, drawing readers into the heart of the story.",
    body2: "J.R.R. Tolkien, often regarded as the father of modern fantasy literature, is celebrated for his masterful creation of Middle-earth. His works, including 'The Hobbit' and 'The Lord of the Rings,' set the benchmark for the epic fantasy genre, inspiring countless authors and readers alike. Tolkien's meticulous attention to detail, from the intricacies of Elvish languages to the rich tapestry of Middle-earth's history, established a blueprint for world-building that endures to this day. George R.R. Martin's 'A Song of Ice and Fire' series, famously adapted into the television series 'Game of Thrones,' captivated a global audience with its gritty realism and morally complex characters. Martin's ability to subvert traditional fantasy tropes and present a morally ambiguous world filled with political intrigue, unexpected deaths, and complex characters has earned him accolades and a dedicated fanbase.",
    body3: "J.K. Rowling's 'Harry Potter' series ushered in a new generation of readers and redefined the fantasy genre for young adult audiences. Her magical world of Hogwarts School of Witchcraft and Wizardry, spells, and magical creatures captured the hearts of readers worldwide. Rowling's storytelling prowess and skillful character development, coupled with themes of friendship, bravery, and the battle between good and evil, made her books an enduring cultural phenomenon. Beyond their engaging plots and imaginative worlds, epic fantasy novels often explore profound themes that resonate with readers. These themes can include the nature of power, the hero's journey, the struggle between good and evil, and the importance of hope and resilience in the face of adversity. These narratives offer readers not only an escape into magical worlds but also a deeper reflection on the human experience.",
    body4: "The allure of epic fantasy novels lies in their ability to transport readers to realms of wonder and possibilities. The blend of myth, magic, and adventure creates a sense of escapism and wonder that allows readers to step outside the confines of reality and embark on thrilling journeys alongside heroic characters. In these fantastical worlds, readers can confront challenges, overcome obstacles, and discover the strength of their own imagination. In conclusion, epic fantasy novels have captured the hearts and minds of readers worldwide, transporting them to enchanting realms where magic and adventure abound. The visionary works of authors like J.R.R. Tolkien, George R.R. Martin, and J.K. Rowling have sparked a global fascination with fantasy fiction, igniting the imaginations of readers young and old. As we step into these enchanting worlds, we find not only thrilling tales of heroes and quests but also timeless themes that resonate with the human spirit. The allure of epic fantasy novels continues to captivate us, inviting us on extraordinary journeys through the limitless realms of the imagination.",
    image1: "<img src = 'img/post12-min.png'>",
    image2 : "<img src = 'img/post-12-1-min.png'>",
    image3 : "<img src = 'img/post-12-2-min.png'>"
  },

  {
    category: "animals",
    image: "img/post13-min.png",
    categoryIcon : '<i style = "opacity: 70%" class="fa-solid fa-paw"></i>',
    divider: "img/date-divider-pink.svg",
    date: "2023-07-06",
    author: "Ariel Neville",
    title: "The Fascinating World of Dolphins",
    summary: "Discover the captivating world of dolphins - intelligent marine mammals known for their playful behavior and strong social bonds. This article delves into their unique communication methods, incredible acrobatics, and the importance of conservation efforts to protect these magnificent creatures...",
    body: "Beneath the glistening waves of the world's oceans lies a realm inhabited by one of the most captivating creatures - dolphins. These intelligent marine mammals have long been a subject of fascination and wonder for humans. Their playful behavior, strong social bonds, and remarkable abilities make them a true marvel of the seas. Dolphins are highly social beings, forming intricate communities with complex social structures. They are known to live in pods, where they establish strong bonds with other members. These bonds are forged through a variety of communication methods, including clicks, whistles, and body language. Their remarkable ability to communicate and cooperate within their pods is a testament to their intelligence and sophisticated social dynamics.",
    body2: "One of the most enchanting aspects of dolphins is their playful behavior. They are often spotted riding the waves, leaping joyfully out of the water, and engaging in acrobatic displays. Their exuberant playfulness is not just for amusement; it also serves as a means of strengthening social bonds and honing their physical skills. Witnessing a group of dolphins engaged in their playful antics is a breathtaking experience that leaves a lasting impression on those fortunate enough to encounter them in their natural habitat. In addition to their playful nature, dolphins are also known for their incredible acrobatics. With their streamlined bodies and powerful tails, they are adept swimmers capable of reaching impressive speeds. They are often observed breaching - launching themselves out of the water and splashing back down in a graceful display of agility. These breathtaking feats not only showcase their physical prowess but also demonstrate their adaptability and ability to thrive in their marine environment.",
    body3: "Despite their awe-inspiring qualities, dolphins face numerous threats in the wild. Habitat loss, pollution, entanglement in fishing gear, and human disturbance all pose significant risks to their populations. The importance of conservation efforts to protect these magnificent creatures and their delicate ecosystems cannot be overstated. Through the establishment of marine protected areas, responsible fishing practices, and public awareness campaigns, we can work towards ensuring a sustainable future for dolphins and the marine environment they call home. The intelligence of dolphins is another aspect that has captured the fascination of researchers and enthusiasts alike. They possess advanced cognitive abilities, capable of problem-solving, complex communication, and even displaying a sense of self-awareness. Their intelligence has led to them being involved in various studies and research initiatives to gain further insights into their capabilities and behavior.",
    body4: "In conclusion, the world of dolphins is a captivating realm filled with intelligence, playfulness, and social intricacies. Their unique communication methods and incredible acrobatics showcase the marvel of nature's design, leaving us in awe of these remarkable marine mammals. As we explore the fascinating world of dolphins, let us also remember our responsibility to protect and preserve their habitats and ensure that future generations can continue to experience the joy and wonder of encountering these magnificent creatures in their natural habitats.",
    image1: "<img src = 'img/post13-min.png'>",
    image2 : "<img src = 'img/post-13-1-min.png'>",
    image3 : "<img src = 'img/post-13-2-min.png'>"
  },
];

const hotPost = [
  {
    dataPostId: '0',
    category: "technology",
    image: "<img class = 'hot-post-img' src = 'img/hotPost.png'>",
    divider: "img/Vector 5.svg",
    date: "2023-07-19",
    author: "Ariel Neville",
    title: "Exploring Apple Vision Pro: The Future of Display Technology",
    summary: "Discover the cutting-edge display technology, Apple Vision Pro. This article explores its remarkable features, including stunning color accuracy, enhanced brightness, and impressive contrast ratios...",
    body: "Display technology has come a long way over the years, and Apple has been at the forefront of innovation in this field. With each new product release, Apple continues to push the boundaries of what is possible with display technology, offering users an unparalleled visual experience. Apple Vision Pro is the latest advancement in this journey, promising to redefine how we perceive and interact with our devices. One of the standout features of Apple Vision Pro is its stunning color accuracy. The technology utilizes advanced calibration techniques and color management systems to ensure that every hue and shade on the screen is reproduced with utmost precision. Whether you are editing photos, watching movies, or simply browsing the web, you can trust that the colors you see are true to life, enhancing your overall viewing experience.",
    body2: "Another key aspect of Apple Vision Pro is its enhanced brightness capabilities. With higher peak brightness levels, the display can combat glare and reflections, making it easier to use your device in various lighting conditions. Whether you are using your Apple device indoors or outdoors, you can expect clear and legible content without straining your eyes. Apple Vision Pro also boasts impressive contrast ratios, enhancing the visual depth and clarity of the displayed content. From darker blacks to brighter whites, the technology ensures that the details in your images, videos, and graphics are rich and vibrant, creating a more immersive experience.",
    body3: "Despite its cutting-edge capabilities, Apple Vision Pro is designed to be energy-efficient. The display intelligently adjusts its brightness levels based on ambient lighting conditions, optimizing power consumption while still delivering an exceptional visual experience. This not only enhances the device's battery life but also reduces the overall environmental impact. Apple Vision Pro is seamlessly integrated with the Apple ecosystem, providing a consistent visual experience across all compatible devices. Whether you're using an iPhone, iPad, Mac, or other Apple products, you can enjoy the same high-quality display performance, allowing you to transition between devices effortlessly.",
    body4: "As display technology continues to evolve, Apple Vision Pro sets a new standard for the industry. Its remarkable features, stunning color accuracy, enhanced brightness, and impressive contrast ratios pave the way for the future of display technology. With each iteration, Apple remains committed to elevating the user experience, and Apple Vision Pro is a testament to the company's dedication to innovation and excellence. In conclusion, Apple Vision Pro represents a groundbreaking leap in display technology, offering users a visually captivating and immersive experience. Its remarkable features, including stunning color accuracy, enhanced brightness, and impressive contrast ratios, redefine what is possible with modern displays. As Apple continues to push the boundaries of innovation, users can expect even more exciting advancements in the future, as the tech giant stays committed to providing the best visual experience possible across its entire product ecosystem.",
    image1: "<img src = 'img/hotPost.png'>",
    image2 : "<img src = 'img/hotPost-1-min.png'>",
    image3 : "<img src = 'img/hotPost-2-min.png'>"
  },
];

const pickedArticles = [
  {
    title: "The Unforgettable Odyssey: Journeying through 'The Lost Chronicles",
    category: "Books",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card1-min.png' alt='picked article-1'>",
    body: "Embark on a captivating literary odyssey as we delve into the enchanting world of 'The Lost Chronicles.' This article celebrates the timeless allure of this epic fantasy series, exploring its rich storytelling, intricate world-building, and unforgettable characters. 'The Lost Chronicles' invites readers into a realm where imagination knows no bounds. Authored by the gifted pen of a visionary writer, this series takes us on an unforgettable journey through vast landscapes, ancient civilizations, and magical realms. With each turn of the page, readers are transported to a world brimming with wonder, excitement, and mystery. At the heart of 'The Lost Chronicles' are epic quests that challenge the courage and determination of its protagonists. Journey alongside brave heroes and heroines as they face insurmountable odds, battle dark forces, and strive to fulfill prophecies that could change the fate of their worlds. These compelling characters become friends and allies, leaving an indelible mark on readers' hearts.",
    body2: "The allure of 'The Lost Chronicles' lies not only in its action-packed adventures but also in its intricate web of intrigue and mystery. Hidden secrets, ancient prophecies, and unexpected alliances add layers of complexity to the narrative, ensuring that readers are kept on the edge of their seats throughout the series. Beyond its fantastical elements, 'The Lost Chronicles' explores profound themes of resilience, redemption, and the triumph of the human spirit. As the characters face personal trials and moral dilemmas, they evolve and grow, leaving readers with valuable life lessons and a deeper understanding of the human condition.",
    body3: "'The Lost Chronicles' has left an indelible mark on the landscape of fantasy literature. Its masterful storytelling and imaginative world-building have inspired generations of authors and readers alike. The series has become a classic in its genre, influencing countless other works and setting the bar high for future epic fantasies. Over the years, 'The Lost Chronicles' has garnered a dedicated fan community, fostering a vibrant fandom culture. Online forums, fan art, fan fiction, and fan conventions have sprung up, allowing enthusiasts to connect, share their passion for the series, and immerse themselves further into the fantastical universe created by the author. As we journey through 'The Lost Chronicles,' we are reminded of the timeless magic of storytelling. The series transcends time and generations, captivating readers of all ages with its universal themes, vivid imagery, and boundless imagination. Whether revisiting the series or discovering it for the first time, readers continue to embark on an unforgettable odyssey through the pages of 'The Lost Chronicles.'",
    body4: "In conclusion, 'The Lost Chronicles' stands as a testament to the enduring power of storytelling and its ability to transport us to worlds beyond our wildest dreams. This epic fantasy series captivates with its rich narrative, complex characters, and themes that resonate with the human experience. As readers immerse themselves in this unforgettable odyssey, they are reminded of the everlasting impact of literature and the remarkable journey that awaits within the pages of a well-crafted story.",
    image1: "<img src = 'img/card-1-min.png'>",
    image2 : "<img src = 'img/card1-1-min.png'>",
    image3 : "<img src = 'img/card1-2-min.png'>"
  },
  {
    title: "Couch Chronicles: Navigating the TV Series Universe from Drama to Fantasy",
    category: "TV Series",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card-2-min.png' alt='picked article-2'>",
    body: "Drama series have a unique ability to delve into the human psyche, presenting compelling narratives that mirror real-life struggles, triumphs, and emotions. With intricate character development and thought-provoking plots, drama series capture the essence of the human condition, evoking empathy and introspection from viewers. From crime dramas that explore the dark underbelly of society to character-driven stories that celebrate resilience and growth, these series touch the heart and soul of the audience. Fantasy series transport viewers to otherworldly realms filled with magic, mythical creatures, and epic quests. These imaginative landscapes offer an escape from the mundane and invite audiences to explore uncharted territories. From the sweeping vistas of epic fantasies like 'Game of Thrones' to the enchanting tales of 'Harry Potter,' fantasy series spark the imagination, igniting a sense of wonder that transcends reality.",
    body2: "Science fiction series propel us into the future, pushing the boundaries of scientific knowledge and what lies beyond our current understanding. With futuristic technologies, extraterrestrial encounters, and dystopian societies, these series tackle existential questions about the universe and humanity's place within it. They challenge us to contemplate the potential consequences of scientific advancements while inspiring us with visions of innovation and exploration. Comedy series bring joy and laughter into our lives, providing a much-needed respite from the complexities of the world. Whether it's through witty one-liners, situational humor, or endearing characters, comedy series have a universal appeal that transcends cultural barriers. They remind us of the power of laughter to heal and connect us, turning ordinary moments into memorable ones. Thriller series keep audiences on the edge of their seats with heart-pounding suspense and unexpected twists. With adrenaline-fueled narratives and nail-biting cliffhangers, these series create a rollercoaster of emotions, leaving viewers eagerly anticipating the next episode. From political thrillers to psychological mysteries, these series leave a lasting impact that lingers even after the screen goes dark.",
    body3: "Romance series celebrate the complexities of love, exploring the intricacies of relationships, heartaches, and the triumph of human connection. From heartwarming love stories that warm the soul to steamy romances that ignite passion, these series remind us of the beauty and vulnerability of the human heart. Horror series tap into our primal fears and take us on spine-chilling journeys into the unknown. With supernatural entities, haunted houses, and psychological terrors, these series confront our darkest fears and push the boundaries of our comfort zones. They serve as a cathartic experience, allowing us to face our anxieties in the safe confines of our living rooms.",
    body4: "In conclusion, the TV series universe offers a plethora of genres, each with its distinct charm and allure. Whether we seek emotional catharsis, an escape into fantastical realms, or thought-provoking narratives, television series have something to offer every viewer. They entertain, educate, and inspire, leaving an indelible mark on our lives as we continue to navigate the endless offerings of the small screen. So, grab your popcorn, settle into your favorite spot on the couch, and let the journey through the captivating TV series universe unfold before you.",
    image1: "<img src = 'img/card2-min.png'>",
    image2 : "<img src = 'img/card2-1-min.png'>",
    image3 : "<img src = 'img/card2-2-min.png'>"
  },
  {
    title: "Toy Story: A Timeless Animation Masterpiece that Charms Generations",
    category: "Movies",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card-3-min.png' alt='picked article-3'>",
    body: "Toy Story, an animation film released in 1995, holds a special place in the hearts of both children and adults alike. Produced by Pixar Animation Studios and directed by John Lasseter, this iconic movie marked a groundbreaking milestone in the world of animated cinema, being the first-ever feature-length film created entirely using computer-generated imagery (CGI). Toy Story has transcended time and generations, leaving an indelible mark on the entertainment industry and becoming a beloved classic cherished by viewers worldwide. Toy Story takes us on an imaginative journey into a secret world where toys come alive when humans are not around. The film introduces us to the endearing protagonist, Woody, a loyal cowboy doll belonging to a young boy named Andy. Woody is the leader of the toys in Andy's room and enjoys a harmonious existence until the arrival of the new and flashy space ranger action figure, Buzz Lightyear. The film's charm lies in its ability to portray toys as relatable and lovable characters with emotions, fears, and desires.",
    body2: "At its core, Toy Story explores the themes of friendship, identity, and self-discovery. Woody and Buzz, initially rivals, learn to overcome their differences and forge a deep bond, teaching viewers the value of acceptance and camaraderie. Woody grapples with feelings of jealousy and insecurity when Buzz becomes the new favorite toy, while Buzz confronts his identity crisis as he grapples with his belief that he is a real space ranger. These poignant themes resonate with audiences of all ages, reminding us of the importance of embracing who we are and the people we cherish. Toy Story's release was a game-changer in the animation industry. It introduced audiences to the limitless possibilities of CGI animation, forever altering the landscape of filmmaking. The film's success paved the way for subsequent CGI-animated films and established Pixar as a leading animation studio. Toy Story's exceptional animation quality, attention to detail, and engaging storytelling set new standards for animated movies, leaving an enduring impact on the art of filmmaking.",
    body3: "Toy Story's unforgettable characters are brought to life by a talented voice cast, including Tom Hanks as Woody and Tim Allen as Buzz Lightyear. These actors' performances breathed life into the toys, creating a magical and heartfelt experience for viewers. The supporting cast, featuring beloved toys like Mr. Potato Head, Slinky Dog, and Rex, adds depth and humor to the narrative, ensuring that each toy has a unique personality that complements the overall story. Toy Story celebrates the power of imagination and the adventures that await when we view the world through a child's eyes. From daring rescue missions to journeys across toy-filled landscapes, the film takes us on a whirlwind of excitement and fun. It reminds us that, no matter our age, a sense of wonder and curiosity can infuse our lives with magic and joy. Toy Story's cultural impact is undeniable, as it became a global sensation that transcended borders and languages. The film's success led to two sequels and a fourth installment, further expanding the beloved franchise. Toy Story's characters and catchphrases, such as 'To infinity and beyond!' and 'You've got a friend in me,' have become embedded in popular culture, securing their place in the hearts of millions.",
    body4: "Over two decades after its release, Toy Story remains as captivating and enchanting as ever. Its enduring charm lies in its ability to appeal to audiences of all ages, evoking feelings of nostalgia for older viewers and capturing the hearts of younger generations. Toy Story continues to resonate with its timeless themes, animation brilliance, and heartwarming characters, making it a cinematic masterpiece that will continue to be cherished for generations to come. In conclusion, Toy Story is a film that holds an exceptional place in the history of animation. Its heartwarming story, groundbreaking animation, and endearing characters have left an everlasting impression on cinema and popular culture. As we revisit the imaginative world of Woody, Buzz, and the rest of the toy gang, we are reminded of the power of friendship, the wonders of childhood, and the magic of believing in the extraordinary. Toy Story will forever remain a timeless classic that continues to bring joy, laughter, and inspiration to audiences, exemplifying the true essence of storytelling at its finest.",
    image1: "<img src = 'img/card3-min.png'>",
    image2 : "<img src = 'img/card-3-1-min.png'>",
    image3 : "<img src = 'img/card-3-2-min.png'>"
  },
  {
    title: "Graceful Giants: The Enigmatic World of Giraffes",
    category: "Animals",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card-4-min.png' alt='picked article-4'>",
    body: "Giraffes, the graceful giants of the African savannas, captivate us with their majestic presence and enigmatic charm. These towering creatures, known for their elongated necks and striking spotted coats, have intrigued humans for centuries. As one of the most iconic animals on the planet, giraffes hold a unique place in our hearts and the natural world. In this article, we embark on a journey into the captivating world of giraffes, exploring their remarkable features, social behaviors, and the conservation efforts aimed at preserving these magnificent animals for future generations. Standing tall with their elegant necks reaching up to six meters, giraffes hold the title of the tallest land mammals on Earth. Their elongated necks serve as a distinctive adaptation that allows them to access leaves and vegetation high up in the trees, providing them with a competitive advantage in their savanna habitats. With their towering stature, giraffes command attention and admiration, drawing both awe and fascination from wildlife enthusiasts and observers.",
    body2: "Giraffes' distinctive coat patterns, composed of irregularly shaped spots, are as unique as fingerprints. These patterns vary between subspecies, and no two giraffes possess the same spot configuration. Researchers believe these spots may serve as a form of camouflage, providing giraffes with some protection from predators amidst the dappled sunlight filtering through the savanna foliage. Despite their remarkable height, giraffes exhibit surprising grace and coordination. Their loping gait, characterized by both legs on one side moving in unison, showcases an effortless and fluid movement. Watching giraffes gracefully traverse the savanna, bending their long necks to reach for food, is a mesmerizing sight that showcases the beauty of these gentle giants in motion. Giraffes are highly social animals, living in loose herds that can consist of both males and females of various ages. These herds form complex social structures, with females often forming lasting bonds and raising their young together. Male giraffes, known as bulls, establish dominance through necking, a form of combat involving swinging their long necks at each other.",
    body3: "While giraffes are not as vocal as some other African animals, they do communicate through a series of low-frequency sounds. These sounds range from snorts and grunts to humming and moaning. Giraffes also communicate non-verbally through various body postures and movements, conveying emotions and intentions to their herd members. Despite their iconic status, giraffes face numerous challenges in the wild. Habitat loss, poaching, and human-wildlife conflict threaten their populations. As a result, giraffes are classified as a vulnerable species by the International Union for Conservation of Nature (IUCN). Conservation efforts are vital in safeguarding their habitats and ensuring the future survival of these majestic creatures.",
    body4: "Giraffes have become a symbol of elegance, grace, and resilience in the animal kingdom. Their ability to adapt to challenging environments and survive in the vast African savannas is a testament to their strength and tenacity. As ambassadors of the wild, giraffes inspire us to cherish and protect the diverse and wondrous creatures that share our planet. In conclusion, giraffes are awe-inspiring creatures that embody the spirit of the African savanna. With their towering presence, distinctive coat patterns, and graceful movements, giraffes have captured the imagination of people across the globe. As we marvel at these gentle giants, let us also recognize the importance of preserving their natural habitats and supporting conservation efforts to ensure that future generations can continue to be enchanted by the magnificence of giraffes in the wild.",
    image1: "<img src = 'img/card4-min.png'>",
    image2 : "<img src = 'img/card4-1-min.png'>",
    image3 : "<img src = 'img/card4-2-min.png'>"
  },
  {
    title: "Unraveling the World of Headsets: A Sound Journey into Enhanced Audio Experience",
    category: "Technology",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card-5-min.png' alt='picked article-5'>",
    body: "Headsets, the ubiquitous audio companions, have become an integral part of our modern lives, revolutionizing the way we experience sound. From immersive gaming sessions to crystal-clear communication during virtual meetings, headsets have evolved into versatile devices that cater to various needs. In this article, we dive into the dynamic world of headsets, exploring their evolution, diverse applications, and the technology that brings audio to life in stunning clarity. Headsets have come a long way since their inception, transitioning from bulky and wired designs to sleek, wireless wonders. The early iterations of headsets were primarily used in telecommunication and radio industries. However, with advancements in technology and the emergence of entertainment mediums like gaming and multimedia, headsets have evolved into sophisticated devices with surround sound capabilities, noise-cancellation features, and intuitive controls.",
    body2: "Gaming headsets have revolutionized the gaming experience, transporting players into immersive virtual worlds filled with stunning audio effects. Equipped with precision sound drivers and advanced audio processing technologies, gaming headsets deliver positional audio, allowing players to hear enemies approaching from all directions. The addition of noise-canceling microphones ensures clear communication with teammates, enhancing teamwork and strategizing in multiplayer games. The advent of Bluetooth technology has liberated headsets from tangled wires, providing users with unparalleled freedom of movement. Bluetooth headsets have become a staple in the professional world, facilitating hands-free communication during work calls and virtual meetings. Additionally, Bluetooth earbuds offer a seamless music listening experience on the go, providing users with the convenience of wireless connectivity without compromising on audio quality.",
    body3: "For music connoisseurs seeking pristine audio quality, high-fidelity headphones offer a listening experience like no other. These headphones boast premium audio drivers, superior materials, and sound engineering precision, delivering every nuance of the music with astounding clarity. Audiophiles savor the rich and immersive soundscapes presented by these high-end headsets, allowing them to rediscover their favorite tracks with newfound appreciation. Noise-canceling headsets have become a boon for those seeking a tranquil oasis amidst the cacophony of everyday life. Using sophisticated algorithms, these headsets analyze and counter ambient sounds, creating a peaceful sanctuary for users. Whether you're working in a bustling office or seeking solitude during a long flight, noise-canceling headsets help you stay focused and centered. Modern headsets often come with customization options to suit individual preferences. From adjustable headbands and swappable ear cushions for comfort to programmable buttons and RGB lighting for gamers, headsets can be tailored to match users' needs and aesthetics. This level of personalization ensures that users can enjoy a uniquely tailored audio experience that resonates with their personality.",
    body4: "As technology continues to advance, the future of headsets promises even more exciting possibilities. Innovations such as augmented reality integration, smart assistants, and biometric sensors may redefine the way we interact with our headsets. Additionally, advancements in audio processing and wireless connectivity will further elevate the audio experience, bringing us closer to a world of seamless and immersive audio engagement. Headsets have transcended their utilitarian origins to become sophisticated devices that enrich our lives with enhanced audio experiences. Whether for gaming, work, music, or communication, headsets cater to a diverse range of needs, providing us with the gift of crystal-clear sound and seamless connectivity. As technology continues to push the boundaries, the future of headsets promises even more extraordinary innovations, taking us on a sonic journey into uncharted realms of audio possibilities. From the gaming realm to the professional sphere, headsets remain our trusted companions, elevating our auditory senses and enriching our lives in ways that only sound can.",
    image1: "<img src = 'img/card5-min.png'>",
    image2 : "<img src = 'img/card5-1-min.png'>",
    image3 : "<img src = 'img/card5-2-min.png'>"
  },
  {
    title: "Beneath the Azure Horizon: Exploring the Enigmatic Depths of Oceans",
    category: "Nature",
    image: "<img width = '284px' height = '330px' loading='lazy' src='img/card-6-min.png' alt='picked article-6'>",
    body: "Oceans, the vast and mysterious bodies of water that cover more than 70% of our planet's surface, have always captivated the human imagination. As the cradle of life on Earth, oceans play a vital role in regulating our climate, supporting diverse ecosystems, and providing resources for millions of species. In this article, we embark on a journey into the enigmatic depths of oceans, uncovering their awe-inspiring beauty, ecological importance, and the urgent need to preserve these vital aquatic realms. The oceans present an endless expanse of azure, stretching as far as the eye can see. Their immensity invokes a sense of wonder and curiosity, calling explorers and scientists to unravel their secrets. Oceans are divided into five major basins: the Pacific, Atlantic, Indian, Southern, and Arctic Oceans. Each basin exhibits unique characteristics, marine life, and ecosystems, making every corner of the ocean a world of its own.",
    body2: "Oceans are teeming with life, from microscopic plankton to colossal whales. The marine ecosystems are rich and diverse, supporting an incredible array of flora and fauna. Coral reefs, often called 'rainforests of the sea,' harbor a stunning tapestry of colorful fish, crustaceans, and invertebrates. The open ocean is home to iconic creatures like dolphins, sharks, and sea turtles, while the abyssal zones house extraordinary deep-sea species adapted to survive in near-total darkness and extreme pressure. Oceans play a critical role in maintaining Earth's climate by acting as the planet's primary carbon sink. Phytoplankton, microscopic marine plants, absorb carbon dioxide during photosynthesis and release oxygen, making them the 'lungs of our planet.' Additionally, oceans absorb and store vast amounts of heat, helping to regulate global temperatures and weather patterns.",
    body3: "Beyond their ecological significance, oceans provide invaluable resources that sustain human life. Fishing and aquaculture industries rely on oceans for an abundant supply of seafood, supporting livelihoods and food security for millions worldwide. Moreover, oceans serve as a treasure trove of minerals and energy resources, making them crucial for economic development and technological advancements. Despite their significance, oceans face an array of threats due to human activities. Pollution, overfishing, habitat destruction, and climate change are jeopardizing marine ecosystems and biodiversity. Plastic pollution, in particular, poses a severe threat to marine life and habitats. Urgent conservation efforts are needed to protect and restore our oceans, preserving their delicate balance and ensuring the survival of the myriad species that depend on them. Establishing marine protected areas (MPAs) is a vital step towards safeguarding ocean ecosystems. MPAs serve as havens for marine life, allowing habitats to recover and species to thrive. These protected areas also contribute to the resilience of surrounding ecosystems, supporting sustainable fisheries and tourism.",
    body4: "The fate of our oceans rests in our hands. We must recognize the interconnectedness of all life on Earth and strive to be responsible stewards of our planet's blue heart. Raising awareness about the importance of oceans, reducing plastic waste, promoting sustainable fishing practices, and supporting conservation efforts are crucial steps we can take to protect these magnificent aquatic realms for generations to come. Oceans are the lifeblood of our planet, connecting all living beings and sustaining the delicate balance of Earth's ecosystems. The vastness and depth of oceans hold an enchanting allure, drawing us to explore their mysteries and cherish their bountiful gifts. As we navigate the challenges posed by human impacts on oceans, we are presented with an opportunity to protect and preserve these invaluable aquatic realms. By embracing sustainable practices, supporting conservation initiatives, and fostering a global sense of responsibility, we can ensure that oceans continue to thrive as the wellspring of life, offering inspiration, wonder, and boundless discoveries for generations to come.",
    image1: "<img src = 'img/card6-min.png'>",
    image2 : "<img src = 'img/card6-1-min.png'>",
    image3 : "<img src = 'img/card6-2-min.png'>"
  },
];

const combinedArticles = Array.from(hotPost).concat(pickedArticles, blogPosts);
localStorage.setItem('combinedArticles', JSON.stringify(combinedArticles));

displayHotPost();
displayPosts(0, 6);
displayPickedPosts();
openBlog();

categories.addEventListener('click', function(event) {
  totalCategory = 0;
  shownCategory = 0;
  shownArticles = 0;
  indexHolder = [];
  previousBtn.style.display = 'block';
  blogPostsContainer.style.marginBottom = '0px';

  getPosts();

  if (event.target.tagName === 'LI') {
    blogPostsContainer.innerHTML = '';
    selectedCategory = event.target.getAttribute('data-category');
    
    if (selectedCategory == "all") {
      for (let i = 0; i < 6; i++) {
        indexHolder.push(i);
      }
    }

    for (var i = 0; i < blogPosts.length; i++) {
      var post = blogPosts[i]; 
      var postCategory = post.category;

      if (selectedCategory == postCategory) {
        totalCategory++;
        indexHolder.push(i);
      }

      if ((postCategory === selectedCategory || selectedCategory === 'all') && shownArticles < 6) {
        var postHTML = `
      <div class="post" data-category="${post.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${post.image}" alt = "${post.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${post.date}</h6>
            <img src="${post.divider}">
            <h6>${post.author}</h6>
          </div>
          <div class="category">
            ${post.categoryIcon}
            <h6>${post.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${post.title}</h2>
      <p>${post.summary}</p>
      </div>
      </div>
        `;
      blogPostsContainer.innerHTML += postHTML;
      shownArticles++;

      if (postCategory == selectedCategory) {
        shownCategory++;
        }
      } 
    }
    getPosts();

    for (let i = 0; i < indexHolder.length; i++) {
      let currentPost = posts[i];

      if(!currentPost) return;

      let clickableArea_1 = currentPost.querySelector(".post-image-holder");
      let clickableArea_2 = currentPost.querySelector(".article-title");

      clickableArea_1.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
      clickableArea_2.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
    }
  }
  disablePrevBut();
});

mobileCategories.addEventListener("click", function(event){
  totalCategory = 0;
  shownCategory = 0;
  shownArticles = 0;
  indexHolder = [];
  previousBtn.style.display = 'block';
  blogPostsContainer.style.marginBottom = '0px';
  
  getPosts();

  if (event.target.tagName === 'LI' || event.target.tagName === 'IMG' || event.target.tagName === 'H5') {
    blogPostsContainer.innerHTML = '';
    selectedCategory = event.target.getAttribute('data-category');

    if (selectedCategory == "all") {
      for (let i = 0; i < 6; i++) {
        indexHolder.push(i);
      }
    }

    for (var i = 0; i < blogPosts.length; i++) {
      var post = blogPosts[i];
      var postCategory = post.category;

      if (selectedCategory == postCategory) {
        totalCategory++;
        indexHolder.push(i);
      }

      if ((postCategory === selectedCategory || selectedCategory === 'all') && shownArticles < 6) {
        var postHTML = `
      <div class="post" data-category="${post.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${post.image}" alt = "${post.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${post.date}</h6>
            <img src="${post.divider}">
            <h6>${post.author}</h6>
          </div>
          <div class="category">
            ${post.categoryIcon}
            <h6>${post.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${post.title}</h2>
      <p>${post.summary}</p>
      </div>
      </div>
        `;
        blogPostsContainer.innerHTML += postHTML;
        shownArticles++;

        if (postCategory == selectedCategory) {
          shownCategory++;
        }
      }
    }
    getPosts();

    for (let i = 0; i < indexHolder.length; i++) {
      let currentPost = posts[i];

      let clickableArea_1 = currentPost.querySelector(".post-image-holder");
      let clickableArea_2 = currentPost.querySelector(".article-title");
  
      clickableArea_1.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
      clickableArea_2.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
    }

  }
  disablePrevBut();
});

previousBtn.addEventListener("click", () => {
  getPosts();

  if(selectedCategory == 'all') {
    displayPosts(loadedPosts, loadedPosts + 6);
    openBlog();
  }
  else {
    var filteredPosts = [];

    for (var i = 0; i < blogPosts.length; i++) {
      var post = blogPosts[i];

      if (post.category == selectedCategory) {
        filteredPosts.push(post);
      }
    }

    var x = filteredPosts.length - (filteredPosts.length - shownCategory);

    for (var i = x; i < x + 6; i++) {
      getPosts();

      var filteredPost = filteredPosts[i];

      if(!filteredPost) {
        for (let i = 0; i < indexHolder.length; i++) {
          let currentPost = posts[i];
    
          if(!currentPost) return;
    
          let clickableArea_1 = currentPost.querySelector(".post-image-holder");
          let clickableArea_2 = currentPost.querySelector(".article-title");
    
          clickableArea_1.addEventListener("click", function() {
            var selectedPost = blogPosts[indexHolder[i]];
            selectedArticleIndex = indexHolder[i] + 7;
            localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
            sendInfoToBlogPage(selectedPost);
          });
          clickableArea_2.addEventListener("click", function() {
            var selectedPost = blogPosts[indexHolder[i]];
            selectedArticleIndex = indexHolder[i] + 7;
            localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
            sendInfoToBlogPage(selectedPost);
          });
        }
        disablePrevBut();
        return;
      }

      var postHTML = `
      <div class="post" data-category="${filteredPost.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${filteredPost.image}" alt = "${filteredPost.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${filteredPost.date}</h6>
            <img src="${filteredPost.divider}">
            <h6>${filteredPost.author}</h6>
          </div>
          <div class="category">
            ${filteredPost.categoryIcon}
            <h6>${filteredPost.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${filteredPost.title}</h2>
      <p>${filteredPost.summary}</p>
      </div>
      </div>
        `;
      blogPostsContainer.innerHTML += postHTML;
      shownCategory++;
    }

    for (let i = 0; i < indexHolder.length; i++) {
      let currentPost = posts[i];

      if(!currentPost) return;

      let clickableArea_1 = currentPost.querySelector(".post-image-holder");
      let clickableArea_2 = currentPost.querySelector(".article-title");

      clickableArea_1.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
      clickableArea_2.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
    }
  }
  getPosts();
  disablePrevBut();
});

function getPosts() {
  posts = document.getElementsByClassName('post');
  postCount = posts.length;
  loadedPosts = posts.length;
} 

function displayPosts(from, to) {
  for (var i = from; i < to; i++) {
    getPosts();
    if(i == blogPosts.length) break;

    var post = blogPosts[i];
    var postCategory = post.category;

    if (postCategory === selectedCategory || selectedCategory === 'all') {
      var postHTML = `
      <div class="post" data-category="${post.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${post.image}" alt = "${post.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${post.date}</h6>
            <img src="${post.divider}">
            <h6>${post.author}</h6>
          </div>
          <div class="category">
            ${post.categoryIcon}
            <h6>${post.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${post.title}</h2>
      <p>${post.summary}</p>
      </div>
      </div>
      `;
      blogPostsContainer.innerHTML += postHTML;
    }
  }

  disablePrevBut();
}

function displayHotPost() {
  var hotPostHTML = `
    ${hotPost[0].image}
    <div class="label">HOT</div>
    <div class="hot-post-content">
      <h1 class = "hot-post-title">${hotPost[0].title}</h1>
      <p class="hot-post-sum">${hotPost[0].summary}</p>
    </div>
    <div class="cat-date">
      <h6 class="hot-post-cat">${hotPost[0].category}</h6>
      <div class="date">
        <h6>${hotPost[0].date}</h6>
        <img src="img/Vector 5.svg">
        <h6>${hotPost[0].author}</h6>
      </div>
    </div>
    <button class="hot-post-btn">Read the article</button>
      `;
  
  hotPostContainer.innerHTML += hotPostHTML;
}

function displayPickedPosts() {
  for (let i = 0; i < cards.length; i++) {
    var card = cards[i];

    card.querySelector(".sum").innerHTML = pickedArticles[i].title;
    card.querySelector(".card-category span").innerHTML = pickedArticles[i].category;
    card.querySelector(".cardImg").innerHTML = pickedArticles[i].image;

    card.addEventListener("click", function() {
      sendInfoToBlogPage(pickedArticles[i]);
      selectedArticleIndex = i + 1;
      localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
    });
  }
}

function disablePrevBut() {
  if ((postCount == blogPosts.length || postCount == 0) || (shownCategory, totalCategory != 0 && shownCategory == totalCategory)) {
      previousBtn.style.display = 'none';
      blogPostsContainer.style.marginBottom = '200px';
    } 
    else {
      previousBtn.style.display = 'block';
      blogPostsContainer.style.marginBottom = '0px';
    }
}

function sendInfoToBlogPage(selectedPost) {
  window.location.href = `blog.html?title=${encodeURIComponent(selectedPost.title)}&body=${encodeURIComponent(selectedPost.body)}&body2=${encodeURIComponent(selectedPost.body2)}&body3=${encodeURIComponent(selectedPost.body3)}&body4=${encodeURIComponent(selectedPost.body4)}&image1=${encodeURIComponent(selectedPost.image1)}&image2=${encodeURIComponent(selectedPost.image2)}&image3=${encodeURIComponent(selectedPost.image3)}`;
}

function openBlog() {
  getPosts();
  var hotPostTitle = document.querySelector(".hot-post-title");
  var hotPostBtn = document.querySelector(".hot-post-btn");

  hotPostTitle.addEventListener("click", function() {
    sendInfoToBlogPage(combinedArticles[0]);
    selectedArticleIndex = 0;
    localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
  });
  hotPostBtn.addEventListener("click", function() {
    sendInfoToBlogPage(combinedArticles[0]);
    selectedArticleIndex = 0;
    localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
  });

  for (let i = 0; i < posts.length; i++) {
    let currentPost = posts[i];

    let clickableArea_1 = currentPost.querySelector(".post-image-holder");
    let clickableArea_2 = currentPost.querySelector(".article-title");

    clickableArea_1.addEventListener("click", function() {
      var selectedPost = blogPosts[i];
      selectedArticleIndex = i + 7;
      localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
      sendInfoToBlogPage(selectedPost);
    });
    clickableArea_2.addEventListener("click", function() {
      var selectedPost = blogPosts[i];
      selectedArticleIndex = i + 7;
      localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
      sendInfoToBlogPage(selectedPost);
    });
  }
}

/* topic scroll offset */

document.addEventListener('DOMContentLoaded', function() {
  var link = document.querySelector('.navbar-link-2');
  var categories = document.querySelector('#categories');
  
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var offset = 150;
    var targetPosition = categories.offsetTop - offset;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var link = document.querySelectorAll('.mt');
  var categories = document.querySelector('#posts');
  
  link.forEach(element => {
    element.addEventListener('click', function(event) {
      event.preventDefault();
      isClicked = false;
      menuButtonImg.setAttribute("src", "img/menu-btn.svg");
      mobileMenu.style.transform = "translateX(-100%)";
      body.style.overflowY = "overlay";
      body.style.paddingRight = "0px";
      var offset = 150;
      var targetPosition = categories.offsetTop - offset;

      localStorage.setItem('targetPosition', targetPosition);

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Read the URL parameter
  const params = new URLSearchParams(window.location.hash.slice(1));
  const targetPosition = params.get('target');

  if (targetPosition) {
    totalCategory = 0;
    shownCategory = 0;
    shownArticles = 0;
    indexHolder = [];
    getPosts();
    blogPostsContainer.innerHTML = '';

    if (localStorage.getItem("a") === "true") {
      selectedCategory = localStorage.getItem("selectedCategory");
      localStorage.setItem("a", false);
    }
    else {
      localStorage.setItem("selectedCategory", "all");
      selectedCategory = localStorage.getItem("selectedCategory");
    }

    if (localStorage.getItem("selectedCategory") === "all") {
      for (let i = 0; i < 6; i++) {
        indexHolder.push(i);
      }
    }

    for (var i = 0; i < blogPosts.length; i++) {
      var post = blogPosts[i];
      var postCategory = post.category;

      if (selectedCategory == postCategory) {
        totalCategory++;
        indexHolder.push(i);
      }

      if ((postCategory === selectedCategory || selectedCategory === 'all') && shownArticles < 6) {
        var postHTML = `
      <div class="post" data-category="${post.category}">
      <div class = "post-image-holder">
        <img loading="lazy" class="post-img" width="515" height="302" src="${post.image}" alt = "${post.title}">
        <div class="date-category">
          <div class="date post-date">
            <h6>${post.date}</h6>
            <img src="${post.divider}">
            <h6>${post.author}</h6>
          </div>
          <div class="category">
            ${post.categoryIcon}
            <h6>${post.category}</h6>
          </div>
        </div>
      </div>
      <div class="post-title-sum">
      <h2 class = 'article-title'>${post.title}</h2>
      <p>${post.summary}</p>
      </div>
      </div>
        `;
        blogPostsContainer.innerHTML += postHTML;
        shownArticles++;

        if (postCategory == selectedCategory) {
          shownCategory++;
        }
      }
    }
    getPosts();

    for (let i = 0; i < indexHolder.length; i++) {
      var currentPost = posts[i];

      let clickableArea_1 = currentPost.querySelector(".post-image-holder");
      let clickableArea_2 = currentPost.querySelector(".article-title");
  
      clickableArea_1.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
      clickableArea_2.addEventListener("click", function() {
        var selectedPost = blogPosts[indexHolder[i]];
        selectedArticleIndex = indexHolder[i] + 7;
        localStorage.setItem("selectedArticleIndex", selectedArticleIndex);
        sendInfoToBlogPage(selectedPost);
      });
    }

    disablePrevBut();

    // Scroll to the specified position
    window.scrollTo({
      top: parseInt(targetPosition),
      behavior: 'smooth'
    });
  }
});


/* scroll revealing */

ScrollReveal().reveal('.post', { distance: '150%', origin: 'bottom', duration: 600, opacity: 0 });
ScrollReveal().reveal('.first-card', { distance: '350px', duration: 700, origin: 'top'});
ScrollReveal().reveal('.second-card', { distance: '350px', duration: 700, origin: 'top', delay: 200 });