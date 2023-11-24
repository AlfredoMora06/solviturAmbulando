import React from "react"

//@ts-ignore
import Container from "../Container"
import { lightGray } from "../../theme"
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import PhotoGrid from "../PhotoGrid"
import { photoArray } from "../../utils/PhotoArray"
import { Photo, PhotoType } from "../../types/Photo"


interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

type PhotoTabsProps = {
  t: (s: string) => string
}

export default function PhotoTabs({t}: PhotoTabsProps): JSX.Element {
  const [value, setValue] = React.useState(0)

  const handleChange = (_: any, newValue: number) => {
    setValue(newValue)
  }

  const filteredPhotoArray = (type: PhotoType):Photo[]  => {
    return photoArray().filter((photo) => photo.type === type)
  }


  return (
    <Container>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          aria-label="basic tabs example"
          indicatorColor="secondary"
        >
          <Tab label={t("Photography.PhotoTabs.all")} {...a11yProps(0)} style={{color: lightGray}}/>
          <Tab label={t("Photography.PhotoTabs.film")} {...a11yProps(1)} style={{color: lightGray}}/>
          <Tab label={t("Photography.PhotoTabs.portraits")} {...a11yProps(2)} style={{color: lightGray}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PhotoGrid photos={photoArray()} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PhotoGrid photos={filteredPhotoArray("film")}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <PhotoGrid photos={filteredPhotoArray("portrait")}/>
      </CustomTabPanel>
    </Container>
  )
}
