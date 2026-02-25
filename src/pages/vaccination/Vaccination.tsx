import {
    Container,
    Typography,
    Link,
    List,
    ListItem,
    Card,
    CardContent,
    CardActionArea,
    Modal,
    Box,
    Grid,
} from '@mui/material'
import { useState } from 'react'
import {VaccinationInfo, vaccinations} from "./vaccination.types.ts";

export default function Vaccination() {
    const [selected, setSelected] =
        useState<VaccinationInfo | null>(null)

    return (
        <>
        <Container maxWidth="md" sx={{ pb: 10 }}>
            <Typography variant="h2" gutterBottom>
                Impfungen für Ghana
            </Typography>

            <Typography variant="body1">
                Wenn man nach Ghana reist können unterschiedliche Impfungen hilfreich sein.
                Es ist jedoch nur die Gelbfieberimpfung verpflichtend. Bitte organisiert diese rechtzeitig (mindestens 6 Monate vor Reise)
                um Komplikationen beim Visum zu vermeiden.
                <br />
                <br />
                Hier sind noch ein paar weitere Imfungen aufgelistet, die das auswärtige Amt empfielt.
                Wenn ihr alle
                empfohlenen Impfungen durchführen möchtet,
                solltet ihr insgesamt etwa sechs Monate
                einplanen.
                <br />
                <br />
                Die Kosten für Reiseimpfungen werden in der Regel
                von den gesetzlichen Krankenkassen übernommen, dass kann sich je nach Krankenkasse unterscheiden.
            </Typography>

            <Typography sx={{ mt: 2 }}>
                <Link
                    href="https://www.auswaertiges-amt.de/de/reiseundsicherheit/ghanasicherheit-203372#content_5"
                    target="_blank"
                >
                    Hier gehts zum Auswärtiges Amt – Reise- und Sicherheitshinweise für Ghana
                </Link>
            </Typography>

            <Typography variant="h3" sx={{ mt: 6 }}>
                Impfstellen
            </Typography>

            <List sx={{ listStyleType: 'disc', pl: 4, mb: 6 }}>
                <ListItem sx={{ display: 'list-item' }}>
                    <Link
                        href="https://www.impfcentrum.de/impfcentrum-st-pauli/"
                        target="_blank"
                    >
                        Impfzentrum St. Pauli (Hamburg)
                    </Link>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <Link
                        href="https://www.tropeninstitut-hamburg.de/"
                        target="_blank"
                    >
                        Bernhard-Nocht-Institut (Hamburg)
                    </Link>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <Link
                        href="https://praxis-sternfeldt.de/vorsorge/"
                        target="_blank"
                    >
                        Praxis Dr. med. Regina Sternfeld (Ahrensburg)
                    </Link>
                </ListItem>
                <ListItem sx={{ display: 'list-item' }}>
                    <Link
                        href="https://www.uksh.de/blutspende/Impfungen+am+UKSH/Reisemedizinische+Impfberatung/Reisemedizin+L%C3%BCbeck.html"
                        target="_blank"
                    >
                        Reisemedizinische Beratung am UKSH (Lübeck / Kiel)
                    </Link>
                </ListItem>
            </List>

            <Typography variant="h3">
                Empfohlene Impfungen
            </Typography>
        </Container>
        <Container maxWidth={"xl"}>
            <Grid container spacing={3} sx={{ mt: 4 }}>
                {vaccinations.map((v) => (
                    <Grid item xs={12} sm={6} md={4} key={v.name}>
                        <Card
                            sx={{
                                backgroundColor: '#FFFAF0',
                                border: '1px solid #FF5659',
                                height: '100%',
                            }}
                        >
                            <CardActionArea
                                sx={{ height: '100%' }}
                                onClick={() => setSelected(v)}
                            >
                                <CardContent>
                                    {/* NAME – GRÖSSTES ELEMENT */}
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            fontSize: '1.9rem',
                                            mb: 1,
                                        }}
                                    >
                                        {v.name}
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: 500 }}
                                    >
                                        {v.doses} · {v.type}
                                    </Typography>

                                    <Typography variant="body1" sx={{ mt: 1 }}>
                                        {v.short}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <br/>

            {/* MODAL */}
            <Modal open={!!selected} onClose={() => setSelected(null)} className={"modalStyle1"}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backgroundColor: '#FFFFFF',
                        padding: 4,
                        maxWidth: 540,
                        border: '1px solid #FF5659',
                        outline: 'none',
                    }}
                >
                    <Typography variant="h3" gutterBottom>
                        {selected?.name}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        {selected?.doses} · {selected?.type}
                    </Typography>

                    <Typography variant="body1" gutterBottom>
                        Dauer des Impfzyklus: {selected?.duration}
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 2 }}>
                        {selected?.details}
                    </Typography>
                </Box>
            </Modal>
        </Container>
            </>
    )
}
