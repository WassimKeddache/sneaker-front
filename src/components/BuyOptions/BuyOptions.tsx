import "./BuyOptions.css";

function BuyOption() {
  return (
    <div>
      <div className="buy-button-container">
        <div className="buy-tuple">
          <button className="buy-button">
            <img
              className="buy-image"
              src={`/assets/goat_logo.png`}
              alt="Goat Logo"
            />
          </button>
          <button className="buy-price">$ 1.700</button>
        </div>
        <div className="buy-tuple">
          <button className="buy-button">
            <img
              className="buy-image"
              src={`/assets/stockx_logo.png`}
              alt="StockX Logo"
            />
          </button>
          <button className="buy-price">$ 1.900</button>
        </div>
      </div>
    </div>
  );
}

export default BuyOption;
