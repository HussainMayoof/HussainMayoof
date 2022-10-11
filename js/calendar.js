toggle = true;


function changeSize(query) {
            if (query.matches) {
                main = document.getElementById("main");
                main.classList.add('row-fluid');
                if (main.classList.contains('row')){
                    main.classList.remove('row');
                }
                if (!toggle){
                    document.getElementById("table").style.height = "auto";
                    console.log(1);
                }
                else{
                    document.getElementById("table").style.height = "100vh";
                }
                console.log('Changed to medium/small view');
            }
            else{
                main = document.getElementById("main");
                main.classList.add('row');
                if (main.classList.contains('row-fluid')){
                    main.classList.remove('row-fluid');
                }
            }
    }

function toggleCalendar(button) {
    if (toggle){
        calendar = document.getElementById("calendar");
        calendar.style.display = "inline-block";
        calendar.style.height = "auto";
        calendar.classList.remove("col-md-6");
        button.innerHTML = "Hide Calendar";
        toggle = false;
        changeSize(window.matchMedia("(max-width: 768px)"));
    }
    else{
        calendar = document.getElementById("calendar");
        calendar.style.display = "none";
        calendar.style.height = "100vh";
        calendar.classList.add("col-md-6");
        button.innerHTML = "Show Calendar";
        toggle = true;
        changeSize(window.matchMedia("(max-width: 768px)"));
    }
}

window.onload = init;
function init(){
    var query = window.matchMedia("(max-width: 768px)");
    changeSize(query);
    query.addListener(changeSize);
}