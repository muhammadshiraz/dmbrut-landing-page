import React from "react";

export default () => {
    return (
    <footer>
        <form className="subscribe_Left">
            <input type="email" placeholder="Type in your email..."/>
            <button type="submit" disabled name="subscribe" value="Subscribe">Subscribe</button>
        </form>
        <div className="quicknav_Right">
            <p>CC Dom Maria 2020</p>
            <div className="quick_Links">
              <ul>
                <li><a target="_blanck" href="https://www.facebook.com/dmbrut">Facebook</a></li>
                <li><a target="_blanck" href="https://www.instagram.com/dmbrut">Instagram</a></li>
              </ul>     
              <ul>
                <li><a target="_blank" href="/privacy">Privacy</a></li>
                <li><a target="_blank" href="/shipping-policy">Shipping Policy</a></li>
                <li><a target="_blank" href="/disclaimer">Disclaimer</a></li>
              </ul>       
            </div>
        </div>
        <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
        <script
          src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>
        <script
          src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>          
    </footer>
    );
  };