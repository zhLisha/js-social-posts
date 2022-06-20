/*
- Creazione Array dei post con i seguenti oggetti:
    a. Id Post con numero da 1 a n
    b. Nome Autore
    c. Foto autore
    d. Data in formato americano mm-dd-yyyy
    e. Testo del post
    f. Immagine (Non tutti i post devono avere un'immagine)
    g. Numero likes
- Stampiamo i dati dell'array nell'HTML
- Al click del tasto mi piace, il colore di quest'ultimo cambia e si incrementano i like relativi. 
*/



// Creazione Array di tutte le info del post
const post = [
    {
        id: 1,
        name: 'Sofia Perlari',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: '06/22/2019',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/476/300/300.jpg?hmac=tLlHeIdBoPqgpgAQhkNffWra3o59dd-m0UkLxwiL8aM',
        likesCounter: 454
    },
    {
        id: 1,
        name: 'Liam Willstone',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: '06/22/2019',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/17/300/300.jpg?hmac=KxvSSOugjB6gpoBNWDjhfj5DxC8fvBVrp-vDzzFAMPo',
        likesCounter: 239
    },
    {
        id: 1,
        name: 'Anya West',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: '06/22/2019',
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/9/300/300.jpg?hmac=Zf_elnyFDTPzb9nUe7m1J5g080C689yQsh3U8_DhHWE',
        likesCounter: 683
    }
]

console.log('Array post', post);

// STAMPARE I DATI DELL'ARRAY POST NELL'HTML 
const allPost = allPostFun(post);



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
                <div class="post-meta__icon">
                <img class="profile-pic" src="${profilePhoto}" alt="Phil Mangione">                    
            </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${name}</div>
                    <div class="post-meta__time">${publishDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postDescription}</div>
        <div class="post__image">
            <img src="${postImage}" alt="">
        </div>
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
