let mokuska = {
    photo: './images/01.jpeg',
    thumbnail: './images/01_kicsi.jpeg',
    title: 'Mókus',
    description: 'Mókuska, mókuska felmászott a fára, leesett, leesett, kitörött a lába'
};

let kacsa = {
    photo: './images/02.jpg',
    thumbnail: './images/02_kicsi.jpeg',
    title: 'Kacsa',
    description: 'Kis kacsa úszik fekete tóban'
};

let vidra = {
    photo: './images/03.jpg',
    thumbnail: './images/03_kicsi.jpeg',
    title: 'Vidra',
    description: 'Vidra ki halat fog'
};

let mehecske = {
    photo: './images/04.jpg',
    thumbnail: './images/04_kicsi.jpeg',
    title: 'Méhecske',
    description: 'A méhek élete rövid de dolgos'
};

let to = {
    photo: './images/05.jpg',
    thumbnail: './images/05_kicsi.jpg',
    title: 'Tó',
    description: 'A befagyott tó látványa káprázatos'
};

let solyom = {
    photo: './images/06.jpg',
    thumbnail: './images/06_kicsi.jpg',
    title: 'Sólyom',
    description: 'Szálj fel sólyom, fel a magasba'
};

let hangya = {
    photo: './images/07.jpeg',
    thumbnail: './images/07_kicsi.jpg',
    title: 'Hangya',
    description: 'Dolgos hangyák egész évben munkálkodnak'
};

let kutyak = {
    photo: './images/08.jpg',
    thumbnail: './images/08_kicsi.jpg',
    title: 'Kutyák',
    description: 'Kutya az ember legjobb barátja'
};

let szorf = {
    photo: './images/09.jpeg',
    thumbnail: './images/09_kicsi.jpeg',
    title: 'Szörf',
    description: 'Szörfözés a jéghideg óceánban'
};

let csonak = {
    photo: './images/10.jpeg',
    thumbnail: './images/10_kicsi.jpeg',
    title: 'Csónakok',
    description: 'Befagyot tóban megrekedt csónakok'
};

let currentPhoto = 5;
let imagesData = [mokuska, kacsa, vidra, mehecske, to, solyom, hangya, kutyak, szorf, csonak];
//< inicializálás rész vége >-----------------------------------------------------------------
// loadPhoto változtatja meg a fő képet és szövegeit.
let loadPhoto = (number) => {
    $('#photo').attr('src', imagesData[number].photo);
    $('#photo-title').text(imagesData[number].title);
    $('#photo-description').text(imagesData[number].description);

    if(number <= 6 && number >= 2) {
        $('#thumbnailImages1').attr('src', imagesData[number-3].thumbnail);
        $('#thumbnailImages2').attr('src', imagesData[number-2].thumbnail);
        $('#thumbnailImages3').attr('src', imagesData[number-1].thumbnail);
        $('#thumbnailImages4').attr('src', imagesData[number].thumbnail);
        $('#thumbnailImages5').attr('src', imagesData[number+1].thumbnail);
        $('#thumbnailImages6').attr('src', imagesData[number+2].thumbnail);
        $('#thumbnailImages7').attr('src', imagesData[number+3].thumbnail);
    }

};
    
loadPhoto(currentPhoto);




$('#ball').click(() => {
    if(currentPhoto > 0) {
    currentPhoto--;
    }
    loadPhoto(currentPhoto);
  });

  $('#jobb').click(() => {
    if(currentPhoto < 10) {
    currentPhoto++;
    }
    loadPhoto(currentPhoto);
  });


  
imagesData.forEach(function (value) {
    //$('#photo-title').text(value.description);

    
});

