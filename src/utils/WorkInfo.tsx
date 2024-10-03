import { Experience } from "../types/Experience"
//@ts-ignore
import cuny_k16_initiatives_logo from "../assets/cuny_k16_initiatives_logo.jpeg"
//@ts-ignore
import in_the_lab_pm_logo from "../assets/in_the_lab_pm_logo.jpeg"
//@ts-ignore
import hunter_college_logo from "../assets/hunter_college_logo.jpeg"
//@ts-ignore
import tealsk12_logo from "../assets/tealsk12_logo.jpeg"
//@ts-ignore
import tracflo_logo from "../assets/tracflo_logo.jpeg"
//@ts-ignore
import cuny_tech_prep_logo from "../assets/cuny_tech_prep_logo.jpeg"
//@ts-ignore
import wildfire_systems_inc_logo from "../assets/wildfire_systems_inc_logo.jpeg"

export const WorkExperiences = (
  t: (s: string) => string,
): Experience[] => {
  return [
    {
      workTitle: "Wildfire Systems Inc",
      image: wildfire_systems_inc_logo,
      position: t("About.WorkCard.softwareEngineer"),
      date: t("About.WorkCard.Dates.wildfire")
    },
    {
      workTitle: "TracFlo",
      image: tracflo_logo,
      position: t("About.WorkCard.softwareEngineerII"),
      date: t("About.WorkCard.Dates.tracflo3")
    },
    {
      workTitle: "TracFlo",
      image: tracflo_logo,
      position: t("About.WorkCard.softwareEngineerI"),
      date: t("About.WorkCard.Dates.tracflo2")
    },
    {
      workTitle: "TracFlo",
      image: tracflo_logo,
      position: t("About.WorkCard.softwareEngineerIntern"),
      date: t("About.WorkCard.Dates.tracflo1")
    },
    {
      workTitle: "CUNY K16 Initiatives",
      image: cuny_k16_initiatives_logo,
      position: t("About.WorkCard.computerScienceTutor"),
      date: t("About.WorkCard.Dates.cunyK")
    }
  ]
}


export const EducationExperiences = (
  t: (s: string) => string,
): Experience[] => {
  return [
    {
      workTitle: "InTheLab",
      image: in_the_lab_pm_logo,
      position: t("About.WorkCard.productManagementCourse"),
      date: t("About.WorkCard.Dates.inTheLab")
    },
    {
      workTitle: "CUNY Tech Prep",
      image: cuny_tech_prep_logo,
      position: t("About.WorkCard.apprenticeship"),
      date: t("About.WorkCard.Dates.ctp")
    },
    {
      workTitle: "Hunter College",
      image: hunter_college_logo,
      position: t("About.WorkCard.baComputerScience"),
      date:  t("About.WorkCard.Dates.hunter")
    },
  ]
}

export const VolunteerExperiences = (
  t: (s: string) => string,
): Experience[] => {
  return [
    {
      workTitle: "Microsoft TEALS",
      image: tealsk12_logo,
      position: t("About.WorkCard.computerLabAssistant"),
      date:  t("About.WorkCard.Dates.teals")
    },
  ]
}
