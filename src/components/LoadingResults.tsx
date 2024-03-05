import { CircularProgress, Stack } from "@mui/material";


export function LoadingResults(){

    return(
        <>
        <Stack direction='column' justifyContent='center' alignItems='center'>
            <h1>Loading Results...</h1>
            <CircularProgress></CircularProgress>
        </Stack>
        </>
    )
}

