import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';


import type { ImageMetadata } from 'astro';

// Import your logo images
// Replace these imports with your actual logo files
import imgLakeLodge from '../assets/images/home/ll-summer2.jpg';
import imgSlalom from '../assets/images/home/slalom2b-2.jpg';
import imgSilva from '../assets/images/home/silvavillan_big.jpg';
// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    src: ImageMetadata;
    alt: string;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                src: imgLakeLodge,
                alt: 'Lake Lodge Åre',
                title: 'Lake Lodge',
                description: 'Lägenhetshotell vid VM8 liften'
            },
            {
                icon: Shield,
                src: imgSlalom,
                alt: 'Slalomsvängen, Åre',
                title: 'Slalomsvängen',
                description: '9+2 bädds lägenhet i 2 plan med Ski in Ski out läge'
            },
            {
                icon: TabletSmartphone,
                src: imgSilva,
                alt: 'Silvavillan, Åre',
                title: 'Silvavillan',
                description: '10 bädds stuga centralt i Åre'
            }
 /*            {
                icon: Smile,
                title: 'Easy Customization',
                description: 'Customize the theme to your liking'
            },
            {
                icon: Type,
                title: 'TypeScript Support',
                description: 'Built with TypeScript in mind'
            },
            {
                icon: CodeXml,
                title: 'Minimal Dependencies',
                description: 'Keep your project lightweight'
            } */
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                                scr: imgLakeLodge,
                alt: 'Lake Lodge Åre',
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                                scr: imgLakeLodge,
                alt: 'Lake Lodge Åre',
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                scr: imgLakeLodge,
                alt: 'Lake Lodge Åre',
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
