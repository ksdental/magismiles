import { Fragment } from 'react';
import { HeadProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Seo } from '@/Seo';
import { BasicHero } from '@/BasicHero';
import { SingleArticle } from '@/SingleArticle';
import { CLink } from '@/CLink';
import { titleFontStyles, titleLine } from '@/layout/styles/classes';
import { siteInfo } from '@/layout/NavLinks';
import { theme } from '@/layout/styles/GlobalStyles';

const CardsSection = styled.section`
    padding: 48px 16px 64px;
    max-width: 1400px;
    margin: 0 auto;

    @media (min-width: 768px) {
        padding: 64px 32px 80px;
    }

    @media (min-width: 1024px) {
        padding: 80px 48px 100px;
    }

    @media (min-width: 1440px) {
        padding: 80px 80px 100px;
    }
`;

const SectionTitle = styled.h2`
    ${titleFontStyles};
    ${titleLine};
    text-align: center;
    font-size: 1.875rem;
    margin: 0 0 16px;

    @media (min-width: 768px) {
        font-size: 2.25rem;
    }
`;

const SectionSubtitle = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
    max-width: 700px;
    margin: 24px auto 48px;
    font-size: 0.95rem;
    line-height: 1.8;

    @media (min-width: 768px) {
        margin-bottom: 56px;
        font-size: 1rem;
    }
`;

const CardsGrid = styled.div`
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 28px;
    }
`;

const Card = styled.div`
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    border-radius: 12px;
    padding: 36px 28px 32px;
    display: flex;
    flex-direction: column;
    transition: transform 0.25s ease, box-shadow 0.25s ease;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 32px rgba(0, 28, 54, 0.1);
    }
`;

const CardIcon = styled.div`
    width: 52px;
    height: 52px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.lighterBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
`;

const CardTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1.15rem;
    line-height: 1.35;
    color: ${({ theme }) => theme.colors.darkerBlue};
    margin: 0 0 12px;
`;

const CardPrice = styled.div`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 2.25rem;
    color: ${({ theme }) => theme.colors.blue};
    margin: 0 0 4px;
    line-height: 1.1;

    > span {
        font-size: 0.85rem;
        font-weight: 400;
        color: ${({ theme }) => theme.colors.gray};
        margin-left: 4px;
    }
`;

const CardDescription = styled.p`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.7;
    margin: 0 0 20px;
    flex: 1;
`;

const CardIncludes = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 24px;

    > li {
        position: relative;
        padding-left: 24px;
        font-size: 0.875rem;
        color: ${({ theme }) => theme.colors.gray};
        line-height: 1.6;
        margin-bottom: 6px;

        &::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: ${({ theme }) => theme.colors.green};
            font-weight: 700;
            font-size: 0.95rem;
        }
    }
`;

const cardBtnBase = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    border-radius: 6px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 0.85rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.15s ease;
    margin-top: auto;
    text-align: center;

    &:hover {
        transform: translateY(-1px);
    }
`;

const CardBtn = styled(CLink)`
    ${cardBtnBase};
    background: ${({ theme }) => theme.colors.darkerBlue};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background: ${({ theme }) => theme.colors.darkBlue};
    }
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${({ theme }) => theme.colors.lighterBlue};
    margin: 16px 0 20px;
`;

const WhySection = styled.section`
    padding: 0 16px 80px;
    max-width: 1400px;
    margin: 0 auto;

    @media (min-width: 768px) {
        padding: 0 32px 100px;
    }

    @media (min-width: 1024px) {
        padding: 0 48px 120px;
    }

    @media (min-width: 1440px) {
        padding: 0 80px 120px;
    }
`;

const WhyGrid = styled.div`
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const WhyItem = styled.div`
    text-align: center;

    @media (min-width: 1024px) {
        text-align: left;
    }
`;

const WhyIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.lighterBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 12px;
    font-size: 1.25rem;

    @media (min-width: 1024px) {
        margin: 0 0 12px;
    }
`;

const WhyTitle = styled.h4`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.darkerBlue};
    margin: 0 0 8px;
`;

const WhyText = styled.p`
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.7;
    margin: 0;
`;

const Disclaimer = styled.p`
    text-align: center;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray};
    max-width: 700px;
    margin: 48px auto 0;
    line-height: 1.6;
    font-style: italic;
`;

const ImplantIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M8 6h8M9 10h6M10 14h4M11 18h2M12 18v4"/>
    </svg>
);

const InvisalignIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>
    </svg>
);

const LaserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
);

const NewPatientIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>
    </svg>
);

const EmergencyIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
);

const ConsultIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
    </svg>
);

const offers = [
    {
        title: 'New Patient Special',
        price: '$159',
        priceLabel: '',
        description: 'A perfect option for anyone searching for a new dentist. Get started with a comprehensive preventive care package.',
        includes: ['Comprehensive dental exam', 'Digital X-rays', 'Professional dental cleaning'],
        icon: NewPatientIcon,
    },
    {
        title: 'Emergency Dental Exam',
        price: '$85',
        priceLabel: '',
        description:
            'Experiencing tooth pain or a dental emergency? Receive prompt evaluation and relief without delay.',
        includes: null,
        icon: EmergencyIcon,
    },
    {
        title: 'Comprehensive Exam or Consultation',
        price: '$99',
        priceLabel: '',
        description:
            'Full mouth evaluation and personalized treatment discussion. Ideal for patients considering cosmetic, restorative, or periodontal treatment, or seeking a second opinion.',
        includes: null,
        icon: ConsultIcon,
    },
    {
        title: '$100 Off Per Dental Implant',
        price: '$100',
        priceLabel: 'off per implant',
        description:
            'Replace missing teeth with long-lasting dental implants. Receive $100 off per implant, making restorative treatment more affordable while maintaining strength, function, and a natural appearance.',
        includes: null,
        icon: ImplantIcon,
    },
    {
        title: '$500 Off Invisalign Treatment',
        price: '$500',
        priceLabel: 'off Invisalign',
        description:
            'Straighten your smile discreetly with Invisalign clear aligners. A comfortable and nearly invisible alternative to traditional braces.',
        includes: null,
        icon: InvisalignIcon,
    },
    {
        title: 'LANAP\u00AE Laser Gum Therapy Package',
        price: 'Package',
        priceLabel: 'deal',
        description:
            'Our LANAP periodontal treatment package helps address gum disease using advanced laser technology. Ideal for patients seeking minimally invasive gum disease treatment.',
        includes: ['Initial professional cleaning', 'Custom night guard included'],
        icon: LaserIcon,
    },
];

export default function SpecialOffersPage() {
    return (
        <Fragment>
            <BasicHero
                text="Special Dental Offers"
                title={
                    <h2>
                        Affordable <strong>Dental Specials</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/cosmetic-dentistry/veneers/hero-veneers.jpg"
                        alt="special dental offers at magic smile dental"
                        layout="fullWidth"
                        quality={90}
                        loading="eager"
                    />
                }
            />

            <SingleArticle noBg>
                <h2>
                    Special Dental Offers in <strong>Linden, NJ</strong>
                </h2>
                <p>
                    At Magic Smile Dental in Linden, NJ, we believe high-quality dental care should be
                    accessible and affordable. That&rsquo;s why we offer exclusive dental specials designed to
                    help patients receive essential, cosmetic, and advanced treatments at a reduced cost.
                    Whether you&rsquo;re a new patient or returning for continued care, our 2026 dental offers
                    make it easier to invest in a healthier, more confident smile.
                </p>
            </SingleArticle>

            <CardsSection data-testid="section-offers">
                <SectionTitle>
                    2026 Dental <strong>Specials</strong>
                </SectionTitle>
                <SectionSubtitle>
                    Explore our current specials below and take advantage of professional dental care at
                    exceptional value.
                </SectionSubtitle>
                <CardsGrid>
                    {offers.map((offer, i) => (
                        <Card key={i} data-testid={`card-offer-${i}`}>
                            <CardIcon><offer.icon /></CardIcon>
                            <CardTitle>{offer.title}</CardTitle>
                            <CardPrice>
                                {offer.price}
                                {offer.priceLabel && <span>{offer.priceLabel}</span>}
                            </CardPrice>
                            <Divider />
                            <CardDescription>{offer.description}</CardDescription>
                            {offer.includes && (
                                <CardIncludes>
                                    {offer.includes.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </CardIncludes>
                            )}
                            <CardBtn
                                to={siteInfo.appointmentLink}
                                data-testid={`button-book-offer-${i}`}
                            >
                                Book Now
                            </CardBtn>
                        </Card>
                    ))}
                </CardsGrid>
                <Disclaimer>
                    Special offers are subject to change and may not be combined with insurance or other
                    promotions.
                </Disclaimer>
            </CardsSection>

            <WhySection data-testid="section-why-choose">
                <SectionTitle>
                    Why Choose <strong>Magic Smile Dental</strong>
                </SectionTitle>
                <SectionSubtitle>
                    Our experienced dental team provides patient-focused care using modern technology and
                    proven techniques.
                </SectionSubtitle>
                <WhyGrid>
                    <WhyItem>
                        <WhyIcon>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                        </WhyIcon>
                        <WhyTitle>Modern Technology</WhyTitle>
                        <WhyText>
                            Advanced equipment and techniques for precise, comfortable treatments.
                        </WhyText>
                    </WhyItem>
                    <WhyItem>
                        <WhyIcon>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </WhyIcon>
                        <WhyTitle>Experienced Team</WhyTitle>
                        <WhyText>
                            Skilled professionals dedicated to delivering high-quality, reliable dentistry.
                        </WhyText>
                    </WhyItem>
                    <WhyItem>
                        <WhyIcon>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </WhyIcon>
                        <WhyTitle>Multilingual Support</WhyTitle>
                        <WhyText>
                            We speak your language for a more comfortable, personalized experience.
                        </WhyText>
                    </WhyItem>
                    <WhyItem>
                        <WhyIcon>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={theme.colors.darkerBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                        </WhyIcon>
                        <WhyTitle>Flexible Financing</WhyTitle>
                        <WhyText>
                            Affordable options so you can get the care you need without delay.
                        </WhyText>
                    </WhyItem>
                </WhyGrid>
            </WhySection>
        </Fragment>
    );
}

export const Head = ({ location }: HeadProps) => {
    return (
        <Seo
            pathname={location.pathname.split('/').slice(-2)[0]}
            title="Special Dental Offers | Magic Smile Dental - Linden, NJ"
            description="Explore exclusive dental specials at Magic Smile Dental in Linden, NJ. Save on dental implants, Invisalign, LANAP laser therapy, new patient exams, and more."
        />
    );
};
