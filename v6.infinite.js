
<!DOCTYPE html> 

<html>
<head>
  <title>Javascript Racer - v5 (game)</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <link href="common.css" rel="stylesheet" type="text/css" />
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
<link rel="icon" href="images/neonracericon.png"/>

</head> 

<body> 
 <center>
 |<a href='v1.straight.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">straight</a> |
        <a href='v2.curves.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">curves</a>   |  
        <a href='v3.hills.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">hills</a>    |   
        <a href='v4.final.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">fastest lap</a>   |    
        <a href='v5.game.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">out of time</a>|
                <a href='v6.infinite.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">Infinite</a>|

  </center>
  <center><a href='index.html' style="font-family:'Press Start 2P'; color: white; text-shadow: 0 0 20px #f700ff; ">Home</a></center>
  <center>
        <span id="mute"></span>  
  </center>
  <table id="controls">
    <tr>
      <td colspan="2">
      </td>
    </tr>
    <tr><td id="fps" colspan="2" align="right"></td></tr>
    <tr>
      <th><label for="resolution">Resolution :</label></th>
      <td>
        <select id="resolution" style="width:100%">
          <option value='fine'>Fine (1280x960)</option>
          <option selected value='high'>High (1024x768)</option>
          <option value='medium'>Medium (640x480)</option>
          <option value='low'>Low (480x360)</option>
        </select>
      </td>
    </tr>
    <tr>
      <th><label for="lanes">Lanes :</label></th>
      <td>
        <select id="lanes">
          <option>1</option>
          <option>2</option>
          <option selected>3</option>
          <option>4</option>
        </select>
      </td>
    </tr>
    <tr>
      <th><label for="roadWidth">Road Width (<span id="currentRoadWidth"></span>) :</label></th>
      <td><input id="roadWidth" type='range' min='500' max='3000' title="integer (500-3000)"></td>
    </tr>
    <tr>
      <th><label for="cameraHeight">CameraHeight (<span id="currentCameraHeight"></span>) :</label></th>
      <td><input id="cameraHeight" type='range' min='500' max='5000' title="integer (500-5000)"></td>
    </tr>
    <tr>
      <th><label for="drawDistance">Draw Distance (<span id="currentDrawDistance"></span>) :</label></th>
      <td><input id="drawDistance" type='range' min='100' max='500' title="integer (100-500)"></td>
    </tr>
    <tr>
      <th><label for="fieldOfView">Field of View (<span id="currentFieldOfView"></span>) :</label></th>
      <td><input id="fieldOfView" type='range' min='80' max='140' title="integer (80-140)"></td>
    </tr>
    <tr>
      <th><label for="fogDensity">Fog Density (<span id="currentFogDensity"></span>) :</label></th>
      <td><input id="fogDensity" type='range' min='0' max='50' title="integer (0-50)"></td>
    </tr>
  </table>

  <div id='instructions'>
    <p>Use the <b>arrow keys</b> to drive the car.</p>
    <p>Cross the finish line before time runs out.</p>
    <p>Double click for fullscreen. Press CONTROL for turbo.</p>
  </div>

  <audio id='music'>
    <source src="music/jsracer_soundtrack.ogg">
    <source src="music/lsracer_soundtrack.mp3">
  </audio>

  <div id="racer">
    <div id="hud">
      <span id="speed"            class="hud"><span id="speed_value" class="value">0</span> mph</span>
      <span id="current_lap_time" class="hud">Time: <span id="current_lap_time_value" class="value">0.0</span></span> 
      <span id="current_level" class="hud">Level: <span id="current_level_value" class="value">0</span></span> 
      <span id="turbo_left" class="hud">Turbo: <span id="turbo_left_value" class="value">0</span></span> 
      <span id="remaining_time" class="hud">Time: <span id="remaining_time_value" class="value">0.0</span></span> 
      <span id="last_lap_time"    class="hud">Last Lap: <span id="last_lap_time_value" class="value">0.0</span></span>
      <span id="fast_lap_time"    class="hud">Fastest Lap: <span id="fast_lap_time_value" class="value">0.0</span></span>
    </div>
    <canvas id="canvas">
      Sorry, this example cannot be run because your browser does not support the &lt;canvas&gt; element
    </canvas>
    Loading...
  </div>

  <div id='gamepad'>
      <div id='gamepad-turbo' class='gamepad-button'><span>Turbo</span></div>
      <div id='gamepad-up' class='gamepad-button'><span>^</span></div>
      <div id='gamepad-left' class='gamepad-button'><span><</span></div>
      <div id='gamepad-right' class='gamepad-button'><span>></span></div>
      <div id='gamepad-down' class='gamepad-button'><span>v</span></div>
  </div>

  <script src="stats.js"></script>
  <script src="common.js"></script>
  <script src="infinite.js"></script>
  <script>
    racer(1); // initiate the game
  </script>

</body> 
</html>
