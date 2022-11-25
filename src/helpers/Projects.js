import { shop, movies, crud, pando } from "../common/assets/index";

export const projects = [
    {
        name: "Shop App",
        img: shop,
        skills: ['React', 'Redux', 'CSS', 'HTML', 'API', 'Bootstrap'],
        buttons: [
            {
                name:"View live", 
                url :"https://thefenix2000-shop.herokuapp.com/"
            },
            {
                name: "Github", 
                url:"https://github.com/TheFenix2000/shop-app"
            }
        ]
    },
    {
        name: "Movies App",
        img: movies,
        skills: ['React', 'Redux', 'SASS', 'HTML', 'API'],
        buttons: [
            {
                name:"View live", 
                url :"https://thefenix2000-movies.herokuapp.com/"
            },
            {
                name: "Github", 
                url:"https://github.com/TheFenix2000/movies-app"
            }
        ]
    },
    {
        name: "CRUD App",
        img: crud,
        skills: ['React', 'Redux', 'CSS', 'HTML', 'API', 'MUI'],
        buttons: [
            {
                name: "Github", 
                url:"https://github.com/TheFenix2000/react-redux-crud"
            }
        ]
    },
    {
        name: "Pando Apartments",
        img: pando,
        skills: ['React', 'CSS', 'HTML', 'Bootstrap', 'MUI'],
        buttons: [
            {
                name: "View live",
                url: "https://pandoapartments.herokuapp.com/"
            },
            {
                name: "Github", 
                url:"https://github.com/Matd127/pandoapartments"
            }
        ]
    }
]