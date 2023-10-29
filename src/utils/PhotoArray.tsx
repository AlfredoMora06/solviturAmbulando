import { Photo } from "../types/Photo"
//@ts-ignore
import Tio from "../assets/film/Tio.jpg"
//@ts-ignore
import CookingAlAire from "../assets/film/CookingAlAire.jpg"
//@ts-ignore
import TiempoTezo from "../assets/film/TiempoTezo.jpg"
//@ts-ignore
import Nopal from "../assets/film/Nopal.jpg"
//@ts-ignore
import FatherTime from "../assets/film/FatherTime.jpg"
//@ts-ignore
import OdeToTheMets from "../assets/film/OdeToTheMets.jpg"
//@ts-ignore
import PadreEHijo from "../assets/film/PadreEHijo.jpg"
//@ts-ignore
import Blur from "../assets/film/Blur.jpg"
//@ts-ignore
import Indigenismo from "../assets/film/Indigenismo.jpg"
//@ts-ignore
import Basura from "../assets/film/Basura.jpg"

//@ts-ignore
import LunaBalloona from "../assets/portraits/LunaBalloona.jpg"

export function photoArray():Photo[] {

  return [
    {
      src: Tio,
      type: "film",
    },
    {
      src: CookingAlAire,
      type: "film",
    },
    {
      src: TiempoTezo,
      type: "film",
    },
    {
      src: Nopal,
      type: "film",
    },
    {
      src: FatherTime,
      type: "film",
    },
    {
      src: LunaBalloona,
      type: "portrait",
    },
    {
      src: OdeToTheMets,
      type: "film",
    },
    {
      src: PadreEHijo,
      type: "film",
    },
    {
      src: Blur,
      type: "film",
    },
    {
      src: Indigenismo,
      type: "film",
    },
    {
      src: Basura,
      type: "film",
    },

  ]
}
