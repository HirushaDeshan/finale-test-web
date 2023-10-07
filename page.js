<script>

    document.getElementById("btn").addEventListener("click",doStuff);

    function doStuff(){

      var userInfo = {};
      
      userInfo.firstname = document.getElementById("fn").value;
      userInfo.lastname = document.getElementById("ln").value;
      userInfo.app = document.getElementById("app").value;

      google.script.run.userClicked(userInfo);

      document.getElementById("fn").value = "";
      document.getElementById("ln").value = "";
      document.getElementById("app").value = "";
     
    }  
</script>