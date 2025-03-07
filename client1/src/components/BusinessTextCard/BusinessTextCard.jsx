import "./BusinessTextCard.scss";

function BusinessTextCard() {
  return (
    <div className="business-text-card">
      <div className="business-text-card_para">
        <p>
          Search Businesses For Sale to find your perfect business for sale in
          Australia.
        </p>
        <p>
          Browse our list of{" "}
          <a href="https://www.businessforsale.com.au/franchise-opportunities">
            Franchises for sale
          </a>
          .
        </p>
        <p>
          Looking to sell your business? Since 1987 we have thousands of
          business owners sell for a fraction of traditional fees.Business For
          Sale can help you -{" "}
          <a href="https://www.businessforsale.com.au/sell-business">
            Sell My Business
          </a>
        </p>

        <p>
          Need a Business Broker to help you sell a business?
          <a href="https://www.businessforsale.com.au/find-the-right-business-broker">
            Find A Business Broker
          </a>{" "}
          near you.
        </p>
      </div>
    </div>
  );
}

export default BusinessTextCard;
