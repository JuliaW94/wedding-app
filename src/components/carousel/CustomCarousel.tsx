import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useTheme,
    useMediaQuery,
} from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import { useEffect } from 'react'

import cherryflowerone from '../../../public/Kirschblueten1.png'
import cherryflowertwo from '../../../public/Kirschblueten2.png'
import yellowone from '../../../public/Gelb1.png'
import yellowtwo from '../../../public/Gelb2.png'
import holdinghands from '../../../public/holdinghands.png'
import ghanaSimonFranzi from '../../../public/ghanaSimonFranzi.jpg'

/* ---------------- TYPES ---------------- */

export type Item = {
    Name: string
    Caption: string
    contentPosition: 'left' | 'right' | 'middle'
    Items: { Name: string; Image?: string }[]
}

/* ---------------- DATA ---------------- */

const items: Item[] = [
    {
        Name: 'First',
        Caption: 'Save the date: 03.2027',
        contentPosition: 'left',
        Items: [
            { Name: 'ImArm', Image: yellowone },
            { Name: 'MitBlumen', Image: yellowtwo },
        ],
    },
    {
        Name: 'Second',
        Caption: 'Hier findet ihr alle Infos',
        contentPosition: 'middle',
        Items: [
            { Name: 'Kirschblüten 1', Image: cherryflowerone },
            { Name: 'Kirschblüten 2', Image: cherryflowertwo },
        ],
    },
    {
        Name: 'Third',
        Caption: 'Wir freuen uns auf euch ♡',
        contentPosition: 'right',
        Items: [
            { Name: 'Hände halten', Image: holdinghands },
            { Name: 'Ghana', Image: ghanaSimonFranzi },
        ],
    },
]

/* ---------------- PRELOAD ---------------- */

const preloadImages = (items: Item[]) => {
    items.forEach((item) =>
        item.Items.forEach((media) => {
            if (media.Image) {
                const img = new Image()
                img.src = media.Image
            }
        })
    )
}

/* ---------------- CAROUSEL ---------------- */

export const CustomCarousel = () => {
    useEffect(() => {
        preloadImages(items)
    }, [])

    return (
        <Carousel
            autoPlay
            animation="fade"
            indicators
            interval={6000}
            duration={3000}
            stopAutoPlayOnHover={false}
            navButtonsAlwaysInvisible
            swipe
        >
            {items.map((item, index) => (
                <Banner item={item} key={index} />
            ))}
        </Carousel>
    )
}

/* ---------------- BANNER ---------------- */

const Banner = ({ item }: { item: Item }) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

    const content = (
        <Grid item xs={12} md={4}>
            <CardContent
                sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h2">
                    {item.Caption}
                </Typography>
            </CardContent>
        </Grid>
    )

    const mediaItems = item.Items.map((media) => (
        <Grid item xs={12} md={4} key={media.Name}>
            <CardMedia
                component="img"
                image={media.Image}
                alt={media.Name}
                sx={{
                    height: { xs: 260, md: 500 },
                    objectFit: 'cover',
                }}
            />
        </Grid>
    ))

    let layout: JSX.Element[] = []

    if (item.contentPosition === 'left') {
        layout = [content, ...mediaItems]
    } else if (item.contentPosition === 'right') {
        layout = [...mediaItems, content]
    } else {
        layout = [
            mediaItems[0],
            content,
            mediaItems[1],
        ]
    }

    return (
        <Card
            raised
            sx={{
                minHeight: { xs: 780, md: 500 },
            }}
        >
            <Grid
                container
                direction={isMobile ? 'column' : 'row'}
                spacing={0}
            >
                {layout}
            </Grid>
        </Card>
    )
}
