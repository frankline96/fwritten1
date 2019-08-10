
var txt = "Nous sommes les <b>“meilleurs” </b> \n \n .. Nous avons une <b>vision</b>,\n \n . Nous avons un but,\n \n . Nous avons un objectif. \n \n . Rester toujours les <b>meilleurs</b> \n \n . Nous sommes \n \n . “<b>Meilleurs parmi les meilleurs</b>”";
    var options= {
        strings: txt.split("."),
        typeSpeed: 0.2,
        backSpeed: 100
    }
    var typed = new Typed("#typed", options);
    
     
     
    

var txt = "Nous sommes les <b>“meilleurs” </b> \n \n .. Nous avons une <b>vision</b>,\n \n . Nous avons un but,\n \n . Nous avons un objectif. \n \n . Rester toujours les <b>meilleurs</b> \n \n . Nous sommes \n \n . “<b>Meilleurs parmi les meilleurs</b>”";
    var options= {
        strings: txt.split("."),
        typeSpeed: 10,
        backSpeed: 30
    }
    var typed = new Typed("#typedc", options);
    
     
    
 
 
function next1comp() {
  if (document.getElementById("gr5comp").style.display="none") {
    document.getElementById("gr5comp").style.display=""; document.getElementById("gr1comp").style.display="none";
 document.getElementById("1nextcomp").style.display="none";
 document.getElementById("2nextcomp").style.display="";
    return;
  }
  
}
function next2comp() {
  if (document.getElementById("gr4comp").style.display="none") {
    document.getElementById("gr4comp").style.display=""; document.getElementById("gr5comp").style.display="none";
 document.getElementById("2nextcomp").style.display="none";
 document.getElementById("3nextcomp").style.display="";
    return;
  }
  
}
function next3comp() {
  if (document.getElementById("gr3comp").style.display="none") {
    document.getElementById("gr3comp").style.display=""; document.getElementById("gr4comp").style.display="none";
 document.getElementById("3nextcomp").style.display="none";
 document.getElementById("4nextcomp").style.display="";
    return;
  }

  
}
function next4comp() {
  if (document.getElementById("gr2comp").style.display="none") {
    document.getElementById("gr2comp").style.display=""; document.getElementById("gr3comp").style.display="none";
 document.getElementById("4nextcomp").style.display="none";
 document.getElementById("5nextcomp").style.display="";
    return;
  }
}
  function next5comp() {
  if (document.getElementById("gr1comp").style.display="none") {
    document.getElementById("gr1comp").style.display=""; document.getElementById("gr2comp").style.display="none";
 document.getElementById("5nextcomp").style.display="none";
 document.getElementById("1nextcomp").style.display="";
    return;
  }
  
}











function next1() {
  if (document.getElementById("gr5").style.display="none") {
    document.getElementById("gr5").style.display=""; document.getElementById("gr1").style.display="none";
 document.getElementById("1next").style.display="none";
 document.getElementById("2next").style.display="";
    return;
  }
  
}
function next2() {
  if (document.getElementById("gr4").style.display="none") {
    document.getElementById("gr4").style.display=""; document.getElementById("gr5").style.display="none";
 document.getElementById("2next").style.display="none";
 document.getElementById("3next").style.display="";
    return;
  }
  
}
function next3() {
  if (document.getElementById("gr3").style.display="none") {
    document.getElementById("gr3").style.display=""; document.getElementById("gr4").style.display="none";
 document.getElementById("3next").style.display="none";
 document.getElementById("4next").style.display="";
    return;
  }

  
}
function next4() {
  if (document.getElementById("gr2").style.display="none") {
    document.getElementById("gr2").style.display=""; document.getElementById("gr3").style.display="none";
 document.getElementById("4next").style.display="none";
 document.getElementById("5next").style.display="";
    return;
  }
}
  function next5() {
  if (document.getElementById("gr1").style.display="none") {
    document.getElementById("gr1").style.display=""; document.getElementById("gr2").style.display="none";
 document.getElementById("5next").style.display="none";
 document.getElementById("1next").style.display="";
    return;
  }
  
}








function hist() {
  if (document.getElementById("histsum").style.display="none") {
    document.getElementById("histall").style.display="";
document.getElementById("histalla").style.display=""; 
    return;
  }
  
}


function histcomp() {
  if (document.getElementById("histsumcomp").style.display="none") {
    document.getElementById("histallcomp").style.display="";
document.getElementById("histallacomp").style.display=""; 
    return;
  }
  
}
