
let images = [
    "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png",
    "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png",
    "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png",
    "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png",
  ];

    let container = document.getElementById("mySlideshow")

    function startSlideshow(){

        let counter = 0;

        let interval = setInterval (function (){

            container.innerHTML = null;

            if(counter === images.length){
                counter =0;
            }
            let img = document.createElement("img");
            img.src = images[counter];

            container.append(img);

            counter += 1;
        }, 3000);
        }

        startSlideshow();



        function gotomedicines()
        {
            document.getElementsByClassName("medi")
		window.location.href = "cart_detail.html";
        }
        function gotoview()
        {
            document.getElementsByClassName("vc")
		  window.location.href = "cart_detail.html";
        }
