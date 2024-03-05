import { Grid, Stack } from "@mui/material";
import { LogoJavascript } from "./LogoJavascript";
import { Start } from "./Start";





export function HomeScreen() {


    return(
        <Grid container spacing={2} justifyContent="center" alignItems="center" padding={1}>
        <Grid item xs={12} md={6}>
          <Stack direction='column' gap={2} alignItems='center' justifyContent='center'>
            <Stack direction='row' gap={2} alignItems='center' justifyContent='center'>
              <LogoJavascript></LogoJavascript>
              <h1>Football Quizz</h1>
            </Stack>

            <Start></Start>      
          </Stack>    
        </Grid>
      </Grid>
    )
}