    let html = document.getElementsByTagName('html')[0];


    function changeClassContrast() {
        {
            if (html.className === '' || html.className === 'inverted') {
                html.classList.add("contrast");
                document.getElementById("contrasted").innerHTML = "Add more contrast";

            } else {
                html.classList.remove("contrast");
                document.getElementById("contrasted").innerHTML = "remove contrast";
            }
        }
    }

    function changeClassInvert() {
        {
            if (html.className === '' || html.className === 'contrast') {
                html.classList.add("inverted");
                document.getElementById("inverted").innerHTML = "normal mode!";

            } else {
                html.classList.remove("inverted");
                document.getElementById("inverted").innerHTML = "inverted mode";
            }
        }
    }