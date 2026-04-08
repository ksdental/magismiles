export const siteInfo = {
    phone: {
        text: '(908) 743-8041',
        link: 'tel:+19087438041',
    },
    currentPatientsPhone: {
        text: '(908) 486-5000',
        link: 'tel:+19084865000',
    },
    email: {
        link: '',
        text: '',
    },
    address: {
        text: '515 North Wood Ave, Suite 102 Linden, NJ 07036',
        link: 'https://maps.app.goo.gl/k1vHiQzefDGzn6ju5',
    },
    social: {
        facebook: 'https://www.facebook.com/magicsmiledentalLinden/',
        instagram: 'https://www.instagram.com/magicsmilelindennj',
        google: 'https://maps.app.goo.gl/k1vHiQzefDGzn6ju5',
        tiktok: 'https://www.tiktok.com/@magicsmilelindennj',
    },
    appointmentLink: 'https://app.nexhealth.com/appt/magic-smile-dental?lid=324621',
};

export type NavLinksTypes = { text: string; link: string; links?: NavLinksTypes }[];

export const navLinks: NavLinksTypes = [
    {
        text: 'Implant Dentistry',
        link: '',
        links: [
            {
                text: 'Dental Implants',
                link: '/dental-implants/',
            },

            {
                text: 'All-On-X Full Mouth Implants',
                link: '/dental-implants/all-on-x/',
            },
            {
                text: 'Failing Dental Implants',
                link: '/dental-implants/dental-implant-failure/',
            },
            {
                text: 'Cost & Affordability',
                link: '/dental-implants/affordable-dental-implants/',
            },
        ],
    },
    {
        text: 'LANAP Laser Periodontics',
        link: '/periodontics/lanap-laser-periodontics/',
    },
    {
        text: 'Your Smile Makeover',
        link: '',
        links: [
            {
                text: 'Cosmetic Dentistry',
                link: '/cosmetic-dentistry/',
            },
            {
                text: 'Porcelain Veneers',
                link: '/cosmetic-dentistry/porcelain-veneers/',
            },
            {
                text: 'Dental Crowns & Bridges',
                link: '/cosmetic-dentistry/dental-crowns-bridges/',
            },
            {
                text: 'Invisalign® Clear Aligners',
                link: '/cosmetic-dentistry/invisalign/',
            },
            {
                text: 'Teeth Whitening',
                link: '/cosmetic-dentistry/professional-teeth-whitening/',
            },
            {
                text: 'Before & After Photos',
                link: '/cosmetic-dentistry/before-and-after-photos/',
            },
        ],
    },
    {
        text: 'Additional Services',
        link: '',
        links: [
            {
                text: 'General Dentistry',
                link: '/general-dentistry/',
            },
            {
                text: 'Oral Surgery',
                link: '/oral-dentistry/',
            },
            {
                text: 'Full Mouth Reconstruction',
                link: '/full-mouth-reconstruction/',
            },
            {
                text: 'Endodontics',
                link: '/general-dentistry/endodontics/',
            },
            {
                text: 'Emergency Dentistry',
                link: '/emergency-dentistry/',
            },
            {
                text: 'Botulinum Toxin',
                link: '/cosmetic-dentistry/botulinum-toxin/',
            },
        ],
    },
    {
        text: 'Patient Center',
        link: '/patient-center/',
        links: [
            {
                text: 'Patient Center',
                link: '/patient-center/',
            },
            {
                text: 'Insurance & Financing',
                link: '/insurance-and-financing/',
            },
            {
                text: 'Conditions We Treat',
                link: '/dental-conditions/',
            },
            {
                text: 'Patient Stories',
                link: '/patient-stories/',
            },
            {
                text: 'Sedation Dentistry',
                link: '/sedation-dentistry/',
            },
            {
                text: 'Special Offers',
                link: '/special-offers/',
            },
        ],
    },
    {
        text: 'About Us',
        link: '/about-us/',
        links: [
            {
                text: 'About Us',
                link: '/about-us/',
            },
            {
                text: 'Meet Our Doctors',
                link: '/about-us/meet-the-doctors/',
            },
            {
                text: 'Meet The Team',
                link: '/about-us/meet-the-team/',
            },
            {
                text: 'Video Library',
                link: '/dental-video-library/',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
        ],
    },
    {
        text: 'Contact Us',
        link: '/contact-us/',
    },
];

export const footerNavLinks: NavLinksTypes = [
    {
        text: '',
        link: '',
    },
];

export function getNavLink(text: string) {
    const linkObj = flatLinks.find(data => data.text.toLowerCase() === text.toLowerCase());

    if (linkObj) return linkObj.link;
    else return '';
}

const flatLinks = (() => {
    const flat: NavLinksTypes = [];

    const pushFlat = (arr: NavLinksTypes) =>
        arr.forEach(data => {
            if (!data.links) flat.push(data);
            else {
                if (data.link) {
                    flat.push({
                        text: data.text,
                        link: data.link,
                    });
                }
                pushFlat(data.links);
            }
        });

    pushFlat(navLinks);
    return flat;
})();
