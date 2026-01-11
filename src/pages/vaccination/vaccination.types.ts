export type VaccinationInfo = {
    name: string
    doses: string
    type: string
    short: string
    duration: string
    details: string
}

export const vaccinations: VaccinationInfo[] = [
    {
        name: 'Gelbfieber',
        doses: '1 Impfung',
        type: 'Lebendimpfstoff',
        short: 'Pflichtimpfung für die Einreise',
        duration: 'mindestens 10 Tage vor Einreise',
        details:
            'Die Gelbfieberimpfung ist für die Einreise nach Ghana verpflichtend und Voraussetzung für die Visumbeantragung. Die Impfung gilt lebenslang und muss mindestens 10 Tage vor Einreise erfolgt sein.',
    },
    {
        name: 'Hepatitis A',
        doses: '2 Impfungen',
        type: 'Totimpfstoff',
        short: 'Allgemein empfohlen',
        duration: 'ca. 6–12 Monate',
        details:
            'Hepatitis A wird über verunreinigte Lebensmittel oder Wasser übertragen. Bereits eine Impfung bietet einen guten Kurzzeitschutz, die zweite Impfung sorgt für einen Langzeitschutz von mindestens 20 Jahren.',
    },
    {
        name: 'Poliomyelitis',
        doses: '1 Auffrischung',
        type: 'Totimpfstoff',
        short: 'Empfohlen bei fehlender Auffrischung',
        duration: 'einmalig',
        details:
            'Bei vollständig geimpften Erwachsenen ist meist eine einmalige Auffrischung ausreichend.',
    },
    {
        name: 'Denguefieber',
        doses: '2 Impfungen',
        type: 'Lebendimpfstoff',
        short: 'Nach individueller Indikation',
        duration: 'ca. 3 Monate',
        details:
            'Die Impfung wird nur für bestimmte Personengruppen empfohlen, insbesondere bei vorheriger Dengue-Infektion oder längerem Aufenthalt.',
    },
    {
        name: 'Hepatitis B',
        doses: '3 Impfungen',
        type: 'Totimpfstoff',
        short: 'Bei längerem Aufenthalt',
        duration: 'ca. 6 Monate',
        details:
            'Empfohlen bei längerem Aufenthalt oder engem Kontakt zur lokalen Bevölkerung. Kombination mit Hepatitis A möglich.',
    },
    {
        name: 'Meningokokken ACWY',
        doses: '1 Impfung',
        type: 'Totimpfstoff',
        short: 'Nach individueller Indikation',
        duration: 'einmalig',
        details:
            'Schützt vor schweren Hirnhautentzündungen. Besonders empfohlen bei engem Kontakt mit vielen Menschen.',
    },
    {
        name: 'Tollwut',
        doses: '2–3 Impfungen',
        type: 'Totimpfstoff',
        short: 'Bei Tierkontakt oder abgelegenen Reisen',
        duration: '3–4 Wochen',
        details:
            'Empfohlen bei Reisen außerhalb von Städten oder bei möglichem Tierkontakt. Auch nach Impfung ist ärztliche Behandlung nötig.',
    },
    {
        name: 'Typhus',
        doses: '1 Impfung',
        type: 'Totimpfstoff',
        short: 'Nach individueller Indikation',
        duration: 'einmalig',
        details:
            'Schützt vor bakteriellen Darminfektionen. Schutzdauer ca. 3 Jahre.',
    },
]
