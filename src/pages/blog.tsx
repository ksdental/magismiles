import { graphql, HeadProps, PageProps, Link } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Seo } from '@/Seo';
import { BasicHero } from '@/BasicHero';
import { StaticImage } from 'gatsby-plugin-image';
import { Fragment } from 'react';
import { theme } from '@/layout/styles/GlobalStyles';

const Section = styled.section`
    padding: 48px 16px 64px;
    max-width: 1400px;
    margin: 0 auto;

    @media (min-width: 768px) {
        padding: 64px 32px 80px;
    }

    @media (min-width: 1024px) {
        padding: 80px 48px 120px;
    }

    @media (min-width: 1440px) {
        padding: 80px 80px 120px;
    }
`;

const SectionTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    text-align: center;
    font-size: 1.875rem;
    margin: 0 0 16px;
    line-height: 1.1;

    > strong {
        font-weight: 700;
    }

    &::after {
        content: '';
        display: block;
        margin: 24px auto 0;
        width: 70px;
        height: 4px;
        background-color: ${theme.colors.darkerBlue};
    }

    @media (min-width: 1280px) {
        font-size: 2.75rem;
    }
`;

const Subtitle = styled.p`
    text-align: center;
    max-width: 700px;
    margin: 24px auto 48px;
    color: ${theme.colors.gray};
    font-size: 1rem;
    line-height: 180%;

    @media (min-width: 1280px) {
        font-size: 1.125rem;
    }
`;

const Grid = styled.div`
    display: grid;
    gap: 24px;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 40px;
    }
`;

const Card = styled(Link)`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    text-decoration: none;
    color: inherit;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.blue};
        outline-offset: 2px;
    }

    @media (max-width: 767px) {
        &:active {
            transform: scale(0.98);
        }
    }
`;

const CardImageWrapper = styled.div`
    position: relative;
    aspect-ratio: 16 / 10;
    overflow: hidden;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;
        pointer-events: none;
    }
`;

const CardBadge = styled.span`
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 2;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 5px 10px;
    border-radius: 2px;

    @media (min-width: 768px) {
        top: 16px;
        left: 16px;
        font-size: 0.6875rem;
        padding: 5px 12px;
    }
`;

const CardBody = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;

    @media (min-width: 768px) {
        padding: 24px;
    }

    @media (min-width: 1024px) {
        padding: 28px;
    }
`;

const CardTitle = styled.h3`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    font-size: 1rem;
    line-height: 1.3;
    margin: 0 0 12px;
    color: ${theme.colors.darkerBlue};

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }

    @media (min-width: 1280px) {
        font-size: 1.25rem;
    }
`;

const CardExcerpt = styled.p`
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.7;
    color: ${theme.colors.gray};
    flex: 1;

    @media (min-width: 768px) {
        font-size: 0.875rem;
    }

    @media (min-width: 1280px) {
        font-size: 0.9375rem;
    }
`;

const ReadMore = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 16px;
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${theme.colors.blue};

    @media (min-width: 768px) {
        margin-top: 20px;
        font-size: 0.875rem;
    }

    &::after {
        content: '→';
        transition: transform 0.3s ease-in-out;
    }

    ${Card}:hover & {
        &::after {
            transform: translateX(4px);
        }
    }
`;

type BlogPost = {
    frontmatter: {
        title: string;
        slug: string;
        category: string;
        excerpt: string;
        featuredImage: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData;
            };
        };
    };
};

type DataProps = {
    allMarkdownRemark: {
        nodes: BlogPost[];
    };
};

export default function BlogPage({ data }: PageProps<DataProps>) {
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Fragment>
            <BasicHero
                text="Dental Education & Insights"
                title={
                    <h2>
                        Our <strong>Blog</strong>
                    </h2>
                }
                image={
                    <StaticImage
                        src="../../assets/images/cosmetic-dentistry/hero.jpg"
                        alt="magic smile dental blog"
                        layout="fullWidth"
                        quality={90}
                        loading="eager"
                    />
                }
            />
            <Section>
                <SectionTitle>
                    Latest <strong>Articles</strong>
                </SectionTitle>
                <Subtitle>
                    Stay informed with the latest dental tips, treatment insights, and practice news
                    from Magic Smile Dental in Linden, NJ.
                </Subtitle>
                <Grid>
                    {posts.map(post => {
                        const image = getImage(
                            post.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData
                        );
                        return (
                            <Card
                                key={post.frontmatter.slug}
                                to={`/blog/${post.frontmatter.slug}/`}
                                data-testid={`card-blog-${post.frontmatter.slug}`}
                            >
                                <CardImageWrapper>
                                    <CardBadge>{post.frontmatter.category}</CardBadge>
                                    {image && (
                                        <GatsbyImage
                                            image={image}
                                            alt={post.frontmatter.title}
                                        />
                                    )}
                                </CardImageWrapper>
                                <CardBody>
                                    <CardTitle>{post.frontmatter.title}</CardTitle>
                                    <CardExcerpt>{post.frontmatter.excerpt}</CardExcerpt>
                                    <ReadMore>Read More</ReadMore>
                                </CardBody>
                            </Card>
                        );
                    })}
                </Grid>
            </Section>
        </Fragment>
    );
}

export const Head = ({ location }: HeadProps) => {
    return (
        <Seo
            pathname={location.pathname.split('/').slice(-2)[0]}
            title="Blog | Magic Smile Dental - Linden, NJ"
            description="Read the latest dental education articles, treatment insights, and practice news from Magic Smile Dental in Linden, NJ."
        />
    );
};

export const query = graphql`
    query BlogFeedPage {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/blog/" } }
            sort: { frontmatter: { title: ASC } }
        ) {
            nodes {
                frontmatter {
                    title
                    slug
                    category
                    excerpt
                    featuredImage {
                        childImageSharp {
                            gatsbyImageData(
                                width: 600
                                height: 375
                                quality: 90
                                placeholder: BLURRED
                                transformOptions: { cropFocus: CENTER }
                            )
                        }
                    }
                }
            }
        }
    }
`;
