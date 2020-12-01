<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mega Travel</title>
</head>
<div class="parent">
<header class="lightBlueBackground">
        <a href="/index.html"><img src="photos/mega travel logo.png" class="mega-logo" alt="mega travel logo"></a>
    </header>
    <section>
        <div class="time-wrap">
                    <script>
                        function setGreeting() {
    let curTime = new Date().toLocaleTimeString();
    let milTime = new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
    milTimeArray = milTime.split(':');
    milTime = milTimeArray[0] + milTimeArray[1];

    let greeting;

    if (milTime >= 0000 && milTime <= 1159) {
        greeting = 'Good Morning!';
    } else if (milTime >= 1200 && milTime <= 1700) {
        greeting = 'Good Afternoon!';
    } else if (milTime >= 1701 && milTime <= 2359) {
        greeting = 'Good Evening!';
    }

    return (React.createElement("p", {}, greeting + ' ' + curTime));
}

function setIcon() {
    let milTime = new Date().toLocaleTimeString('en-US', {
        hour12: false
    });
    milTimeArray = milTime.split(':');
    milTime = milTimeArray[0] + milTimeArray[1];

    let imgContainer = document.createElement("img");
    if (milTime >= 0600 && milTime <= 1800) {
        return (ReactDOM.render(React.createElement("img", {
            src: "./photos/sun.svg"
        }, null), document.getElementById("icon-image")));
    } else {
        return (ReactDOM.render(React.createElement("img", {
            src: "./photos/moon.svg"
        }, null), document.getElementById("icon-image")));
    }

}

function setTimeContainer() {
    setIcon();
    ReactDOM.render(React.createElement("div", null, React.createElement(setGreeting, null)),
        document.getElementById("time-container"));
}

setInterval(setTimeContainer, 1000);
        </script>
    </div>
</section>
</div>

<p class="confirmation-message">Thank you for submitting your travel agent contact request! Here is the information you submitted:</p>
  <div id="dislay-results">
    
    <ol>
        <li>First Name: <?php echo $_POST["firstName"]?></li> 
        <br>
        <li>Last Name: <?php echo $_POST["lastName"]?></li>
        <br>
        <li>Email: <?php echo $_POST["emailAddress"]?></li>
        <br>
        <li>Phone: <?php echo $_POST["phoneNumber"]?></li>
        <br>
        <li>Party Size: <?php echo $_POST["numberOfPeopleTraveling"]?></li>
        <br>
        <li>Date: <?php echo $_POST["date"]?></li>
        <br>
        <li>Destination: <?php echo $_POST["destination"]?></li>
        <br>
        <li>Activities: <?php
          $i = 0;
          
          foreach($_POST["activities"] as $activity){
            echo $activity;
            ++$i;
          }

          require_once 'login.php';
          $conn = new mysqli($hn, $un, $pw, $db);
          if ($conn->connect_error) die($conn->connect_error);
      
          $query = "INSERT INTO travelInfo VALUES" .
          "('$firstName', '$lastName', '$emailAddress', '$phoneNumber', '$numberOfPeopleTraveling', '$date', '$destination', '$activity')";
          $result = $conn->query($query);
          if (!$result) echo "INSERT failed: $query<br>" .
          $conn->error . "<br><br>";
      
          // $result->close();
          $conn->close();
          ?></li>
    </ol>
  </div>




<footer>
        <div class="copyright">Copyright protected. All rights reserved</div>
        <div>MEGA TRAVELS</div>
        <div>mega@travels.com</div>
    </footer>
</html>
