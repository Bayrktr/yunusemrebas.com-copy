const courseImages1 = document.querySelector('.course-images-1');

const courseImagesHeight1 = courseImages1.offsetHeight;
const courseImagesOffsetTop1 = courseImages1.offsetTop;

const courseImages2 = document.querySelector('.course-images-2');

const courseImagesHeight2 = courseImages2.offsetHeight;
const courseImagesOffsetTop2 = courseImages2.offsetTop;

const courseImages3 = document.querySelector('.course-images-3');

const courseImagesHeight3 = courseImages3.offsetHeight;
const courseImagesOffsetTop3 = courseImages3.offsetTop;



window.addEventListener('scroll', () => {
    // Şu anki yükseklik değerini hesaplayın
    const currentScrollY = window.scrollY;

    console.log(window.innerWidth)

    // Yükseklik değeri ve yukarıdan olan mesafe değeri eşitlendiğinde
    if (currentScrollY > courseImagesOffsetTop1-courseImagesHeight1/1.2) {
        // Elemanın boyutunu küçültmek için transform özelliğine "scale(0.9)" değerini atayın
        courseImages1.style.transform = 'scale(0.8)';
    } else {
        // Eğer yükseklik değeri ve yukarıdan olan mesafe değeri eşitlenmediyse, transform özelliğini kaldırın
        courseImages1.style.transform = 'none';
    }

    if (currentScrollY > courseImagesOffsetTop2-courseImagesHeight2) {
        // Elemanın boyutunu küçültmek için transform özelliğine "scale(0.9)" değerini atayın
        courseImages2.style.transform = 'scale(0.8)';
    } else {
        // Eğer yükseklik değeri ve yukarıdan olan mesafe değeri eşitlenmediyse, transform özelliğini kaldırın
        courseImages2.style.transform = 'none';
    }

    if (currentScrollY > courseImagesOffsetTop3-courseImagesHeight3) {
        // Elemanın boyutunu küçültmek için transform özelliğine "scale(0.9)" değerini atayın
        courseImages3.style.transform = 'scale(0.8)';
    } else {
        // Eğer yükseklik değeri ve yukarıdan olan mesafe değeri eşitlenmediyse, transform özelliğini kaldırın
        courseImages3.style.transform = 'none';
    }
});
