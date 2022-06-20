/*
- Formattare la data da americata a locale.
- Gestire assena immagine profilo con solo le iniziali del'utente
- Al click Mi piace, se abbiamo gia' cliccato dobbiamo decrementare il contatore e cambiare colore
*/

// Data formato italiano
const currentDate = new Date().toLocaleDateString();

// Creazione Array di tutte le info del post
const post = [
    {
        id: 1,
        name: 'Sofia Perlari',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: currentDate,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/476/300/300.jpg?hmac=tLlHeIdBoPqgpgAQhkNffWra3o59dd-m0UkLxwiL8aM',
        likesCounter: 454
    },
    {
        id: 1,
        name: 'Liam Willstone',
        profilePhoto: 'https://i.picsum.photos/id/28/300/300.jpg?hmac=G2cdhmuBEY2rDoSefRxiQLssBctP0GCKz_UhmEU1JIA',
        publishDate: currentDate,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: null,
        likesCounter: 239
    },
    {
        id: 1,
        name: 'Anya West',
        profilePhoto: null,
        publishDate: currentDate,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/9/300/300.jpg?hmac=Zf_elnyFDTPzb9nUe7m1J5g080C689yQsh3U8_DhHWE',
        likesCounter: 683
    }
]


// STAMPARE I DATI DELL'ARRAY POST NELL'HTML 
const allPost = allPostFun(post);



// -------------------------------
//         LIKE BTN EVENT
// -------------------------------
// AL CLICK DEL MI PIACE CAMBIA COLORE E AUMENTA IL CONTEGGIO DEI LIKES
const likeBtn = document.querySelectorAll('.js-like-button');
const allLikes = document.querySelectorAll('.js-likes-counter')
// Scorro tutti i BTN di likeBtn
for(let i = 0; i < likeBtn.length; i++) {
    const allLikeBtn = likeBtn[i];
   
    // Inizio dell'eventi click sul bottone Mi piace
    allLikeBtn.addEventListener('click', 
    function(event) {
        event.preventDefault();

        // Rendiamo cliccabile solo se il BTN non ha gia' classe .like-button--liked inserito
        if(!this.classList.contains('like-button--liked')) {
            
            // Aggiungiamo la classse clicked per indicare che e' gia' stata cliccata 
            this.classList.add('like-button--liked')
                
            // Scorriamo anche la lista dei likes effettivi per indicizzazione
            const relatedLike = allLikes[i];

            // Ci prendiamo il valore dei like ottenuti e li trasformiamo in numeri
            let numerOfLikes = parseInt(relatedLike.innerHTML);

            // Aggiungiamo di 1
            numerOfLikes++;
                
            // Inseriamo il numero incrementato nell'HTML
            relatedLike.innerHTML = numerOfLikes;
        }
    });
   
}


    



// -----------------------
//       FUNCTION
// -----------------------

// STAMPARE I DATI DELL'ARRAY POST NELL'HTML 
// Scorrere tutti gli oggetti dell'array post
function allPostFun(eachPost) {
    for(let i = 0; i < eachPost.length; i++) {
        const allPostInfo = eachPost[i];
        
        drawAllInfoPost(allPostInfo);
    }
}

// Stamparli nell'html
function drawAllInfoPost(info) {
    const postList = document.querySelector('.posts-list');

    const {id, name, profilePhoto, publishDate, postDescription, postImage, likesCounter} = info;

    const newPost = `
    <div class="post">
        <div class="post__header">
            <div class="post-meta">                    
                ${profilePhoto === null ? getProfileImageDefault() : getProfileImage(profilePhoto)}
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${publishDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postDescription}</div>
        
        ${postImage === null ? `` : getPostImage(postImage)}
        
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="1">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter}</b> persone
                </div>
            </div> 
        </div>            
    </div>
    `

    postList.innerHTML += newPost;
}



// ------------------------
//   UTILITIES FUNCTION
// ------------------------
function getPostImage(postedImage) {
    return `
    <div class="post__image">
        <img src="${postedImage}" alt="">
    </div>
    `
}

function getProfileImage(photoProfile) {
    return ` 
    <div class="post-meta__icon">
        <img class="profile-pic" src="${photoProfile}" alt="Phil Mangione">                    
    </div>
    `
}

function getProfileImageDefault() {
    return ` 
    <div class="post-meta__icon profile-pic-default">
        AW                    
    </div>
    `
}

