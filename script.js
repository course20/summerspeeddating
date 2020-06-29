var value;

    document.getElementById("send").onclick = function(){
        if (document.getElementById("email").value!=""){
        if (document.getElementById("email").value.indexOf("@")!=-1&&document.getElementById("email").value.indexOf(".")!=-1){
          
document.getElementById("loading").style.display = "block";
value = document.getElementById("email").value;
      document.getElementById("inputarea").remove();
    fetch("https://script.google.com/macros/s/AKfycbxsPWJMGVoqhF0BUc5QTtysPJTguk3EPqGXLkEtZ3oddNjhuu3A/exec?email="+value).then(response=>response.json()).then(function(r){
      console.log(r);
              document.getElementById("loading").remove();
        document.getElementById("displayresults").style.display = "block";
      if (r.found){
document.getElementById("emaildisplay").innerText = r.email;
document.getElementById("emaildisplay").href = "mailto:"+r.email;
document.getElementById("namedisplay").innerText = r.name;
document.getElementById("yeardisplay").innerText = r.year;
        
      }else{
                document.getElementById("displayresults").innerHTML = "No match found :( <br><br><a href='javascript:location.reload();'>Try Again</a>";

      }
    });
        }else{
          alert("Please make sure it is a valid email!");
        }
  }
}
