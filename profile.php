<?php include_once('header.php'); ?>

<div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="container">
        <br><br>
        <h1 style="padding-top:125px" id="name-old" class="header center cyan-text text-lighten-2"></h1>
        <div class="donate_button row center">
        </div>
        <br><br>

      </div>
    </div>
    <div id="image" class="parallax">
    </div>
  </div>

  <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4 id="name"></h4>
          <div id="story" class="center-align light">

          </div>
        </div>
      </div>

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>How are you helping?</h4>
          <p id="help_info" class="left-align light">
          </p>
          <p id="verified_by" class="left-align light">
            <b>Verified by: </b>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col s8 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <div class="row">
            <div class="col s6 center">
              <canvas id="graph" style="max-width:100px; height:100px"></canvas>
            </div>
            <div class="col s3">
              <div class="left-align light">
              Amount raised <br/>
              <span id="amount_raised">$</span>
              </div>
              <div class="left-align light">
                Target  <br/>
                <span id="target">$</span>
              </div>
              </div>

          </div>
        </div>
        <div class="col s4 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <div class="tax_deductible left-align"> </div>
          <p class="donate_button left-align light">
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col s2 center">	&nbsp;
        </div>
        <div id="comments" class="col s8 center">

        </div>
        <div class="col s2 center">
        </div>
      </div>

    </div>
  </div>

<?php include_once('footer.php'); ?>