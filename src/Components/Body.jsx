import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from "../assets/image1.png";
import Community from "../assets/Community.png";
import t1 from "../assets/t1.jpg";
import t2 from "../assets/t2.jpg";
import t3 from "../assets/t3.jpg";
import t4 from "../assets/t4.jpg";
import r1 from "../assets/r1.jpg";
import r2 from "../assets/r2.jpg";
import r3 from "../assets/r3.jpg";
import r4 from "../assets/r4.jpg";
import Artefacts from "../assets/Artefacts.png";
import image5 from "../assets/Indin Post.png";
import image6 from "../assets/Make IN india.png";

export default function Body() {
  const navigate = useNavigate();

  const handleCommunityClick = () => {
    navigate('/Community');
  };

  return (
    <div>
      <div className="img_container">
        <img src={image1} className="background_image" alt="Background" />
        <div className="background_overlay"></div>
        <div className="text_overlay">
          <div className="banner">
            <div className="banner-text">
              <h1>
                Stay Connected to the Heart of India, No Matter Where You Are
              </h1>
              <p>
                "Discover the vibrant culture and rich heritage of India, no
                matter where you are. Stay connected with the latest updates,
                stories, and events that bring the heart of India closer to you.
                Join our community and immerse yourself in the diverse
                traditions and modern innovations that make India unique".
              </p>
            </div>
          </div>
          <div className="community">
            <img className="Community_image" src={Community} alt="Community" />
            <button className="community_button" onClick={handleCommunityClick}>
              Your Community
            </button>
          </div>
        </div>
      </div>

      <div className="button_container">
        <div className="button">
          <a href="#online-services">Online Services</a>
        </div>
        <div className="button">
          <a href="#trending-sensations">Trending Sensations Of India</a>
        </div>
        <div className="button">
          <a href="#about-us">About Us</a>
        </div>
      </div>

      <div className="section_container">
        <div className="section">
          <h2>Trending</h2>
          <div className="section_content">
            <div className="section_item">
              <img src={t1} alt="Trending" />
              <div className="section_text">
                <p>RAZOI BLANKETS</p>
              </div>
            </div>
            <div className="section_item">
              <img src={t2} alt="Trending" />
              <div className="section_text">
                <p>SWADESHI PURSE</p>
              </div>
            </div>
            <div className="section_item">
              <img src={t3} alt="Trending" />
              <div className="section_text">
                <p>KOLHAPURI CHAPPAL</p>
              </div>
            </div>
            <div className="section_item">
              <img src={t4} alt="Trending" />
              <div className="section_text">
                <p>BUUDHA STATUE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Recommendation</h2>
          <div className="section_content">
            <div className="section_item">
              <img src={r1} alt="Recommendation" />
              <div className="section_text">
                <p>GARAM MASALA</p>
              </div>
            </div>
            <div className="section_item">
              <img src={r2} alt="Recommendation" />
              <div className="section_text">
                <p>BASMATI RICE</p>
              </div>
            </div>
            <div className="section_item">
              <img src={r3} alt="Recommendation" />
              <div className="section_text">
                <p>STONE UTENSILS</p>
              </div>
            </div>
            <div className="section_item">
              <img src={r4} alt="Recommendation" />
              <div className="section_text">
                <p>SAFFRON</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-item">
          <div className="text">
            <h1>
              Discover Authentic Products, Handcrafted Artefacts, and Festival
              Essentials from India's Finest Boutiques
            </h1>
          </div>
          <div className="button2-container">
            <div className="button">
              <a href="Festival Exclusives">Festival Exclusives</a>
            </div>
            <div className="button">
              <a href="Categories">Categories</a>
            </div>
            <div className="button">
              <a href="Special Offers">Special Offers</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container2">
        <div className="image3">
          <img src={Artefacts} alt="image" />
        </div>
        <div className="img-text3">
          <p>
            “Explore our exquisite collection of handcrafted porcelain, each
            piece telling a unique story of artistry and tradition. From elegant
            teapots to beautifully designed cups, our selection brings timeless
            beauty to your home. Shop now and add a touch of sophistication to
            your everyday moments.”
          </p>
        </div>
        <div className="button-container">
          <div className="button">
            <a href="My Order">My Order</a>
          </div>
          <div className="button">
            <a href="Cart">Cart</a>
          </div>
          <div className="button">
            <a href="Past Orders">Past Orders</a>
          </div>
        </div>
      </div>

      <div className="image4-container">
        <div className="image5">
          <img src={image5} alt="Indian Post" />
        </div>
        <div className="image6">
          <img src={image6} alt="Make In India" />
        </div>
      </div>
    </div>
  );
}
