//@ts-ignore
import RecipeFinder from "../assets/Recipe_Finder.png"
//@ts-ignore
import CunyHub from "../assets/CUNY_HUB.png"
//@ts-ignore
import CunyHubTwo from "../assets/CunyHubTwo.png"
//@ts-ignore
import CunyHubThree from "../assets/CunyHubThree.png"
//@ts-ignore
import CunyYak from "../assets/cuny_yak.jpg"
//@ts-ignore
import creativo from "../assets/creativo.png"
//@ts-ignore
import CreativoTwo from "../assets/CreativoTwo.png"
//@ts-ignore
import CreativoThree from "../assets/CreativoThree.png"
//@ts-ignore
import CreativoFour from "../assets/CreativoFour.png"
//@ts-ignore
import CreativoFive from "../assets/CreativoFive.png"
//@ts-ignore
import CreativoSix from "../assets/CreativoSix.jpg"
//@ts-ignore
import CreativoSeven from "../assets/CreativoSeven.jpg"
//@ts-ignore
import GreenPrint from "../assets/python.png"
//@ts-ignore
import Earworm from "../assets/Earworm.png"
//@ts-ignore
import EarwormTwo from "../assets/EarwormTwo.png"
//@ts-ignore
import EarwormThree from "../assets/EarwormThree.png"

export const projects = [
  {
    title: "Earworm",
    params: "earworm",
    image: Earworm,
    image2: EarwormTwo,
    image3: EarwormThree,
    description:
      "A music visualization and exploration tool based on Billboard’s Year-End charts from 1970-2020. Provides an overview of the albums on every chart year as well as data visualization to offer insights on the way music trends develop over time.",
    code: "https://github.com/AlfredoMora06/earworm_",
    demo: "https://earwrm.io/",
    myRole: `I lead the design and development of the user interface using Figma, React.js as well as Recharts and Tailwind to display data and information in a fluid and pleasing manner. I also helped web scrape the information seen on the billboard Top 200 as far back as 1970, with Python.`
  },
  {
    title: "CUNY Hub",
    params:"cuny-hub",
    image: CunyHub,
    image2: CunyHubTwo,
    image3: CunyHubThree,
    description:
      "A hub for CUNY School information and relations between CUNY schools. Attending NYC high schools we noticed there isn’t somewhere we can find info on CUNY schools all in one place. It’s hard to find what you’re looking for if you don’t know where to look.",
    code: "https://github.com/nursimadonuk/CUNY_HUB_Project",
    demo: "https://cunyhub.shinyapps.io/CUNY_HUB_Project/",
    myRole: `Developed a web application with a group of 3 for a research project which provides CUNY related information to incoming or enrolled CUNY students which include: Fun Facts, Contact Information, Campus Map using Leaflet, School Expenses,
    Available Courses, Majors, Programs, Degrees, etc. Lead the frontend development using R Shiny with a MySQL backend. Implemented MySQL to query the normalized data and find relevant information to display and for comparisons.`
  },
  {
    title: "Recipe Finder",
    params: "recipe-finder",
    image: RecipeFinder,
    description:
      "You don't know what to cook? RecipeFinder finds it for you! Recipe Finder allows you to search recipes based on the ingredients you have to your disposal. By registering with us, you can save recipes you like for future reference, and also order recipes from our store of recipes.",
    code: "https://github.com/AlfredoMora06/RecipeFinder",
    myRole: `Implemented a web application with a team of four that allows users to search recipes based on the ingredients they have
    at their disposal. Lead the design and development of the user interface using HTML, CSS, and JavaScript to accommodate navigability and user’s recipe searches.`
  },
  {
    title: "CUNY Yak",
    params: "cuny-yak",
    image: CunyYak,
    description:
      "For people who need someone to talk to in a local radius. A social media based app to satisfy the theme of helping with the transitioning from work to the home. The application has the user post thoughts like a discussion post.",
    code: "https://github.com/AlfredoMora06/Grafic",
    myRole: `Implemented a social media based chat room with a team of three for users within NYC as well as college students in CUNY colleges. Students can use chat rooms anywhere, but the homepage is for those 
    in NYC for geolocation based talks. Created and formed a database using Firebase to store user login information and chat room posts. Implemented the design of the web application to accommodate the 
    needs for PC use using HTML, CSS and Javascript.`
  },
  {
    title: "Green Print",
    params: "green-print",
    image: GreenPrint,
    description:
      "What's your green print in the world? An under-construction web application built with Flask that traces individual carbon emissions (CO2 levels) for household products and vehicles, and returns their carbon footprint.",
    code: "https://github.com/AlfredoMora06/GreenPrint-Project",
    myRole: `Project was created as a submission for the Lehman College Hackathon with a group of three. I was in charge of analyzing, aggregating, and wrangling a 16,000 line dataset with Python and pandas. 
    Engineered an algorithm that detected the amount of CO2 emitted by a specific vehicle.`
  },
  {
    title: "Creativo",
    params: "creativo",
    image: creativo,
    image2: CreativoTwo,
    image3: CreativoThree,
    image4: CreativoFour,
    image5: CreativoFive,
    image6: CreativoSix,
    image7: CreativoSeven,
    description:
      "A website that shows photos of NYC and a blog of responses towards Media articles of our current lives. This is an HTML/CSS website built to show MEDP 150 class content.",
    code: "https://github.com/AlfredoMora06/creative",
    myRole: `This is an HTML/CSS website built to show MEDP 150 class content. It is a site that showcases creative tasks that involve anything from creating posters using common
    art methodologies as well as photoshopping images. Created a small HTML game that I hope to display here shortly.`
  },
  ]