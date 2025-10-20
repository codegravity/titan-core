export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "Hur många bäddar har ni?",
                answer: "Vi har totalt 70 bäddar."
            },
            {
                question: "Hur långt är det till skidbacken? Olika för Silvavillan och Lake Lodge?",
                answer: "100 meter från Lake Lodge, 800 meter från Silvavillan"
            },
            {
                question: "Finns det Bastu i alla lägenheter?",
                answer: "Ja"
            },
            {
                question: "Finns det Wifi i alla lägenheter?",
                answer: "Ja"
            },
            {
                question: "Finns det bagagerum?",
                answer: "Ja"
            },
            {
                question: "Kan man hyra sänglinne?",
                answer: "Ja"
            },
                        {
                question: "Hur långt är det till närmsta skiduthyrning?",
                answer: "300m"
            }
        ]
    }
};
