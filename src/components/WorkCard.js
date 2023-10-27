import { CardContent, Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import WorkIcon from "@mui/icons-material/Work";

import { lightBlack, lightGray } from "../theme.ts";

export default function WorkCard() {
  return (
    <Card variant="outlined" sx={{ backgroundColor: lightBlack }}>
      <CardContent>
        <Grid container>
          <Grid item container xs={12}>
            <WorkIcon sx={{ color: lightGray }} />
            <Typography color={lightGray}>Work</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
