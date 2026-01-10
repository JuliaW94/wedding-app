import {BannerProps, DefaultSettingsT, Item} from "./carousel.types.tsx";
import { Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import cherryflowerone from "../../../public/Kirschblueten1.png"
import cherryflowertwo from "../../../public/Kirschblueten2.png"
import yellowone from "../../../public/Gelb1.png"
import yellowtwo from "../../../public/Gelb2.png"
import holdinghands from "../../../public/holdinghands.png"
import ghanaSimonFranzi from "../../../public/ghanaSimonFranzi.jpg"


import Carousel from "react-material-ui-carousel";

export const CustomCarousel = () => {
    return (
            <Carousel
                className="Example"
                {...DefaultSettingsT}
                // next={(now: any, previous:any) => console.log(`Next User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // prev={(now, previous) => console.log(`Prev User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}
                // onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child ${now}. Previously displayed child ${previous}`)}

                // navButtonsProps={{style: {backgroundColor: 'cornflowerblue', borderRadius: 0}}}
                // navButtonsWrapperProps={{style: {bottom: '0', top: 'unset', }}}
                // indicatorContainerProps={{style: {margin: "20px"}}}
                // NextIcon='next'
            >
                {
                    items.map((item, index) => {
                        return <Banner item={item} key={index} contentPosition={item.contentPosition} />
                    })
                }
            </Carousel>
    );
}

const Banner = (props: BannerProps) => {

    const contentPosition = props.contentPosition ? props.contentPosition : "left"
    const totalItems: number = props.length ? props.length : 3;
    const mediaLength = totalItems - 1;

    let items = [];
    const content = (
        <Grid item xs={4} key="content">
            <CardContent className="Content">
                <Typography className="Caption" variant={"h3"}>
                    {props.item.Caption}
                </Typography>
            </CardContent>
        </Grid>
    )


    for (let i = 0; i < mediaLength; i++) {
        const item = props.item.Items[i];

        const media = (
            <Grid item xs={4} key={item.Name}>
                <CardMedia
                    className="Media"
                    image={item.Image}
                    title={item.Name}
                    style={{ height: "500px" }}
                    component="img"
                />
            </Grid>
        )

        items.push(media);
    }

    if (contentPosition === "left") {
        items.unshift(content);
    } else if (contentPosition === "right") {
        items.push(content);
    } else if (contentPosition === "middle") {
        items.splice(items.length / 2, 0, content);
    }

    return (
        <Card raised className="Banner">
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        </Card>
    )
}

const items: Item[] = [
    {
        Name: "First",
        Caption: "Save the date: 03.2027",
        contentPosition: "left",
        Items: [
            {
                Name: "ImArm",
                Image: yellowone as string
            },
            {
                Name: "MitBlumen",
                Image: yellowtwo as string
            }
        ]
    },
    {
        Name: "Second",
        Caption: "Hier findet ihr alle Informationen",
        contentPosition: "middle",
        Items: [
            {
                Name: "Kirschblüten 1",
                Image: cherryflowerone as string
            },
            {
                Name: "Kirschblüten 2",
                Image: cherryflowertwo as string
            }
        ]
    },
    {
        Name: "Third",
        Caption: "Wir freuen uns auf euch ♡",
        contentPosition: "right",
        Items: [
            {
                Name: "Hände halten",
                Image: holdinghands as string
            },
            {
                Name: "Ghana",
                Image: ghanaSimonFranzi as string
            }
        ]
    }
]