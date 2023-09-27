import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ============ Utils
import ScrollToTop from "./Utils/ScrollToTop";

// ============  Home/Landing page path
import Jogja from "./Pages/Jogja";
import MenuJogja from "./Pages/MenuJogja";
import SavedPageJogja from "./Pages/SavedPageJogja";
import SearchPage from "./Pages/SearchPage";
// Practical Tips Page
import PracticalTipsPage from "./Pages/PracticalTipsPage";
import AirplaneJogja from "./Components/PracticalTipsPage/Airplane/AirplaneJogja";
import CarJogja from "./Components/PracticalTipsPage/Car/CarJogja";
import MotorJogja from "./Components/PracticalTipsPage/Motor/MotorJogja";
// ============  Thing-to-do path
// museum
import MuseumPageJogja from "./Pages/Things-to-do/MuseumPage/MuseumPage";
import DetailMuseum from "./ThingToDoComponents/Museum/Pages/DetailMuseum";
// hotel
import HotelPageJogja from "./Pages/Things-to-do/HotelPage/HotelPage";
import DetailHotel from "./ThingToDoComponents/Hotel/Pages/DetailHotel";
// Art Activities
import ArtActivitiesPage from "./Pages/Things-to-do/ArtActivitiesPage/ArtActivitiesPage";
import DetailArt from "./ThingToDoComponents/ArtActivities/Pages/DetailArt";
// Attraction

//Souvenir
import SouvenirPage from "./Pages/Things-to-do/SouvenirPage/SouvenirPage";
import DetailSouvenir from "./ThingToDoComponents/Souvenir/Pages/DetailSouvenir";

//Food
import FoodPage from "./Pages/Things-to-do/FoodPage/FoodPage";
import DetailFood from "./ThingToDoComponents/Foods/Pages/DetailFood";

//Drinks
import DrinksPage from "./Pages/Things-to-do/DrinksPage/DrinksPage";
import DetailDrinks from "./ThingToDoComponents/Drinks/Pages/DetailDrinks";

// Attraction
import AttractionPage from "./Pages/Things-to-do/AttractionPage/AttractionPage";
import DetailAttraction from "./ThingToDoComponents/Attraction/pages/DetailAttraction";

// Auth
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Regiter";

import "./App.css";
import CartPage from "./Pages/CartPage";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Jogja />}>
            {" "}
          </Route>
          <Route path="/menu-jogja" element={<MenuJogja />}></Route>
          <Route path="/saved-page" element={<SavedPageJogja />}></Route>
          <Route path="/search-page" element={<SearchPage />}></Route>
          {/* ========= Practical Tips Page =========== */}
          <Route
            path="/practical-tips-page"
            element={<PracticalTipsPage />}
          ></Route>
          <Route
            path="/practical-tips-page/airplane"
            element={<AirplaneJogja />}
          ></Route>
          <Route path="/practical-tips-page/car" element={<CarJogja />}></Route>
          <Route
            path="/practical-tips-page/motor"
            element={<MotorJogja />}
          ></Route>
          {/* ================ Thing-to-do route ===================== */}
          {/* ========= museum =========== */}
          <Route
            path="/things-to-do/museum-jogja"
            element={<MuseumPageJogja />}
          ></Route>
          <Route
            path="/things-to-do/museum-jogja/:id"
            element={<DetailMuseum />}
          />
          {/* ========= hotel =========== */}
          <Route
            path="/things-to-do/hotel-jogja"
            element={<HotelPageJogja />}
          ></Route>
          <Route
            path="/things-to-do/hotel-jogja/:slug"
            element={<DetailHotel />}
          />
          {/* ========= Art Activities =========== */}
          <Route
            path="/things-to-do/art-activities-jogja"
            element={<ArtActivitiesPage />}
          ></Route>
          <Route
            path="/things-to-do/art-activities-jogja/:id"
            element={<DetailArt />}
          />
          {/* ========= Attraction =========== */}
          <Route
            path="/things-to-do/attraction-jogja"
            element={<AttractionPage />}
          ></Route>
          <Route
            path="/things-to-do/attraction-jogja/:id"
            element={<DetailAttraction />}
          />

          {/* ========= Souvenir =========== */}
          <Route
            path="/things-to-do/souvenir-jogja"
            element={<SouvenirPage />}
          ></Route>
          <Route
            path="/things-to-do/souvenir-jogja/:id"
            element={<DetailSouvenir />}
          />

          {/* ========= Food =========== */}
          <Route path="/things-to-do/food-jogja" element={<FoodPage />}></Route>
          <Route path="/things-to-do/food-jogja/:id" element={<DetailFood />} />

          {/* ========= Drinks =========== */}
          <Route
            path="/things-to-do/drinks-jogja"
            element={<DrinksPage />}
          ></Route>
          <Route
            path="/things-to-do/drinks-jogja/:id"
            element={<DetailDrinks />}
          />

          {/* ========= Cart =========== */}
          <Route path="/cart-page/" element={<CartPage />}>
            {" "}
          </Route>

          {/* ============ Auth ============ */}
          <Route path="/login" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="/register" element={<RegisterPage />}>
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
