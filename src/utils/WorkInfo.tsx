import { Experience } from "../types/Experience"
//@ts-ignore
import cuny_k16_initiatives_logo from "../assets/cuny_k16_initiatives_logo.jpeg"
//@ts-ignore
import in_the_lab_pm_logo from "../assets/in_the_lab_pm_logo.jpeg"
//@ts-ignore
import hunter_college_logo from "../assets/hunter_college_logo.jpeg"
//@ts-ignore
import tealsk12_logo from "../assets/tealsk12_logo.jpeg"

export const WorkExperiences = (
  t: (s: string) => string,
): Experience[] => {
  return [
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1630493741706/tracflo_logo?e=1714608000&v=beta&t=zeheLbiLDt_nK4RaGKHBzWhRWffBXTGHfxUuF0099x0",
      position: t("About.WorkCard.softwareEngineerII"),
      date: t("About.WorkCard.Dates.tracflo3")
    },
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1630493741706/tracflo_logo?e=1714608000&v=beta&t=zeheLbiLDt_nK4RaGKHBzWhRWffBXTGHfxUuF0099x0",
      position: t("About.WorkCard.softwareEngineerI"),
      date: t("About.WorkCard.Dates.tracflo2")
    },
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1630493741706/tracflo_logo?e=1714608000&v=beta&t=zeheLbiLDt_nK4RaGKHBzWhRWffBXTGHfxUuF0099x0",
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
      image: "https://media.licdn.com/dms/image/C4E0BAQE2heJzO0qrMA/company-logo_100_100/0/1657824338053/cuny_tech_prep_logo?e=1714608000&v=beta&t=fxEaKAYwLbNuSbpXovB-WxmYrIigs0IpGXW2PlsP5qE",
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
