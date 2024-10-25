$(document).ready(() => {
    $('.modal_wrap').css('display', 'none');
    setTimeout(() => {
        $('.loading').remove();
        $('.modal').toggleClass('hide');
        $('.modal_wrap').css('display', '');
    }, 1000);

    const audio = document.getElementById('audioPlayer');
    audio.currentTime = 4;
    $('.audio_toggle').on('click', () => {
        $('.audio_toggle').toggleClass('play');
        if ($('.mask_text')[1].innerText === 'on') {
            $('.mask_text')[1].innerText = 'off';
            audio.pause();
        } else {
            $('.mask_text')[1].innerText = 'on';
            audio.play();
        }
    });


    ['.event_banner', '.event_gnb_menu'].forEach(ele => $(ele).on('click', () => {
        $('.event_banner').toggleClass('-open');
    }));

    $('.event_gnb_gamestart').on('click', () => {
        window.open("https://galaxy.beanfun.com/webapi/view/login/twp?redirect_url=https://warsofprasia.beanfun.com/Main");
    });

    $('.detail_p1 .video_open').on('click', () => {
        openVideo("_y8x_gah-_Y");
    });

    $('.subcontent .video_open').on('click', () => {
        openVideo("3MKnWVeWpJw");
    });

    $('.modal_close').on('click', () => {
        $('.modal').css('opacity', '0');
        $('.plate_modal').toggleClass('-active');
        $('.modal.type--youtube').toggleClass('hide');
        $('.modal_box_veil').toggleClass('-hide');
        $('.youtube--2').remove();
    });

    $('.portrait span')[2].classList.add('active');
    $('.list li')[2].classList.add('active');
    $('.info_wrap')[2].classList.add('active');

    $('.list li').on('click', function (e) {
        $('.list li').removeClass('active');
        $('.portrait span').removeClass('active');
        $('.info_wrap').removeClass('active');
        e.currentTarget.classList.add('active');
        const index = $(this).index();
        $('.portrait span')[index].classList.add('active');
        $('.info_wrap')[index].classList.add('active');
    });

    const pcSwiper = () => {
        const swiper = new Swiper('.section-pages', {
            direction: 'vertical',
            touchReleaseOnEdges: true,
            mousewheel: {
                releaseOnEdges: true,
            },
            loop: false,
            slideActiveClass: 'animated',
            noSwiping: true,
            noSwipingSelector: 'button',
            autoHeight: true,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: false,
            on: {
                init: (swiper) => {
                    $('.gotop').on('click', () => {
                        swiper.slideTo(0);
                    });
                    $('.UNI-footer').css('display', 'none');

                    $('.scroll').on('click', () => {
                        swiper.slideTo(1);
                    });

                    // if ($(window).width() > 1200) {
                    //     document.querySelector('.swiper-slide').addEventListener('touchstart', (event) => {
                    //         event.preventDefault();
                    //     }, { passive: true });

                    //     document.querySelector('.swiper-slide').addEventListener('touchmove', (event) => {
                    //         event.preventDefault();
                    //     }, { passive: true });

                    //     document.querySelector('.swiper-slide').addEventListener('wheel', e => {
                    //         swiper.allowSlidePrev = true;
                    //         swiper.allowSlideNext = true;
                    //         const currentSlide = swiper.slides[swiper.activeIndex];
                    //         const slideScrollTop = currentSlide.scrollTop;
                    //         const scrollHeight = currentSlide.scrollHeight;
                    //         const clientHeight = currentSlide.clientHeight;
                    //         const isAtTop = slideScrollTop === 0;
                    //         const isAtBottom = (slideScrollTop + clientHeight >= scrollHeight);
                    //         if (swiper.realIndex === 0) {
                    //             if (isAtTop) {
                    //                 swiper.allowSlideNext = false;
                    //                 e.stopPropagation();
                    //             } else if (isAtBottom) {
                    //                 swiper.allowSlideNext = true;
                    //             } else {
                    //                 swiper.allowSlideNext = false;
                    //                 swiper.allowSlidePrev = false;
                    //                 e.stopPropagation();
                    //             }
                    //         } else if ([1, 2, 3].includes(swiper.realIndex)) {
                    //             e.stopPropagation();
                    //             if (isAtTop) {
                    //                 swiper.allowSlideNext = false;
                    //                 swiper.allowSlidePrev = true;
                    //             } else if (isAtBottom) {
                    //                 swiper.allowSlidePrev = false;
                    //                 swiper.allowSlideNext = true;
                    //             } else {
                    //                 swiper.allowSlideNext = false;
                    //                 swiper.allowSlidePrev = false;
                    //             }
                    //         } else {
                    //             if (isAtTop) {
                    //                 swiper.allowSlidePrev = true;
                                   
                    //             } else if (isAtBottom) {
                    //                 swiper.allowSlidePrev = false;
                    //             } else {
                    //                 swiper.allowSlideNext = false;
                    //                 swiper.allowSlidePrev = false;
                    //             }
                    //             e.stopPropagation();
                    //         }
                    //     }, { passive: true });
                    // }
                },
                slideChange: (swiper) => {
                    // const removeAnimate = ['#p1Video', '.detail_p1', '.title', '.detail_p2', '.title', '.title_p2', '.dimmed_p2', '.title_p3', '.detail_p3', '.title_p4', '.bg_p4', '.visible-roomy'];
                    // removeAnimate.forEach(ele => $(ele).removeClass('animate'));
                    ['active', 'point'].forEach(cl => ['.depth_1', '.depth_2'].forEach(ele => $(ele).removeClass(cl)));
                    $('.swiper-slide').off('scroll');
                    $('.swiper-slide').removeClass('scrollable');
                    $('.gotop').removeClass('show');
                    $('.UNI-footer').css('display', 'none');

                    if (swiper.realIndex === 0) {
                        // addAnimateClass(['.detail_p1', '.title']);
                        $('.swiper-slide')[0].classList.add('scrollable');
                        $('.depth_1')[0].classList.add('active');
                        $('.depth_1')[0].classList.add('point');
                    } else if (swiper.realIndex === 1) {
                        $('.gotop').addClass('show');
                        // addAnimateClass(['.detail_p2', '.title_p2', '.dimmed_p2']);
                        $('.swiper-slide')[1].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_1')[1].classList.add('point');
                    } else if (swiper.realIndex === 2) {
                        $('.gotop').addClass('show');
                        // addAnimateClass(['.title_p3', '.detail_p3']);
                        $('.swiper-slide')[2].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_2')[0].classList.add('active');
                        $('.depth_2')[0].classList.add('point');
                    } else if (swiper.realIndex === 3) {
                        $('.gotop').addClass('show');
                        // addAnimateClass(['.title_p4', '.bg_p4']);
                        $('.swiper-slide')[3].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_2')[1].classList.add('active');
                        $('.depth_2')[1].classList.add('point');
                    } else if (swiper.realIndex === 4) {
                        $('.gotop').addClass('show');
                        // addAnimateClass(['.visible-roomy', '.title_p5', '.detail_p5']);
                        $('.swiper-slide')[4].classList.add('scrollable');
                        $('.depth_1')[1].classList.add('active');
                        $('.depth_2')[2].classList.add('active');
                        $('.depth_2')[2].classList.add('point');
                    }
                },
                slideChangeTransitionStart: (swiper) => {
                    swiper.allowTouchMove = false;
                },
                slideChangeTransitionEnd: (swiper) => {
                    swiper.allowTouchMove = true;
                },
                touchStart: (swiper, event) => {
                    if ($(window).width() <= 1200) {
                        handleSmallHeight(swiper, event);
                    }
                },
                touchMove: (swiper, event) => {
                    if ($(window).width() <= 1200) {
                        handleSmallHeight(swiper, event);
                    }
                }
            }
        });

        $('.swiper-slide')[0].classList.add('scrollable');
        swiper.slideTo(0);
        $('.depth_1')[0].classList.add('active');
        $('.depth_1')[0].classList.add('point');

        for (let i = 0; i < 5; i++) {
            addPageClick(i, swiper);
        }
    };

    const mobileSwiper = () => {
        new Swiper('.section-pages', {
            direction: 'vertical',
            slidesPerView: "auto",
            touchReleaseOnEdges: true,
            mousewheel: {
                releaseOnEdges: true,
                enabled: true,
            },
            loop: false,
            freeMode: {
                enabled: false,
                sticky: false,
                momentumBounce: false,
            },
            slideActiveClass: 'animated',
            autoHeight: true,
            speed: 1000,
            passiveListeners: false,
            on: {
                init: () => {
                    window.addEventListener('scroll', () => {
                        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                        if (scrollTop > 0) {
                            $('.gotop').addClass('show');
                        } else {
                            $('.gotop').removeClass('show');
                        }
                    });

                    $('.gotop').on('click', () => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    });
                }
            }
        });
    };

    if ($(window).width() > 768) {
        pcSwiper();
    } else {
        $('.event_gnb').toggleClass('type_default');
        $('.event_gnb').toggleClass('type_clear');
        mobileSwiper();
    }
});

const handleSmallHeight = (swiper) => {
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    const currentSlide = swiper.slides[swiper.activeIndex];
    const slideScrollTop = currentSlide.scrollTop;
    const scrollHeight = currentSlide.scrollHeight;
    const clientHeight = currentSlide.clientHeight;
    const isAtTop = slideScrollTop === 0;
    const isAtBottom = (slideScrollTop + clientHeight >= scrollHeight);

    if (isAtTop) {
        swiper.allowTouchMove = true;
        swiper.allowSlideNext = false;
    } else if (isAtBottom) {
        swiper.allowSlidePrev = false;
        swiper.allowTouchMove = true;
    } else {
        swiper.allowTouchMove = false;
        swiper.allowSlidePrev = false;
        swiper.allowSlideNext = false;
    }
    event.stopPropagation();
};

const addPageClick = (index, swiper) => {
    $(`.page_p${index + 1}`).on('click', () => {
        swiper.slideTo(index);
    });
};

const addAnimateClass = (arr) => {
    arr.forEach(ele => $(ele).addClass('animate'));
};

const openVideo = (video) => {
    $('.plate_modal').toggleClass('-active');
    $('.modal').css('opacity', '1').css('visibility', 'inherit');
    $('.modal.type--youtube').toggleClass('hide');
    $('.modal_box_veil').toggleClass('-hide');
    $('.modal_source').append(
        `<iframe width="auto" height="auto" class="modal_youtube youtube--2"
        src="https://www.youtube.com/embed/${video}?si=1_stAmmA1RL7LFrt"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>`);
};
