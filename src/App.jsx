import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from 'react';

// ============ Utils
import ScrollToTop from "./Utils/ScrollToTop";

// ============  Home/Landing page path
const Jogja = lazy(() => import('./Pages/Jogja'));
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
const MuseumPageJogja = lazy(() => import ('./Pages/Things-to-do/MuseumPage/MuseumPage'))
const DetailMuseum = lazy(() => import('./ThingToDoComponents/Museum/Pages/DetailMuseum'))
// import MuseumPageJogja from "./Pages/Things-to-do/MuseumPage/MuseumPage";
// import DetailMuseum from "./ThingToDoComponents/Museum/Pages/DetailMuseum";
// hotel
const HotelPageJogja = lazy(() => import ('./Pages/Things-to-do/HotelPage/HotelPage'))
const DetailHotel = lazy(() => import('./ThingToDoComponents/Hotel/Pages/DetailHotel'))
// import HotelPageJogja from "./Pages/Things-to-do/HotelPage/HotelPage";
// import DetailHotel from "./ThingToDoComponents/Hotel/Pages/DetailHotel";
// Art Activities
const ArtActivitiesPage = lazy(() => import('./Pages/Things-to-do/ArtActivitiesPage/ArtActivitiesPage'))
const DetailArt = lazy (() => import('./ThingToDoComponents/ArtActivities/Pages/DetailArt'))
// import ArtActivitiesPage from "./Pages/Things-to-do/ArtActivitiesPage/ArtActivitiesPage";
// import DetailArt from "./ThingToDoComponents/ArtActivities/Pages/DetailArt";
// Attraction

//Souvenir
const SouvenirPage = lazy (() => import('./Pages/Things-to-do/SouvenirPage/SouvenirPage'))
const DetailSouvenir = lazy (() => import('./ThingToDoComponents/Souvenir/Pages/DetailSouvenir'))
// import SouvenirPage from "./Pages/Things-to-do/SouvenirPage/SouvenirPage";
// import DetailSouvenir from "./ThingToDoComponents/Souvenir/Pages/DetailSouvenir";

//Food
const FoodPage = lazy(() => import('./Pages/Things-to-do/FoodPage/FoodPage'))
const DetailFood = lazy(() => import('./ThingToDoComponents/Foods/Pages/DetailFood'))
// import FoodPage from "./Pages/Things-to-do/FoodPage/FoodPage";
// import DetailFood from "./ThingToDoComponents/Foods/Pages/DetailFood";

//Drinks
const DrinksPage = lazy (() => import('./Pages/Things-to-do/DrinksPage/DrinksPage'))
const DetailDrinks = lazy (()=> import('./ThingToDoComponents/Drinks/Pages/DetailDrinks'))
// import DrinksPage from "./Pages/Things-to-do/DrinksPage/DrinksPage";
// import DetailDrinks from "./ThingToDoComponents/Drinks/Pages/DetailDrinks";

// Attraction
const AttractionPage = lazy(() => import('./Pages/Things-to-do/AttractionPage/AttractionPage'))
const DetailAttraction = lazy(() => import('./ThingToDoComponents/Attraction/pages/DetailAttraction'))
// import AttractionPage from "./Pages/Things-to-do/AttractionPage/AttractionPage";
// import DetailAttraction from "./ThingToDoComponents/Attraction/pages/DetailAttraction";

// Auth
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Regiter";

import "./App.css";
import CartPage from "./Pages/CartPage";

const LoadingPage = lazy(() => import('./Pages/LoadingPage'));

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route 
          path="/" 
          element={
            <Suspense fallback={<LoadingPage />}>
              <Jogja />
            </Suspense>}></Route>
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
            element={<Suspense fallback={<LoadingPage />}><MuseumPageJogja /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/museum-jogja/:id"
            element={<Suspense fallback={<LoadingPage />}><DetailMuseum /></Suspense>}
          />
          {/* ========= hotel =========== */}
          <Route
            path="/things-to-do/hotel-jogja"
            element={<Suspense fallback={<LoadingPage />}><HotelPageJogja /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/hotel-jogja/:slug"
            element={<Suspense fallback={<LoadingPage />}><DetailHotel /></Suspense>}
          />
          {/* ========= Art Activities =========== */}
          <Route
            path="/things-to-do/art-activities-jogja"
            element={<Suspense fallback={<LoadingPage />}><ArtActivitiesPage /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/art-activities-jogja/:id"
            element={<Suspense fallback={<LoadingPage />}><DetailArt /></Suspense>}
          />
          {/* ========= Attraction =========== */}
          <Route
            path="/things-to-do/attraction-jogja"
            element={<Suspense fallback={<LoadingPage />}><AttractionPage /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/attraction-jogja/:id"
            element={<Suspense fallback={<LoadingPage />}><DetailAttraction /></Suspense>}
          />

          {/* ========= Souvenir =========== */}
          <Route
            path="/things-to-do/souvenir-jogja"
            element={<Suspense fallback={<LoadingPage />}><SouvenirPage /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/souvenir-jogja/:id"
            element={<Suspense fallback={<LoadingPage />}><DetailSouvenir /></Suspense>}
          />

          {/* ========= Food =========== */}
          <Route path="/things-to-do/food-jogja" 
          element={<Suspense fallback={<LoadingPage />}><FoodPage /></Suspense>}
          ></Route>
          <Route path="/things-to-do/food-jogja/:id" 
          element={<Suspense fallback={<LoadingPage />}><DetailFood /></Suspense>} 
          />

          {/* ========= Drinks =========== */}
          <Route
            path="/things-to-do/drinks-jogja"
            element={<Suspense fallback={<LoadingPage />}><DrinksPage /></Suspense>}
          ></Route>
          <Route
            path="/things-to-do/drinks-jogja/:id"
            element={<Suspense fallback={<LoadingPage />}><DetailDrinks /></Suspense>}
          />

          {/* ========= Cart =========== */}
          <Route path="/cart-page/" element={<CartPage />}>{" "}</Route>

          {/* ============ Auth ============ */}
          <Route path="/login" element={<LoginPage />}>{" "}</Route>
          <Route path="/register" element={<RegisterPage />}>{" "}</Route>
          <Route path="/loading" element={<LoadingPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
