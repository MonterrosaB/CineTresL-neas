const stars = document.querySelectorAll('.star');

stars.forEach(function(star, cartelera){
    star.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars[i].classList.remove('checked');
        }
    })
})

const stars1 = document.querySelectorAll('.star1');

stars1.forEach(function(star1, cartelera){
    star1.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars1[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars1[i].classList.remove('checked');
        }
    })
})

const stars2 = document.querySelectorAll('.star2');

stars2.forEach(function(star2, cartelera){
    star2.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars2[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars2[i].classList.remove('checked');
        }
    })
})

const stars3 = document.querySelectorAll('.star3');

stars3.forEach(function(star3, cartelera){
    star3.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars3[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars3[i].classList.remove('checked');
        }
    })
})

const stars4 = document.querySelectorAll('.star4');

stars4.forEach(function(star4, cartelera){
    star4.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars4[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars4[i].classList.remove('checked');
        }
    })
})

const stars5 = document.querySelectorAll('.star5');

stars5.forEach(function(star5, cartelera){
    star5.addEventListener('click', function(){
        for(let i=0; i<=cartelera; i++){
            stars5[i].classList.add('checked');
        }
        for(let i=cartelera+1; i<stars.length; i++) {
            stars5[i].classList.remove('checked');
        }
    })
})

