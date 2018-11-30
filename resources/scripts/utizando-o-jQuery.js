$("#inputEmail").keypress(function (e) {
    for (let i = 32; i < 255; i++) {
        if (i == e.which) {
            alert("A tecla '" + e.key + "' é invalida");
            e.preventDefault();
            break;
        }
        switch (i) {
            case 47:
                i = 57;
                break;
            case 63:
                i = 90;
                break;
            case 96:
                i = 122;
                break;
            case 127:
                i = 165;
                break;
            case 180:
                i = 183;
                break;
            case 197:
                i = 199;
                break;
            case 209:
                i = 216;
                break
            case 221:
                i = 222;
                break;
            case 223:
                i = 229;
                break;
            case 232:
                i = 237;
                break;
        }
    }
});

$(".senha-repetida").blur(function (){
    $("input").css("background-color", "#606060");
});

//$("#input-senha").