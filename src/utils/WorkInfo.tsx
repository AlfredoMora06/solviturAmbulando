import { Experience } from "../types/Experience"


export const WorkExperiences = (
  t: (s: string) => string,
): Experience[] => {
  return [
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
      position: t("About.WorkCard.softwareEngineerII"),
      date: t("About.WorkCard.Dates.tracflo3")
    },
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
      position: t("About.WorkCard.softwareEngineerI"),
      date: t("About.WorkCard.Dates.tracflo2")
    },
    {
      workTitle: "TracFlo",
      image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
      position: t("About.WorkCard.softwareEngineerIntern"),
      date: t("About.WorkCard.Dates.tracflo1")
    },
    {
      workTitle: "CUNY K16 Initiatives",
      image: "https://media.licdn.com/dms/image/C4E0BAQHohMw7_hiXvQ/company-logo_100_100/0/1663618846214/cuny_k16_initiatives_logo?e=1706745600&v=beta&t=YO6qiZZLjCc5DblAPlqH0C1z9679-VjNAknumMRBfSw",
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
      image: "https://media.licdn.com/dms/image/C560BAQFYCKdqbmOSuw/company-logo_100_100/0/1655339856108/in_the_lab_pm_logo?e=1706745600&v=beta&t=Reuze65bJz1QegWag2LnJS_EFH4GPbS0R9HgP6-7JFA",
      position: t("About.WorkCard.productManagementCourse"),
      date: t("About.WorkCard.Dates.inTheLab")
    },
    {
      workTitle: "CUNY Tech Prep",
      image: "https://media.licdn.com/dms/image/C4E0BAQE2heJzO0qrMA/company-logo_100_100/0/1657824337700/cuny_tech_prep_logo?e=1706140800&v=beta&t=P7c01jerQVsWepDY5AC-u6hst1jW1Ko8veXOdAlBgUk",
      position: t("About.WorkCard.apprenticeship"),
      date: t("About.WorkCard.Dates.ctp")
    },
    {
      workTitle: "Hunter College",
      image: "https://media.licdn.com/dms/image/D4D0BAQFogWwnz8wJ7Q/company-logo_100_100/0/1690227914898/hunter_college_logo?e=1706745600&v=beta&t=_Ti9JEuiWehJqCEl9f3ieTiGME12Nh7SoPi6c3JPZ_k",
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
      image: "https://media.licdn.com/dms/image/C560BAQFBJeuU0AdwYg/company-logo_100_100/0/1563393546690/tealsk12_logo?e=1706745600&v=beta&t=OtFhFec-oPDXlLMREAbgQ_v83VZlqoOFXkFJLxJAP6w",
      position: t("About.WorkCard.computerLabAssistant"),
      date:  t("About.WorkCard.Dates.teals")
    },
  ]
}
