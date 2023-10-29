import Grid from "@mui/material/Grid"

//@ts-ignore
import Container from "./Container"
import { Photo } from "../types/Photo"
import { Fade, ImageList, ImageListItem } from "@mui/material"


type PhotoGridProps = {
  photos: Photo[]
}

export default function PhotoGrid(
  {photos}: PhotoGridProps 
):JSX.Element {

  return (
    <Container>
      <Grid container>
        { photos.length > 0
          ? <ImageList variant="masonry" cols={3} gap={8}>
            {photos.map((photo) => {
              const {src} = photo
              return (
                <Fade in={true} timeout={800}>
                  <ImageListItem key={src}>
                    <img
                      src={`${src}?w=161&fit=crop&auto=format`}
                      alt={"missing"}
                      loading="lazy"
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
