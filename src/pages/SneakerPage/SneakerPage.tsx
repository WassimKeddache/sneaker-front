import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SneakerPage.css";
import BuyOptionComponent from "../../components/BuyOptionComponent/BuyOptionComponent";
import SneakerInformationComponent from "../../components/SneakerInformationComponent/SneakerInformationComponent";

const SneakerPage: React.FC = () => {
  const { sneakerId } = useParams<{ sneakerId: string }>();
  const [sneakerData, setSneakerData] = useState<SneakerInfo | null>(null);

  useEffect(() => {
    const fetchSneakerData = async () => {
      const url =
        "https://ac.cnstrc.com/search/air%20jordan%201?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=f95326d8-ff39-4ef8-bf17-9bfc4182a93f&s=2&page=24&num_results_per_page=199&sort_by=relevance&sort_order=descending&fmt_options[hidden_fields]=gp_lowest_price_cents_23&fmt_options[hidden_fields]=gp_instant_ship_lowest_price_cents_23&fmt_options[hidden_facets]=gp_lowest_price_cents_23&fmt_options[hidden_facets]=gp_instant_ship_lowest_price_cents_23&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_23%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_23%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=17203052674580";
      const response = await fetch(url);
      const data = await response.json();

      const sneakerInfo: SneakerInfo = {
        id: data["response"]["results"][1]["data"]["id"],
        name: data["response"]["results"][1]["value"],
        imageUrl: data["response"]["results"][1]["data"]["image_url"],
        releaseDate: data["response"]["results"][1]["data"]["release_date"],
        category: data["response"]["results"][1]["data"]["category"],
        goatPrice: data["response"]["results"][1]["data"]["lowest_price_cents"],
      };

      console.log(data);
      setSneakerData(sneakerInfo);
    };

    fetchSneakerData();
  }, [sneakerId]);

  return (
    <div>
      {sneakerData ? (
        <div className="sneaker-page-container">
          <SneakerInformationComponent
            sneakerData={sneakerData}
          ></SneakerInformationComponent>
          <BuyOptionComponent></BuyOptionComponent>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SneakerPage;
