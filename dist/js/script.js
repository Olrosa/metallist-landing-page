window.addEventListener("DOMContentLoaded", function() { 
    const phoneInputs = document.querySelectorAll('.phone-input');
    phoneInputs.forEach(phoneInput => {
        phoneInput.addEventListener('focus', function(event) {
        event.target.value = '+7 '; // Устанавливаем значение "+7" при фокусировке на поле ввода
        });
    
        phoneInput.addEventListener('input', function(event) {
        let phoneNumber = event.target.value.replace(/\D/g, ''); // Удаляем все символы, кроме цифр
        phoneNumber = phoneNumber.slice(0, 11); // Ограничиваем длину номера телефона до 11 символов
    
        // Форматируем номер телефона в виде +7 (XXX) XXX-XX-XX
        const formattedPhoneNumber = phoneNumber.replace(/^(\d{1})?(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?$/, function(match, p1, p2, p3, p4, p5) {
            let formattedNumber = '';
            if (p1) formattedNumber += '+7 ';
            if (p2) formattedNumber += '(' + p2;
            if (p3) formattedNumber += ') ' + p3;
            if (p4) formattedNumber += '-' + p4;
            if (p5) formattedNumber += '-' + p5;
            return formattedNumber;
        });
    
        event.target.value = formattedPhoneNumber;
        });
    });
    
    //Swiper initialization
    new Swiper('.services__slider', {
        slidesPerView: 1,
        breakpoints: {
            1024: {
              slidesPerView: 2, // Если ширина экрана меньше 1024 пикселей, отображать только 1 слайд
            },
        },
        pagination: {
            el: '.slider__points',
            type: 'bullets', 
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
            clickable: true,
            bulletClass: 'slider__point',
            bulletActiveClass: 'slider__point_active'
        },
    });
    const buildingsSlider = new Swiper('.buildings__slider', {
        slidesPerView:1,
        breakpoints: {
            600: {
                grid: {
                    rows: 2,
                },
                spaceBetween: 20,
            },
            780: {
                slidesPerView:2,
                grid: {
                    rows: 2,
                },
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                },
                spaceBetween: 20,
            },
        },
        pagination: {
            el: '.slider__points',
            type: 'bullets', 
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
            clickable: true,
            bulletClass: 'slider__point',
            bulletActiveClass: 'slider__point_active'
        },
        navigation: {
            nextEl: '.slider__arrow_next',
            prevEl: '.slider__arrow_prev',
          },
    })
});




