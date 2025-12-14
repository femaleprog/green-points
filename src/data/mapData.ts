import { Restaurant, GroceryStore } from '@/types';

export const RESTAURANTS: Restaurant[] = [
    {
        "id": "res1",
        "name": "Green Burger Kitchen",
        "rating": 4.8,
        "deliveryTime": "20-30 min",
        "deliveryFee": "2.99€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Vegan",
            "Burgers",
            "American"
        ],
        "lat": 48.8566,
        "lng": 2.3522
    },
    {
        "id": "res2",
        "name": "Veggie Bowl",
        "rating": 4.6,
        "deliveryTime": "15-25 min",
        "deliveryFee": "1.49€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Healthy",
            "Bowls",
            "Organic"
        ],
        "lat": 48.8606,
        "lng": 2.3376
    },
    {
        "id": "res3",
        "name": "Pizza Verde",
        "rating": 4.5,
        "deliveryTime": "30-45 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Italian",
            "Pizza",
            "Vegan Cheese"
        ],
        "lat": 48.853,
        "lng": 2.3499
    },
    {
        "id": "res4",
        "name": "Le Potager de Charlotte",
        "rating": 4.9,
        "deliveryTime": "40-50 min",
        "deliveryFee": "3.50€",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Gourmet",
            "Organic"
        ],
        "lat": 48.8755,
        "lng": 2.345
    },
    {
        "id": "res5",
        "name": "Wild & The Moon",
        "rating": 4.7,
        "deliveryTime": "15-25 min",
        "deliveryFee": "1.99€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Juice",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.8655,
        "lng": 2.355
    },
    {
        "id": "res6",
        "name": "Jah Jah by Le Tricycle",
        "rating": 4.6,
        "deliveryTime": "25-35 min",
        "deliveryFee": "2.50€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Caribbean",
            "Vegan-Hotdogs",
            "Spicy"
        ],
        "lat": 48.871,
        "lng": 2.353
    },
    {
        "id": "res7",
        "name": "Hank Burger",
        "rating": 4.8,
        "deliveryTime": "20-30 min",
        "deliveryFee": "2.00€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Burgers",
            "Fast Food",
            "Paris Favorite"
        ],
        "lat": 48.863,
        "lng": 2.36
    },
    {
        "id": "res8",
        "name": "Soya",
        "rating": 4.5,
        "deliveryTime": "35-45 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Organic",
            "Chic"
        ],
        "lat": 48.868,
        "lng": 2.37
    },
    {
        "id": "gen_res_0",
        "name": "Happy Burger",
        "rating": 3.9,
        "deliveryTime": "40 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Raw",
            "Organic",
            "Sugar-Free"
        ],
        "lat": 48.854228909111754,
        "lng": 2.29515385908653
    },
    {
        "id": "gen_res_1",
        "name": "Green Bistro",
        "rating": 3.8,
        "deliveryTime": "24 min",
        "deliveryFee": "4.65€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Zero-Waste",
            "Sugar-Free",
            "Raw"
        ],
        "lat": 48.85283741457738,
        "lng": 2.365911100049868
    },
    {
        "id": "gen_res_2",
        "name": "Pure Delight",
        "rating": 3.9,
        "deliveryTime": "49 min",
        "deliveryFee": "3.08€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Healthy",
            "Vegan",
            "Gluten-Free"
        ],
        "lat": 48.88085982016142,
        "lng": 2.3143271628932442
    },
    {
        "id": "gen_res_3",
        "name": "Vigour Spot",
        "rating": 4.5,
        "deliveryTime": "43 min",
        "deliveryFee": "3.74€",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Local",
            "Zero-Waste",
            "Seasonal"
        ],
        "lat": 48.88665060927394,
        "lng": 2.402843235977727
    },
    {
        "id": "gen_res_4",
        "name": "Leafy Table",
        "rating": 3.7,
        "deliveryTime": "59 min",
        "deliveryFee": "4.60€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Vegan",
            "Healthy",
            "Gluten-Free"
        ],
        "lat": 48.83710086895789,
        "lng": 2.4072597923329515
    },
    {
        "id": "gen_res_5",
        "name": "Vitality Bowl",
        "rating": 4.6,
        "deliveryTime": "60 min",
        "deliveryFee": "2.93€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Vegan",
            "Zero-Waste",
            "Seasonal"
        ],
        "lat": 48.88706617005616,
        "lng": 2.3441254229178323
    },
    {
        "id": "gen_res_6",
        "name": "Bio Spot",
        "rating": 3.8,
        "deliveryTime": "29 min",
        "deliveryFee": "4.67€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Zero-Waste",
            "Gluten-Free",
            "Local"
        ],
        "lat": 48.90130656208728,
        "lng": 2.271752150414778
    },
    {
        "id": "gen_res_7",
        "name": "Fresh Burger",
        "rating": 4.5,
        "deliveryTime": "45 min",
        "deliveryFee": "2.68€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Zero-Waste",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.82832981304945,
        "lng": 2.401894944534195
    },
    {
        "id": "gen_res_8",
        "name": "Eco Spot",
        "rating": 3.6,
        "deliveryTime": "17 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Raw",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.86205499352098,
        "lng": 2.4591739254832663
    },
    {
        "id": "gen_res_9",
        "name": "Bio Kitchen",
        "rating": 4.8,
        "deliveryTime": "35 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mediterranean",
            "Seasonal",
            "Local",
            "Zero-Waste"
        ],
        "lat": 48.848742672346454,
        "lng": 2.2376339737021267
    },
    {
        "id": "gen_res_10",
        "name": "Wild Eco Delight",
        "rating": 3.8,
        "deliveryTime": "30 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Organic",
            "Vegan",
            "Sugar-Free"
        ],
        "lat": 48.89366659200443,
        "lng": 2.4335817854985256
    },
    {
        "id": "gen_res_11",
        "name": "Cozy Pure Bistro",
        "rating": 4.7,
        "deliveryTime": "28 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Vegan",
            "Gluten-Free",
            "Raw"
        ],
        "lat": 48.877300522606376,
        "lng": 2.4186964418440873
    },
    {
        "id": "gen_res_12",
        "name": "Good Cafe",
        "rating": 4,
        "deliveryTime": "34 min",
        "deliveryFee": "4.84€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Zero-Waste",
            "Raw",
            "Vegan"
        ],
        "lat": 48.844193204127315,
        "lng": 2.295781341366288
    },
    {
        "id": "gen_res_13",
        "name": "Cozy Eco Garden",
        "rating": 4.5,
        "deliveryTime": "50 min",
        "deliveryFee": "3.39€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Zero-Waste",
            "Sugar-Free",
            "Seasonal"
        ],
        "lat": 48.87437181967394,
        "lng": 2.3738220752329746
    },
    {
        "id": "gen_res_14",
        "name": "Bio Kitchen",
        "rating": 4.9,
        "deliveryTime": "29 min",
        "deliveryFee": "4.28€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mediterranean",
            "Healthy",
            "Organic",
            "Vegan"
        ],
        "lat": 48.82232247950479,
        "lng": 2.357609439571464
    },
    {
        "id": "gen_res_15",
        "name": "Vigour Cafe",
        "rating": 3.6,
        "deliveryTime": "22 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Raw",
            "Sugar-Free",
            "Seasonal"
        ],
        "lat": 48.89361394749871,
        "lng": 2.4457791523570953
    },
    {
        "id": "gen_res_16",
        "name": "Happy Burger",
        "rating": 4.4,
        "deliveryTime": "17 min",
        "deliveryFee": "2.46€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Vegan",
            "Fair-Trade",
            "Seasonal"
        ],
        "lat": 48.876429304821684,
        "lng": 2.2380447595891293
    },
    {
        "id": "gen_res_17",
        "name": "Wild Good Haven",
        "rating": 4.6,
        "deliveryTime": "16 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Raw",
            "Organic",
            "Seasonal"
        ],
        "lat": 48.884769942817684,
        "lng": 2.2430001773359804
    },
    {
        "id": "gen_res_18",
        "name": "Pure Burger",
        "rating": 4.1,
        "deliveryTime": "39 min",
        "deliveryFee": "1.67€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Fair-Trade",
            "Seasonal",
            "Vegan"
        ],
        "lat": 48.89152774816992,
        "lng": 2.2320327737768073
    },
    {
        "id": "gen_res_19",
        "name": "Friendly Eco Bistro",
        "rating": 3.5,
        "deliveryTime": "40 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Vegan",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.87350211887197,
        "lng": 2.2812552622539144
    },
    {
        "id": "gen_res_20",
        "name": "Bio Station",
        "rating": 3.8,
        "deliveryTime": "35 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Vegan",
            "Seasonal",
            "Gluten-Free"
        ],
        "lat": 48.85953268317424,
        "lng": 2.3635224290275634
    },
    {
        "id": "gen_res_21",
        "name": "Vegan Delight",
        "rating": 3.8,
        "deliveryTime": "24 min",
        "deliveryFee": "3.48€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Organic",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.88727234013293,
        "lng": 2.336265110989772
    },
    {
        "id": "gen_res_22",
        "name": "Cozy Earth Spot",
        "rating": 4.1,
        "deliveryTime": "33 min",
        "deliveryFee": "4.45€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Italian",
            "Seasonal",
            "Local",
            "Sugar-Free"
        ],
        "lat": 48.850891656518975,
        "lng": 2.406706356018633
    },
    {
        "id": "gen_res_23",
        "name": "Green Kitchen",
        "rating": 5,
        "deliveryTime": "26 min",
        "deliveryFee": "3.10€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Vegan",
            "Local",
            "Fair-Trade"
        ],
        "lat": 48.86299447714646,
        "lng": 2.2379596595232134
    },
    {
        "id": "gen_res_24",
        "name": "Pure Bowl",
        "rating": 3.7,
        "deliveryTime": "55 min",
        "deliveryFee": "3.06€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Organic",
            "Gluten-Free",
            "Vegan"
        ],
        "lat": 48.8860150013565,
        "lng": 2.372672891891857
    },
    {
        "id": "gen_res_25",
        "name": "Fresh Delight",
        "rating": 4.8,
        "deliveryTime": "49 min",
        "deliveryFee": "3.85€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Vegan",
            "Gluten-Free",
            "Seasonal"
        ],
        "lat": 48.88787581816093,
        "lng": 2.4438270558324033
    },
    {
        "id": "gen_res_26",
        "name": "Good Bowl",
        "rating": 3.7,
        "deliveryTime": "37 min",
        "deliveryFee": "1.78€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Healthy",
            "Fair-Trade",
            "Vegan"
        ],
        "lat": 48.83941667793221,
        "lng": 2.3574194199962317
    },
    {
        "id": "gen_res_27",
        "name": "Wild Plant Kitchen",
        "rating": 4.7,
        "deliveryTime": "32 min",
        "deliveryFee": "4.95€",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Organic",
            "Vegan",
            "Seasonal"
        ],
        "lat": 48.827375792955145,
        "lng": 2.3538582228814686
    },
    {
        "id": "gen_res_28",
        "name": "Leafy Burger",
        "rating": 4.9,
        "deliveryTime": "17 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Zero-Waste",
            "Fair-Trade",
            "Organic"
        ],
        "lat": 48.827292011307286,
        "lng": 2.3824715199915447
    },
    {
        "id": "gen_res_29",
        "name": "Bio Cafe",
        "rating": 4.4,
        "deliveryTime": "22 min",
        "deliveryFee": "4.00€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Raw",
            "Vegan",
            "Fair-Trade"
        ],
        "lat": 48.85539490318702,
        "lng": 2.4666987370085045
    },
    {
        "id": "gen_res_30",
        "name": "Fresh Station",
        "rating": 4.1,
        "deliveryTime": "48 min",
        "deliveryFee": "2.82€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Raw",
            "Fair-Trade",
            "Zero-Waste"
        ],
        "lat": 48.889374410182356,
        "lng": 2.3836224484823445
    },
    {
        "id": "gen_res_31",
        "name": "Grand Bio Table",
        "rating": 4.6,
        "deliveryTime": "31 min",
        "deliveryFee": "4.16€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Vegan",
            "Gluten-Free",
            "Organic"
        ],
        "lat": 48.869132634278316,
        "lng": 2.3662581113850916
    },
    {
        "id": "gen_res_32",
        "name": "Vigour Oasis",
        "rating": 4.9,
        "deliveryTime": "22 min",
        "deliveryFee": "3.87€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Vegan",
            "Gluten-Free",
            "Fair-Trade"
        ],
        "lat": 48.89187571593603,
        "lng": 2.325480685798261
    },
    {
        "id": "gen_res_33",
        "name": "Fresh Spot",
        "rating": 4.6,
        "deliveryTime": "27 min",
        "deliveryFee": "4.59€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Raw",
            "Fair-Trade",
            "Sugar-Free"
        ],
        "lat": 48.85943119593104,
        "lng": 2.4571571316512992
    },
    {
        "id": "gen_res_34",
        "name": "Urban Green Bistro",
        "rating": 4.8,
        "deliveryTime": "44 min",
        "deliveryFee": "1.73€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Fair-Trade",
            "Local",
            "Zero-Waste"
        ],
        "lat": 48.85094515744489,
        "lng": 2.4310150271111484
    },
    {
        "id": "gen_res_35",
        "name": "Good Haven",
        "rating": 4.1,
        "deliveryTime": "56 min",
        "deliveryFee": "2.17€",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Zero-Waste",
            "Vegan",
            "Seasonal"
        ],
        "lat": 48.83022489132859,
        "lng": 2.2535456153874747
    },
    {
        "id": "gen_res_36",
        "name": "Bio Table",
        "rating": 4,
        "deliveryTime": "23 min",
        "deliveryFee": "3.01€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Vegan",
            "Organic",
            "Gluten-Free"
        ],
        "lat": 48.84907984447909,
        "lng": 2.4673469644865684
    },
    {
        "id": "gen_res_37",
        "name": "Good Kitchen",
        "rating": 4.2,
        "deliveryTime": "34 min",
        "deliveryFee": "3.78€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Vegan",
            "Fair-Trade",
            "Sugar-Free"
        ],
        "lat": 48.83804095089518,
        "lng": 2.311516915508796
    },
    {
        "id": "gen_res_38",
        "name": "Vegan Bowl",
        "rating": 4.7,
        "deliveryTime": "31 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Organic",
            "Zero-Waste",
            "Local"
        ],
        "lat": 48.82253963289906,
        "lng": 2.367734814073016
    },
    {
        "id": "gen_res_39",
        "name": "Vitality Garden",
        "rating": 3.9,
        "deliveryTime": "51 min",
        "deliveryFee": "3.68€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Fair-Trade",
            "Sugar-Free",
            "Organic"
        ],
        "lat": 48.83493035736583,
        "lng": 2.341343067081197
    },
    {
        "id": "gen_res_40",
        "name": "Little Vigour Haven",
        "rating": 3.9,
        "deliveryTime": "40 min",
        "deliveryFee": "4.01€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Healthy",
            "Local",
            "Zero-Waste"
        ],
        "lat": 48.87108108756396,
        "lng": 2.274693180519532
    },
    {
        "id": "gen_res_41",
        "name": "Vegan Haven",
        "rating": 4.2,
        "deliveryTime": "51 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Fair-Trade",
            "Raw",
            "Zero-Waste"
        ],
        "lat": 48.84444491340722,
        "lng": 2.28541058092563
    },
    {
        "id": "gen_res_42",
        "name": "Urban Pure Bistro",
        "rating": 4.2,
        "deliveryTime": "28 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mediterranean",
            "Organic",
            "Healthy",
            "Raw"
        ],
        "lat": 48.852683343558006,
        "lng": 2.3693010339444607
    },
    {
        "id": "gen_res_43",
        "name": "Fresh Bowl",
        "rating": 3.5,
        "deliveryTime": "25 min",
        "deliveryFee": "1.65€",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Vegan",
            "Gluten-Free",
            "Local"
        ],
        "lat": 48.84644241309942,
        "lng": 2.2683408263570475
    },
    {
        "id": "gen_res_44",
        "name": "Green Burger",
        "rating": 4.5,
        "deliveryTime": "24 min",
        "deliveryFee": "4.57€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Zero-Waste",
            "Fair-Trade",
            "Sugar-Free"
        ],
        "lat": 48.815778824973926,
        "lng": 2.352693563702096
    },
    {
        "id": "gen_res_45",
        "name": "Happy Bowl",
        "rating": 3.5,
        "deliveryTime": "32 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Organic",
            "Seasonal",
            "Gluten-Free"
        ],
        "lat": 48.88219902443569,
        "lng": 2.408386428087852
    },
    {
        "id": "gen_res_46",
        "name": "Green Kitchen",
        "rating": 4,
        "deliveryTime": "47 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Raw",
            "Vegan",
            "Fair-Trade"
        ],
        "lat": 48.868210387143186,
        "lng": 2.226880591542815
    },
    {
        "id": "gen_res_47",
        "name": "Friendly Vegan Bistro",
        "rating": 4.8,
        "deliveryTime": "21 min",
        "deliveryFee": "3.41€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Fair-Trade",
            "Vegan",
            "Sugar-Free"
        ],
        "lat": 48.85311110633919,
        "lng": 2.4564169971637417
    },
    {
        "id": "gen_res_48",
        "name": "Eco Burger",
        "rating": 4.9,
        "deliveryTime": "47 min",
        "deliveryFee": "4.49€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Vegan",
            "Fair-Trade",
            "Gluten-Free"
        ],
        "lat": 48.82484240599731,
        "lng": 2.2754397404027236
    },
    {
        "id": "gen_res_49",
        "name": "Friendly Bio Station",
        "rating": 4.6,
        "deliveryTime": "48 min",
        "deliveryFee": "4.58€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Vegan",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.86719674944374,
        "lng": 2.2508722986490217
    },
    {
        "id": "gen_res_50",
        "name": "Root Bowl",
        "rating": 4.8,
        "deliveryTime": "45 min",
        "deliveryFee": "2.32€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Zero-Waste",
            "Vegan",
            "Seasonal"
        ],
        "lat": 48.84881222288175,
        "lng": 2.3892878490931193
    },
    {
        "id": "gen_res_51",
        "name": "Vitality Spot",
        "rating": 4.5,
        "deliveryTime": "38 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Gluten-Free",
            "Seasonal",
            "Raw"
        ],
        "lat": 48.851151868020644,
        "lng": 2.4542514949482594
    },
    {
        "id": "gen_res_52",
        "name": "Leafy Table",
        "rating": 4.3,
        "deliveryTime": "38 min",
        "deliveryFee": "2.31€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Organic",
            "Zero-Waste",
            "Sugar-Free"
        ],
        "lat": 48.84575447564425,
        "lng": 2.3213982806100057
    },
    {
        "id": "gen_res_53",
        "name": "Good Eatery",
        "rating": 4.1,
        "deliveryTime": "21 min",
        "deliveryFee": "3.60€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Zero-Waste",
            "Gluten-Free",
            "Healthy"
        ],
        "lat": 48.896516859070445,
        "lng": 2.392339686775804
    },
    {
        "id": "gen_res_54",
        "name": "Friendly Fresh Delight",
        "rating": 4.9,
        "deliveryTime": "25 min",
        "deliveryFee": "4.20€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Zero-Waste",
            "Raw",
            "Gluten-Free"
        ],
        "lat": 48.83268341739933,
        "lng": 2.3132810064835603
    },
    {
        "id": "gen_res_55",
        "name": "Good Haven",
        "rating": 4.9,
        "deliveryTime": "32 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Local",
            "Zero-Waste",
            "Sugar-Free"
        ],
        "lat": 48.86444436750749,
        "lng": 2.3368459863564386
    },
    {
        "id": "gen_res_56",
        "name": "Root Table",
        "rating": 4.8,
        "deliveryTime": "21 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Vegan",
            "Raw",
            "Healthy"
        ],
        "lat": 48.86177448595558,
        "lng": 2.354856622902017
    },
    {
        "id": "gen_res_57",
        "name": "Sustainable Vigour Delight",
        "rating": 4.6,
        "deliveryTime": "52 min",
        "deliveryFee": "4.67€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mediterranean",
            "Raw",
            "Gluten-Free",
            "Zero-Waste"
        ],
        "lat": 48.82896308428748,
        "lng": 2.3473827464437007
    },
    {
        "id": "gen_res_58",
        "name": "Wild Leafy Garden",
        "rating": 4.3,
        "deliveryTime": "40 min",
        "deliveryFee": "3.68€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Zero-Waste",
            "Organic",
            "Gluten-Free"
        ],
        "lat": 48.845523738357976,
        "lng": 2.4195559241284244
    },
    {
        "id": "gen_res_59",
        "name": "Urban Plant Cafe",
        "rating": 4.2,
        "deliveryTime": "29 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Vegan",
            "Gluten-Free",
            "Fair-Trade"
        ],
        "lat": 48.85725370314081,
        "lng": 2.3366654931910547
    },
    {
        "id": "gen_res_60",
        "name": "Delicious Good Spot",
        "rating": 4,
        "deliveryTime": "16 min",
        "deliveryFee": "4.83€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Italian",
            "Sugar-Free",
            "Vegan",
            "Gluten-Free"
        ],
        "lat": 48.90192291931873,
        "lng": 2.3645425659306976
    },
    {
        "id": "gen_res_61",
        "name": "Happy Bistro",
        "rating": 4.6,
        "deliveryTime": "40 min",
        "deliveryFee": "3.53€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Vegan",
            "Seasonal",
            "Sugar-Free"
        ],
        "lat": 48.83342829860399,
        "lng": 2.3230293865830403
    },
    {
        "id": "gen_res_62",
        "name": "Delicious Vigour Eatery",
        "rating": 3.6,
        "deliveryTime": "37 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Vegan",
            "Fair-Trade",
            "Gluten-Free"
        ],
        "lat": 48.8421090551511,
        "lng": 2.3628969368173567
    },
    {
        "id": "gen_res_63",
        "name": "Modern Pure Station",
        "rating": 4.9,
        "deliveryTime": "48 min",
        "deliveryFee": "4.09€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Fair-Trade",
            "Healthy",
            "Vegan"
        ],
        "lat": 48.816865433012055,
        "lng": 2.4124691311733044
    },
    {
        "id": "gen_res_64",
        "name": "Eco Haven",
        "rating": 4.3,
        "deliveryTime": "50 min",
        "deliveryFee": "3.27€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "French",
            "Healthy",
            "Raw",
            "Fair-Trade"
        ],
        "lat": 48.84603713136613,
        "lng": 2.3279880827895036
    },
    {
        "id": "gen_res_65",
        "name": "Sustainable Vegan Station",
        "rating": 4.2,
        "deliveryTime": "19 min",
        "deliveryFee": "2.70€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mediterranean",
            "Local",
            "Zero-Waste",
            "Raw"
        ],
        "lat": 48.8900096261174,
        "lng": 2.4113642322713367
    },
    {
        "id": "gen_res_66",
        "name": "Fresh Delight",
        "rating": 4,
        "deliveryTime": "21 min",
        "deliveryFee": "2.74€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Vegan",
            "Fair-Trade",
            "Zero-Waste"
        ],
        "lat": 48.875138823774805,
        "lng": 2.318240432069809
    },
    {
        "id": "gen_res_67",
        "name": "Vitality Cafe",
        "rating": 4.4,
        "deliveryTime": "53 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Zero-Waste",
            "Local",
            "Vegan"
        ],
        "lat": 48.88392726137556,
        "lng": 2.2504723420196706
    },
    {
        "id": "gen_res_68",
        "name": "Vigour Haven",
        "rating": 3.6,
        "deliveryTime": "28 min",
        "deliveryFee": "3.51€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Vegan",
            "Raw",
            "Gluten-Free"
        ],
        "lat": 48.85918191243215,
        "lng": 2.297693966213617
    },
    {
        "id": "gen_res_69",
        "name": "Plant Bowl",
        "rating": 4.6,
        "deliveryTime": "36 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Mexican",
            "Zero-Waste",
            "Gluten-Free",
            "Seasonal"
        ],
        "lat": 48.84421085601072,
        "lng": 2.4675867228438775
    },
    {
        "id": "gen_res_70",
        "name": "Good Delight",
        "rating": 5,
        "deliveryTime": "18 min",
        "deliveryFee": "4.30€",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Healthy",
            "Gluten-Free",
            "Raw"
        ],
        "lat": 48.84870484502898,
        "lng": 2.3386500626171487
    },
    {
        "id": "gen_res_71",
        "name": "Fresh Delight",
        "rating": 4.8,
        "deliveryTime": "32 min",
        "deliveryFee": "4.78€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Fusion",
            "Vegan",
            "Gluten-Free",
            "Seasonal"
        ],
        "lat": 48.89778875094722,
        "lng": 2.3960012446165835
    },
    {
        "id": "gen_res_72",
        "name": "Little Green Station",
        "rating": 3.8,
        "deliveryTime": "15 min",
        "deliveryFee": "2.26€",
        "imageUrl": "https://images.unsplash.com/photo-1520072959219-c595dc8231e2?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Fair-Trade",
            "Raw",
            "Vegan"
        ],
        "lat": 48.900909543684605,
        "lng": 2.242393141903055
    },
    {
        "id": "gen_res_73",
        "name": "Urban Vegan Delight",
        "rating": 4.6,
        "deliveryTime": "20 min",
        "deliveryFee": "3.91€",
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Indian",
            "Fair-Trade",
            "Zero-Waste",
            "Raw"
        ],
        "lat": 48.83009965482418,
        "lng": 2.2431947833317967
    },
    {
        "id": "gen_res_74",
        "name": "Happy Spot",
        "rating": 4.9,
        "deliveryTime": "16 min",
        "deliveryFee": "4.76€",
        "imageUrl": "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Asian",
            "Gluten-Free",
            "Seasonal",
            "Raw"
        ],
        "lat": 48.889696193652895,
        "lng": 2.325661733726126
    },
    {
        "id": "gen_res_75",
        "name": "Bio Kitchen",
        "rating": 4.8,
        "deliveryTime": "27 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1540914124281-342587941389?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Zero-Waste",
            "Healthy",
            "Fair-Trade"
        ],
        "lat": 48.8940777270721,
        "lng": 2.2901695846815255
    },
    {
        "id": "gen_res_76",
        "name": "Vigour Spot",
        "rating": 4.3,
        "deliveryTime": "23 min",
        "deliveryFee": "3.62€",
        "imageUrl": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Zero-Waste",
            "Organic",
            "Vegan"
        ],
        "lat": 48.81844837123891,
        "lng": 2.2348736475218076
    },
    {
        "id": "gen_res_77",
        "name": "Vitality Burger",
        "rating": 4.8,
        "deliveryTime": "25 min",
        "deliveryFee": "2.77€",
        "imageUrl": "https://images.unsplash.com/photo-1511690656952-34342d5090e3?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Japanese",
            "Local",
            "Organic",
            "Sugar-Free"
        ],
        "lat": 48.85101215826716,
        "lng": 2.3759697754098967
    },
    {
        "id": "gen_res_78",
        "name": "Fresh Eatery",
        "rating": 4.4,
        "deliveryTime": "55 min",
        "deliveryFee": "Free",
        "imageUrl": "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Thai",
            "Organic",
            "Zero-Waste",
            "Raw"
        ],
        "lat": 48.87520988767694,
        "lng": 2.3024499727349994
    },
    {
        "id": "gen_res_79",
        "name": "Vigour Cafe",
        "rating": 4.1,
        "deliveryTime": "25 min",
        "deliveryFee": "2.14€",
        "imageUrl": "https://images.unsplash.com/photo-1543340904-9937e00e8cd5?auto=format&fit=crop&q=80&w=400",
        "tags": [
            "Lebanese",
            "Seasonal",
            "Zero-Waste",
            "Gluten-Free"
        ],
        "lat": 48.832677264291306,
        "lng": 2.3953025911980173
    }
];

export const GROCERY_STORES: GroceryStore[] = [
    {
        "id": "gs1",
        "name": "Bio c' Bon",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "0.4 km",
        "offers": [
            "20% off Organic Apples",
            "Buy 1 Get 1 Tofu"
        ],
        "lat": 48.8566,
        "lng": 2.3522
    },
    {
        "id": "gs2",
        "name": "Naturalia",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.8 km",
        "offers": [
            "3€ off on Bulk items",
            "Free reusable bag"
        ],
        "lat": 48.864716,
        "lng": 2.349014
    },
    {
        "id": "gs3",
        "name": "Carrefour Bio",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "1.2 km",
        "offers": [
            "15% off Plant-based Milk"
        ],
        "lat": 48.859,
        "lng": 2.34
    },
    {
        "id": "gs4",
        "name": "Biocoop",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "0.6 km",
        "offers": [
            "10% Student Discount",
            "Local Veggies"
        ],
        "lat": 48.849,
        "lng": 2.35
    },
    {
        "id": "gs5",
        "name": "La Vie Claire",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "0.9 km",
        "offers": [
            "Bulk Grains Sale",
            "GF Options"
        ],
        "lat": 48.862,
        "lng": 2.335
    },
    {
        "id": "gs6",
        "name": "Naturalia Vegan",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "1.5 km",
        "offers": [
            "Free Tofu",
            "Vegan Cheese Promo"
        ],
        "lat": 48.873,
        "lng": 2.342
    },
    {
        "id": "gen_gs_0",
        "name": "Eco Shop",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "3.2 km",
        "offers": [
            "Loyalty Points x2",
            "Bulk Discount"
        ],
        "lat": 48.85300794822648,
        "lng": 2.334985743027622
    },
    {
        "id": "gen_gs_1",
        "name": "Magasin Sustainable",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "1.0 km",
        "offers": [
            "Sample Tasting",
            "Bulk Discount"
        ],
        "lat": 48.829002530458524,
        "lng": 2.328379571260623
    },
    {
        "id": "gen_gs_2",
        "name": "Magasin Modern",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "3.1 km",
        "offers": [
            "Loyalty Points x2",
            "20% off Veggies"
        ],
        "lat": 48.83950730318439,
        "lng": 2.4154904155254107
    },
    {
        "id": "gen_gs_3",
        "name": "Fresh Market",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "0.2 km",
        "offers": [
            "20% off Veggies",
            "Free Bag"
        ],
        "lat": 48.818260592695715,
        "lng": 2.3185442087655534
    },
    {
        "id": "gen_gs_4",
        "name": "Urban Farm",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "0.9 km",
        "offers": [
            "Student Discount",
            "Sample Tasting"
        ],
        "lat": 48.85487662116394,
        "lng": 2.2821125167295335
    },
    {
        "id": "gen_gs_5",
        "name": "Magasin Sustainable",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "4.6 km",
        "offers": [
            "20% off Veggies",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.881643661225226,
        "lng": 2.4146338995715815
    },
    {
        "id": "gen_gs_6",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "0.7 km",
        "offers": [
            "Bulk Discount",
            "Loyalty Points x2"
        ],
        "lat": 48.82117773398616,
        "lng": 2.318048754595156
    },
    {
        "id": "gen_gs_7",
        "name": "Nature Store",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.6 km",
        "offers": [
            "20% off Veggies",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.83631130236026,
        "lng": 2.3878206819162484
    },
    {
        "id": "gen_gs_8",
        "name": "Magasin Friendly",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "0.9 km",
        "offers": [
            "Buy 1 Get 1 Free",
            "20% off Veggies"
        ],
        "lat": 48.863305724296694,
        "lng": 2.2716738641559124
    },
    {
        "id": "gen_gs_9",
        "name": "Magasin Organic",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "1.7 km",
        "offers": [
            "Loyalty Points x2",
            "20% off Veggies"
        ],
        "lat": 48.85837272124249,
        "lng": 2.4277938245826447
    },
    {
        "id": "gen_gs_10",
        "name": "Magasin Organic",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "5.0 km",
        "offers": [
            "20% off Veggies",
            "Free Bag"
        ],
        "lat": 48.82045787092568,
        "lng": 2.269924832313744
    },
    {
        "id": "gen_gs_11",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "4.2 km",
        "offers": [
            "20% off Veggies",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.89207337563479,
        "lng": 2.4255594414115884
    },
    {
        "id": "gen_gs_12",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "2.3 km",
        "offers": [
            "Student Discount",
            "Bulk Discount"
        ],
        "lat": 48.877127531766085,
        "lng": 2.3810785502865532
    },
    {
        "id": "gen_gs_13",
        "name": "Magasin Delicious",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.6 km",
        "offers": [
            "20% off Veggies",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.82692612596851,
        "lng": 2.284559969598525
    },
    {
        "id": "gen_gs_14",
        "name": "Magasin Friendly",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "3.6 km",
        "offers": [
            "Bulk Discount",
            "Sample Tasting"
        ],
        "lat": 48.8299576463808,
        "lng": 2.409050983832358
    },
    {
        "id": "gen_gs_15",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "0.8 km",
        "offers": [
            "Student Discount",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.88881603679854,
        "lng": 2.391309253125448
    },
    {
        "id": "gen_gs_16",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "0.7 km",
        "offers": [
            "Free Delivery",
            "Bulk Discount"
        ],
        "lat": 48.82767163871796,
        "lng": 2.369304204318887
    },
    {
        "id": "gen_gs_17",
        "name": "Urban Farm",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "4.4 km",
        "offers": [
            "20% off Veggies",
            "Bulk Discount"
        ],
        "lat": 48.88126176279776,
        "lng": 2.3174933049909168
    },
    {
        "id": "gen_gs_18",
        "name": "Daily Bio",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "4.5 km",
        "offers": [
            "Bulk Discount",
            "Sample Tasting"
        ],
        "lat": 48.84915771481178,
        "lng": 2.465732465781346
    },
    {
        "id": "gen_gs_19",
        "name": "Magasin Secret",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.4 km",
        "offers": [
            "Student Discount",
            "Loyalty Points x2"
        ],
        "lat": 48.82224572347325,
        "lng": 2.253661470816661
    },
    {
        "id": "gen_gs_20",
        "name": "Magasin Little",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "3.3 km",
        "offers": [
            "20% off Veggies",
            "Sample Tasting"
        ],
        "lat": 48.860305176065886,
        "lng": 2.4010437254419985
    },
    {
        "id": "gen_gs_21",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "4.3 km",
        "offers": [
            "Sample Tasting",
            "Student Discount"
        ],
        "lat": 48.89056537775906,
        "lng": 2.4027976282449055
    },
    {
        "id": "gen_gs_22",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "0.9 km",
        "offers": [
            "20% off Veggies",
            "Bulk Discount"
        ],
        "lat": 48.85601139544851,
        "lng": 2.363420862997856
    },
    {
        "id": "gen_gs_23",
        "name": "Magasin Little",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "3.8 km",
        "offers": [
            "Bulk Discount",
            "20% off Veggies"
        ],
        "lat": 48.85248090046351,
        "lng": 2.2700082936990094
    },
    {
        "id": "gen_gs_24",
        "name": "Magasin Urban",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "2.5 km",
        "offers": [
            "Sample Tasting",
            "Student Discount"
        ],
        "lat": 48.890652234885955,
        "lng": 2.4614476809125176
    },
    {
        "id": "gen_gs_25",
        "name": "Magasin Friendly",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "1.8 km",
        "offers": [
            "20% off Veggies",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.86960964937452,
        "lng": 2.313311390777657
    },
    {
        "id": "gen_gs_26",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "2.0 km",
        "offers": [
            "Student Discount",
            "Sample Tasting"
        ],
        "lat": 48.87332246384385,
        "lng": 2.4262583962429027
    },
    {
        "id": "gen_gs_27",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "2.3 km",
        "offers": [
            "Free Bag",
            "Sample Tasting"
        ],
        "lat": 48.899063872445936,
        "lng": 2.2973375514369434
    },
    {
        "id": "gen_gs_28",
        "name": "Magasin Grand",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "1.7 km",
        "offers": [
            "Sample Tasting",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.84430658161449,
        "lng": 2.4207160367288973
    },
    {
        "id": "gen_gs_29",
        "name": "Eco Shop",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "2.4 km",
        "offers": [
            "Sample Tasting",
            "Loyalty Points x2"
        ],
        "lat": 48.84712142365371,
        "lng": 2.2899554124318846
    },
    {
        "id": "gen_gs_30",
        "name": "Magasin Friendly",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "4.9 km",
        "offers": [
            "Buy 1 Get 1 Free",
            "20% off Veggies"
        ],
        "lat": 48.844634046800024,
        "lng": 2.2798991582237615
    },
    {
        "id": "gen_gs_31",
        "name": "Magasin Sustainable",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "3.8 km",
        "offers": [
            "Bulk Discount",
            "Student Discount"
        ],
        "lat": 48.85442915224022,
        "lng": 2.2766202378091327
    },
    {
        "id": "gen_gs_32",
        "name": "Magasin Urban",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "2.1 km",
        "offers": [
            "20% off Veggies",
            "Free Delivery"
        ],
        "lat": 48.862778776821486,
        "lng": 2.369304615667823
    },
    {
        "id": "gen_gs_33",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "0.4 km",
        "offers": [
            "Buy 1 Get 1 Free",
            "Free Bag"
        ],
        "lat": 48.89010620766082,
        "lng": 2.2301245622234886
    },
    {
        "id": "gen_gs_34",
        "name": "Magasin Modern",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "0.7 km",
        "offers": [
            "Free Delivery",
            "Sample Tasting"
        ],
        "lat": 48.86447174276524,
        "lng": 2.4146182803689284
    },
    {
        "id": "gen_gs_35",
        "name": "Vegan Mart",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "3.3 km",
        "offers": [
            "Loyalty Points x2",
            "Student Discount"
        ],
        "lat": 48.825692656419285,
        "lng": 2.2854715358132602
    },
    {
        "id": "gen_gs_36",
        "name": "Eco Shop",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "4.2 km",
        "offers": [
            "Buy 1 Get 1 Free",
            "Loyalty Points x2"
        ],
        "lat": 48.81983973504445,
        "lng": 2.3231100201320687
    },
    {
        "id": "gen_gs_37",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "1.0 km",
        "offers": [
            "Student Discount",
            "Free Bag"
        ],
        "lat": 48.88033574502007,
        "lng": 2.2700807847059656
    },
    {
        "id": "gen_gs_38",
        "name": "Vegan Mart",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "2.3 km",
        "offers": [
            "20% off Veggies",
            "Bulk Discount"
        ],
        "lat": 48.874431370462815,
        "lng": 2.233835873828866
    },
    {
        "id": "gen_gs_39",
        "name": "Urban Farm",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "2.6 km",
        "offers": [
            "Bulk Discount",
            "Loyalty Points x2"
        ],
        "lat": 48.8449190570065,
        "lng": 2.449522586322782
    },
    {
        "id": "gen_gs_40",
        "name": "Planet Organic",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "2.1 km",
        "offers": [
            "Free Delivery",
            "20% off Veggies"
        ],
        "lat": 48.86483836627758,
        "lng": 2.3590776363156656
    },
    {
        "id": "gen_gs_41",
        "name": "Magasin Little",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "4.3 km",
        "offers": [
            "Student Discount",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.84872164124419,
        "lng": 2.263873591467622
    },
    {
        "id": "gen_gs_42",
        "name": "Urban Farm",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "3.8 km",
        "offers": [
            "Bulk Discount",
            "Free Bag"
        ],
        "lat": 48.84265734226297,
        "lng": 2.3496953133060643
    },
    {
        "id": "gen_gs_43",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.6 km",
        "offers": [
            "Bulk Discount",
            "Free Delivery"
        ],
        "lat": 48.8323506303668,
        "lng": 2.3821479255005196
    },
    {
        "id": "gen_gs_44",
        "name": "Magasin Secret",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "2.5 km",
        "offers": [
            "Student Discount",
            "Free Bag"
        ],
        "lat": 48.8903230172266,
        "lng": 2.4342616072636454
    },
    {
        "id": "gen_gs_45",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "4.4 km",
        "offers": [
            "Sample Tasting",
            "Free Delivery"
        ],
        "lat": 48.86864230302065,
        "lng": 2.240474092303573
    },
    {
        "id": "gen_gs_46",
        "name": "Magasin Secret",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "4.9 km",
        "offers": [
            "Free Bag",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.853424620952204,
        "lng": 2.3117565576459165
    },
    {
        "id": "gen_gs_47",
        "name": "Magasin Modern",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "2.0 km",
        "offers": [
            "Bulk Discount",
            "Sample Tasting"
        ],
        "lat": 48.819627298345864,
        "lng": 2.235622713609719
    },
    {
        "id": "gen_gs_48",
        "name": "Urban Farm",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "4.6 km",
        "offers": [
            "Free Delivery",
            "Bulk Discount"
        ],
        "lat": 48.84580991687902,
        "lng": 2.2253205066595556
    },
    {
        "id": "gen_gs_49",
        "name": "Daily Bio",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "2.1 km",
        "offers": [
            "Free Bag",
            "Student Discount"
        ],
        "lat": 48.818306229408364,
        "lng": 2.40265279792291
    },
    {
        "id": "gen_gs_50",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "2.8 km",
        "offers": [
            "20% off Veggies",
            "Free Bag"
        ],
        "lat": 48.89404910676182,
        "lng": 2.3477202314157366
    },
    {
        "id": "gen_gs_51",
        "name": "Vegan Mart",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "4.8 km",
        "offers": [
            "Sample Tasting",
            "Student Discount"
        ],
        "lat": 48.87391196688726,
        "lng": 2.445302612165825
    },
    {
        "id": "gen_gs_52",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "1.3 km",
        "offers": [
            "20% off Veggies",
            "Free Delivery"
        ],
        "lat": 48.848284986935354,
        "lng": 2.463223340580018
    },
    {
        "id": "gen_gs_53",
        "name": "Magasin Sustainable",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "3.7 km",
        "offers": [
            "20% off Veggies",
            "Loyalty Points x2"
        ],
        "lat": 48.90102749696848,
        "lng": 2.228011321820299
    },
    {
        "id": "gen_gs_54",
        "name": "Magasin Wild",
        "image": "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
        "distance": "5.0 km",
        "offers": [
            "Free Delivery",
            "Buy 1 Get 1 Free"
        ],
        "lat": 48.89062284753652,
        "lng": 2.337703885205588
    },
    {
        "id": "gen_gs_55",
        "name": "Magasin Sustainable",
        "image": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=400",
        "distance": "0.2 km",
        "offers": [
            "Free Delivery",
            "20% off Veggies"
        ],
        "lat": 48.86283834230143,
        "lng": 2.345576282959988
    },
    {
        "id": "gen_gs_56",
        "name": "Green Grocer",
        "image": "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400",
        "distance": "0.6 km",
        "offers": [
            "Free Delivery",
            "20% off Veggies"
        ],
        "lat": 48.86390550112556,
        "lng": 2.3233998613216738
    },
    {
        "id": "gen_gs_57",
        "name": "Magasin Secret",
        "image": "https://images.unsplash.com/photo-1534723452862-4c874018d66d?auto=format&fit=crop&q=80&w=400",
        "distance": "4.1 km",
        "offers": [
            "Bulk Discount",
            "Free Delivery"
        ],
        "lat": 48.891619627227634,
        "lng": 2.2593479015711866
    },
    {
        "id": "gen_gs_58",
        "name": "Bio Market",
        "image": "https://images.unsplash.com/photo-1606213753760-4929858712a4?auto=format&fit=crop&q=80&w=400",
        "distance": "3.3 km",
        "offers": [
            "Student Discount",
            "Sample Tasting"
        ],
        "lat": 48.88155471068957,
        "lng": 2.2309699022827685
    },
    {
        "id": "gen_gs_59",
        "name": "Magasin Cozy",
        "image": "https://images.unsplash.com/photo-1519681393784-d8e5b5a45742?auto=format&fit=crop&q=80&w=400",
        "distance": "4.9 km",
        "offers": [
            "20% off Veggies",
            "Bulk Discount"
        ],
        "lat": 48.86799844091846,
        "lng": 2.2494355528278693
    }
];
