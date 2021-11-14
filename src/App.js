import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Card
        url="https://media.istockphoto.com/photos/oven-baked-pepperoni-pizza-picture-id1181651561?k=20&m=1181651561&s=612x612&w=0&h=iDsz2My1q-kWdouyPBCXL6Up6iInM_J-9X1cKAh1OVA="
        title="Pepperoni Pizza"
        desc="Pepperoni is an American variety of salami, made from cured pork and beef seasoned with paprika or other chili pepper. "
        cal="265 Cal"
        bal="P/F/C: 12/10/31"
        temp="53.8 C"
        newPrice="23.90"
        oldPrice="29.20"
      ></Card>
            <Card
        url="https://images-gmi-pmc.edge-generalmills.com/a5f63a72-fb76-4549-8a6a-e2fb0ed4671e.jpg"
        title="Chicken Tortellini"
        desc="Traditionally they are stuffed with a mix of meat, Parmigiano Reggiano cheese, egg and nutmeg and served in capon broth."
        cal="270 Cal"
        bal="P/F/C: 12/10/31"
        temp="42.4 C"
        newPrice="17.90"
        oldPrice="22.20"
      ></Card>

<Card
        url="https://www.foodnetwork.com/content/dam/images/food/video/9/93/936/9365/9365700.jpg"
        title="StrawBerry Cake"
        desc="Strawberry cheesecake, which seems to be quite a common yogurt and ice cream flavor, and which has the same sweet tanginess."
        cal="346 Cal"
        bal="P/F/C: 12/10/31"
        temp="13.9 C"
        newPrice="13.70"
        oldPrice="18.26"
      ></Card>
    </div>
  );
}

export default App;
