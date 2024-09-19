import React from "react";
import right from "../assets/right.png";
import down from "../assets/down.png";
import "./Community.css";

function Community() {
  return (
    <div className="background-container">
      {/* Container 1 */}
      <div className="container1">
        <div className="overlay-text">
          <h3>Welcome to a global family of Indian diaspora members</h3>
          <p>
            Who share a love for our culture, heritage, and traditions. Whether
            you’re seeking connections, cultural experiences, or just a taste of
            home, you’ve found the right place.
          </p>
        </div>
        <div className="cimage">
          <img src={right} alt="arrow" />
        </div>
        <div className="cbutton">
          <a href="join">Click here to join our community</a>
        </div>
      </div>

      {/* Container 2 */}
      <div className="container2">
        <div className="buttonex">
          <div className="cbutton1">Creating our own Community</div>
          <div className="cimage2">
            <img src={down} alt="arrow" />
          </div>
          <div className="cbutton2">Click here to create</div>
        </div>
        <div className="overlay-text">
          <div className="text2container">
            <h5>
            Stay connected with Indian festivals, traditions, and values, no
            matter where you are in the world. Our community is your window to
            the rich cultural heritage of India. Meet fellow Indians living
            abroad, exchange ideas, and collaborate on exciting projects,
            whether they relate to business, culture, or personal growth.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
