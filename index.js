acum = "";
num = "";

function values(valores) {
    if (valores != "=") {
        acum += valores;
        num += valores;
        document.getElementById("operacoes").value = num;
    } else {
        acum += valores;
        num = "";
        document.getElementById("operacoes").value = "";
    }
    return acum;
}

function resultado() {
    if (acum.indexOf("/") > 0) {
        x = Number(acum.substr(0, acum.indexOf("/")));
        y = Number(acum.substr(acum.indexOf("/") + 1, acum.length));
        document.getElementById("operacoes").value = x / y;
        acum = "";
        acum += document.getElementById("operacoes").value;
    }else if (acum.indexOf("+") > 0) {
        x = Number(acum.substr(0, acum.indexOf("+")));
        y = Number(acum.substr(acum.indexOf("+") + 1, acum.length));
        document.getElementById("operacoes").value = x + y;
        acum = "";
        acum += document.getElementById("operacoes").value;
    }else if (acum.indexOf("-") > 0) {
        x = Number(acum.substr(0, acum.indexOf("-")));
        y = Number(acum.substr(acum.indexOf("-") + 1, acum.length));
        document.getElementById("operacoes").value = x - y;
        acum = "";
        acum += document.getElementById("operacoes").value;
    }else if (acum.indexOf("*") > 0) {
        x = Number(acum.substr(0, acum.indexOf("*")));
        y = Number(acum.substr(acum.indexOf("*") + 1, acum.length));
        document.getElementById("operacoes").value = x * y;
        acum = "";
        acum += document.getElementById("operacoes").value;
    }
}

function limpar() {
    document.getElementById("operacoes").value = 0;
    acum = ""
    num = ""
}