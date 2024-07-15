import { useEffect, useState } from "react";
import "./SneakerListComponent.css";
import { useNavigate } from "react-router-dom";

interface SneakerResults {
  url: string;
  name: string;
}

function SneakerListComponent() {
  const [sneakers, setSneakers] = useState<Array<SneakerResults>>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchSneakers() {
      let url =
        "https://ac.cnstrc.com/search/air%20jordan%201?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=f95326d8-ff39-4ef8-bf17-9bfc4182a93f&s=2&page=24&num_results_per_page=199&sort_by=relevance&sort_order=descending&fmt_options[hidden_fields]=gp_lowest_price_cents_23&fmt_options[hidden_fields]=gp_instant_ship_lowest_price_cents_23&fmt_options[hidden_facets]=gp_lowest_price_cents_23&fmt_options[hidden_facets]=gp_instant_ship_lowest_price_cents_23&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_23%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_23%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=17203052674580";

      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        let data = await response.json();

        const n_results = data["response"]["total_num_results"];
        const n_page = 1; //Math.floor(n_results / 200) + 1;
        const model = "Air Jordan 1";
        let allImages: SneakerResults[] = [];

        for (let i = 1; i < n_page + 1; i++) {
          url =
            "https://ac.cnstrc.com/search/+" +
            model.toLowerCase().replace(" ", "%20") +
            "?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=f95326d8-ff39-4ef8-bf17-9bfc4182a93f&s=2&page=" +
            i.toString() +
            "&num_results_per_page=199&sort_by=relevance&sort_order=descending&fmt_options[hidden_fields]=gp_lowest_price_cents_23&fmt_options[hidden_fields]=gp_instant_ship_lowest_price_cents_23&fmt_options[hidden_facets]=gp_lowest_price_cents_23&fmt_options[hidden_facets]=gp_instant_ship_lowest_price_cents_23&variations_map={%22group_by%22%3A[{%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22}%2C{%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22}]%2C%22values%22%3A{%22min_regional_price%22%3A{%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_23%22}%2C%22min_regional_instant_ship_price%22%3A{%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_23%22}}%2C%22dtype%22%3A%22object%22}&qs={%22features%22%3A{%22display_variations%22%3Atrue}%2C%22feature_variants%22%3A{%22display_variations%22%3A%22matched%22}}&_dt=17203052674580";
          response = await fetch(url);
          data = await response.json();

          const images: SneakerResults[] = data["response"]["results"].map(
            (item: any) => ({
              url: item["data"]["image_url"],
              name: item["value"], // Assurez-vous que cette clé existe dans votre objet, sinon ajustez en conséquence
            })
          );
          allImages = [...allImages, ...images];
        }

        setSneakers(allImages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchSneakers();
  }, []); // Effectuer la requête une seule fois lors du montage initial

  const filteredSneakers = sneakers.filter(
    (sneaker: { url: string; name: string }) => {
      return sneaker["name"].toLowerCase().includes(searchTerm.toLowerCase());
    }
  );

  const navigate = useNavigate();

  const handleClick = (sneakerId: number) => {
    navigate(`/sneaker/${sneakerId}`);
  };

  return (
    <>
      <h1>Liste de Sneakers</h1>
      <input
        type="text"
        placeholder="Rechercher des sneakers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="result-list">
        {filteredSneakers.length > 0 && (
          <div className="result-grid">
            {filteredSneakers.map((imageUrl, index) => (
              <div
                key={index}
                className="result-item"
                onClick={() => handleClick(index)}
              >
                <img
                  src={imageUrl["url"]}
                  alt={`Sneaker ${index}`}
                  className="result-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default SneakerListComponent;
