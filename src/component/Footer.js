import React from 'react';

const Footer = () => {
  return (
    <footer class="page-footer black">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Quote Of The Day</h5>
            <p class="grey-text text-lighten-4">Kesuksesan Harus Di Capai dengan Planning. </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Follow Me</h5>
            <ul>
              <li><a class="grey-text text-lighten-3" href="/">Linked In</a></li>
              <li><a class="grey-text text-lighten-3" href="/">Github</a></li>
              <li><a class="grey-text text-lighten-3" href="/">Instagram</a></li>
              <li><a class="grey-text text-lighten-3" href="/">Youtube</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2014 Copyright Text
            {/* <a class="grey-text text-lighten-4 right" href="#!">More Links</a> */}
        </div>
      </div>
    </footer>

  )
}

export default Footer