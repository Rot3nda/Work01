
function mupop(){
    document.getElementById("side").style.display="block";
    document.getElementById("mun").style.display="none";
}

function mucancel(){
    document.getElementById("side").style.display="none";
    document.getElementById("mun").style.display="flex";
}



                                                                   /* sub sidebar  */

function submpop()
{
   document.getElementById("sm").style.display="block";
   document.getElementById("sn").style.display="none";
   document.getElementById("sb").style.display="none";
}

function subnpop()
{
    document.getElementById("sn").style.display="block";
    document.getElementById("sm").style.display="none";
    document.getElementById("sb").style.display="none";
}

function subbpop()
{
    document.getElementById("sb").style.display="block";
    document.getElementById("sm").style.display="none";
    document.getElementById("sn").style.display="none";
}
