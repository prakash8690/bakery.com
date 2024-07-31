const bar = document.querySelector("#bars")
    const navleft = document.querySelector(".header-top2-left")
    const bgoverlauyfull = document.querySelector(".bgoverlauy-full")

    bar.addEventListener("click", function () {
        navleft.classList.toggle("open")
        bar.classList.toggle("fa-x")
        bgoverlauyfull.classList.toggle("open2")
    })

    // bgoverlauyfull.addEventListener("click", function () {
    //     navleft.classList.remove("open")
    //     bgoverlauyfull.classList.remove("open2")
    //     bar.classList.remove("fa-x")
    // })

  



    
$('.autoplay').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    dots: true,
  });




    window.addEventListener(
        'scroll',
        function(){
            console.log(window.scrollY)
            if(this.window.scrollY >= 46){
                document.body.classList.add('shownavbg')
            }
            else{document.body.classList.remove('shownavbg')}
        }
    )