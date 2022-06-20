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
        publishDate: 06/22/2019,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/476/300/300.jpg?hmac=tLlHeIdBoPqgpgAQhkNffWra3o59dd-m0UkLxwiL8aM',
        likesCounter: 454
    },
    {
        id: 1,
        name: 'Liam Willstone',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: 06/22/2019,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/17/300/300.jpg?hmac=KxvSSOugjB6gpoBNWDjhfj5DxC8fvBVrp-vDzzFAMPo',
        likesCounter: 239
    },
    {
        id: 1,
        name: 'Anya West',
        profilePhoto: 'https://i.picsum.photos/id/653/300/300.jpg?hmac=hF6OcvJSGl31yRN1m7iHxShvwbPLYvNv3yPimTdbGDE',
        publishDate: 06/22/2019,
        postDescription: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        postImage: 'https://i.picsum.photos/id/9/300/300.jpg?hmac=Zf_elnyFDTPzb9nUe7m1J5g080C689yQsh3U8_DhHWE',
        likesCounter: 683
    }
]

console.log('Array post', post);