import React, { useState } from "react";
import "../AdvertisementCard/AdvertisementCard.scss";
import { FaStar } from "react-icons/fa";
import { BsFillGeoAltFill } from "react-icons/bs";

const Advertisement = () => {
  const [showSlideShow, setShowSlideShow] = useState(false);

  // Dummy Data
  const property = {
    sellerProfile: "https://via.placeholder.com/150", // Replace with actual image URL
    sellerName: "John Doe",
    reviews: { rating: 4.2, totalReviews: 15 },
    licenseNo: "12345XYZ",
    landName: "Beautiful House",
    location: "123 Street, City, Country",
    description:
      "A beautiful house with modern amenities. Close to the city center.",
    features: { beds: 3, baths: 2, vehicles: 2, area: 500 },
    propertyImages: [
      "https://via.placeholder.com/300", // Add image URLs for the slideshow
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  };

  return (
    <div className="advertisement">
      <div className="advertisement-content">
        {/* Left Section: Property Details */}
        <div className="property-details">
          <div className="seller-info">
            <img
              className="seller-profile"
              src={property.sellerProfile}
              alt="Seller Profile"
            />
            <div className="seller-details">
              <h3>{property.sellerName}</h3>
              <div className="verified">
                <span className="tick">✔</span> Verified Seller
              </div>
            </div>
          </div>

          <div className="reviews">
            <div className="rating">
              <span>{property.reviews.rating}</span>
              <div className="stars">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    color={index < property.reviews.rating ? "yellow" : "gray"}
                  />
                ))}
              </div>
            </div>
            <p>({property.reviews.totalReviews} reviews)</p>
          </div>

          <div className="license">
            <span>License No:</span>
            <p>{property.licenseNo}</p>
          </div>

          <div className="buttons">
            <button className="get-in-touch">Get In Touch</button>
            <button className="save-property">Save Property</button>
          </div>

          {/* Property Info */}
          <div className="property-info">
            <h4>{property.landName}</h4>
            <div className="location">
              <BsFillGeoAltFill />
              <span>{property.location}</span>
            </div>
            <p>{property.description}</p>

            <div className="property-features">
              <div className="feature">
                <span>Beds:</span> {property.features.beds}
              </div>
              <div className="feature">
                <span>Baths:</span> {property.features.baths}
              </div>
              <div className="feature">
                <span>Vehicles:</span> {property.features.vehicles}
              </div>
              <div className="feature">
                <span>Area:</span> {property.features.area} sqm
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Property Images */}
        <div className="property-images">
          <div className="main-image">
            <img
              src={property.propertyImages[0]}
              alt="Main Property"
              onClick={() => setShowSlideShow(true)}
            />
            {showSlideShow && (
              <button className="view-slide-show">View Slide Show</button>
            )}
          </div>
          <div className="image-thumbnails">
            {property.propertyImages.slice(1).map((img, index) => (
              <div className="thumbnail" key={index}>
                <img src={img} alt={`Property Image ${index + 1}`} />
              </div>
            ))}
            <div className="thumbnail">
              <img src={property.propertyImages[5]} alt="More Images" />
              <span>+5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
