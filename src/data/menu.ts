// src/data/menu.ts

export const headerMenu = [
    { name: 'HEM', link: '/' },
    { name: 'Test', link: '/team' },
    { name: 'AKTIVITETER', link: '/style-guide', showArrow: true,
        children: [
            { name: 'BOKA', link: '/aktiviteter/boka' },
            { name: 'SNÖSKOR', link: '/aktiviteter/snoskor', showArrow: true,
                children: [
                    { name: 'KVÄLLSTUR', link: '/aktiviteter/snoskor#night' },
                    { name: 'DAGTUR', link: '/aktiviteter/snoskor#day' },
                ],
             },
            { name: 'TOPPTUR', link: '/aktiviteter/topptur', showArrow: true,
                children: [
                    { name: 'HALVDAG', link: '/aktiviteter/tannforsen' },
                    { name: 'HELDAG SNASAHÖGARNA', link: '/aktiviteter/tannforsen' },
                    { name: 'HELDAG RENFJÄLLET', link: '/aktiviteter/tannforsen' },
                ],
             },
            { name: 'SKÄRMFLYG - TANDEM', link: '/aktiviteter/tandem' },
            { name: 'SNÖKITE', link: '/aktiviteter/snokite', showArrow: true,
                children: [
                    { name: 'HALVDAGS KURS', link: '/aktiviteter/tannforsen' },
                    { name: 'HELDAGS KURS', link: '/aktiviteter/tannforsen' },
                ],
             },
            { name: 'ISKLÄTTRING', link: '/aktiviteter/iceclimbing' },
            { name: 'TÄNNFORSEN', link: '/aktiviteter/tannforsen' },
        ]
    },
    { name: 'BOENDE I ÅRE', link: '/boende', showArrow: true, 
        children: [
            { name: 'BOKA', link: '/boende/boka' },
            { name: 'LAKE LODGE ÅRE', link: '/boende/lakelodge' },
            { name: 'SLALOMSVÄNGEN', link: '/boende/slalom' },
            { name: 'SILVAVILLAN', link: '/boende/silvavillan' },
            { name: 'PRISER 2026', link: '/boende/priser' },
        ]

    },
];

export const footerMenu = [
    { name: 'Style Guide', link: '/style-guide' },
];

export const legalMenu = [
    { name: 'Privacy Policy', link: '/legal/privacy-policy' },
    { name: 'Terms of Service', link: '/legal/terms-of-service' }
];

