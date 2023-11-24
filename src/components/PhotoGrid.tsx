import Grid from "@mui/material/Grid"
import { Fade, ImageList, ImageListItem, useMediaQuery, useTheme } from "@mui/material"

//@ts-ignore
import Container from "./Container"
import { Photo } from "../types/Photo"

type PhotoGridProps = {
  photos: Photo[]
}

export default function PhotoGrid(
  {photos}: PhotoGridProps 
):JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Container>
      <Grid container>
        { photos.length > 0
          ? isMobile
          ? photos.map((photo) => {
            const {src} = photo
            return (
              <Fade in={true} timeout={800} key={photo.src}>
                <Grid item xs={12}>
                  <img
                    src={`${src}?w=161&fit=crop&auto=format`}
                    alt={"missing"}
                    loading="lazy"
                    placeholder="blur"
                    width={"100%"}
                    style={{paddingBottom: 10}}
                  />
                </Grid>
              </Fade>
            )
          })
          : <ImageList variant="masonry" cols={3} gap={8}>
            {photos.map((photo) => {
              const {src} = photo
              return (
                <Fade in={true} timeout={800} key={photo.src}>
                  <ImageListItem key={src}>
                    <img
                      src={`${src}?w=161&fit=crop&auto=format`}
                      alt={"missing"}
                      loading="lazy"
                      placeholder="blur"
                    />
                  </ImageListItem>
                </Fade>
              )
            })}
          </ImageList>
          : <></>
        }


      </Grid>
    </Container>
  )
}
