import {Typography} from "@mui/material";
import {CustomCarousel} from "../components/carousel/CustomCarousel.tsx";
export default function Home() {
    return (
        <div>
            <Typography variant="h1" align="center">
                Franziska <br /> & Simon
            </Typography>
            <br/>
            <CustomCarousel/>
        </div>
    )
}