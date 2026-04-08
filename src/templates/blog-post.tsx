import { Fragment } from 'react';
import { graphql, HeadProps, PageProps } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { Seo } from '@/Seo';
import { CLink } from '@/CLink';
import { theme } from '@/layout/styles/GlobalStyles';

const HeroSection = styled.section`
    padding-top: 135px;
    position: relative;
    display: grid;
    min-height: 40vh;

    > * {
        grid-area: 1/1;
    }

    > .gatsby-image-wrapper {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        ::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 28, 54, 0.7);
            z-index: 1;
        }
    }

    @media (min-width: 768px) {
        min-height: 50vh;
    }

    @media (min-width: 1024px) {
        padding-top: 146px;
    }

    @media (min-width: 1100px) {
        padding-top: 176px;
    }

    @media (min-width: 1680px) {
        padding-top: 151px;
    }
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 32px 16px;
    color: ${theme.colors.white};
    min-height: 40vh;

    @media (min-width: 768px) {
        padding: 60px 32px;
        min-height: 50vh;
    }

    @media (min-width: 1024px) {
        padding: 80px 48px;
    }
`;

const CategoryBadge = styled.span`
    display: inline-block;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 6px 16px;
    border-radius: 2px;
    margin-bottom: 20px;
`;

const HeroTitle = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    line-height: 1.15;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    font-size: 1.375rem;
    margin: 0;
    max-width: 800px;
    word-break: break-word;

    > strong {
        font-weight: 700;
    }

    @media (min-width: 480px) {
        font-size: 1.625rem;
    }

    @media (min-width: 768px) {
        font-size: 2rem;
    }

    @media (min-width: 1280px) {
        font-size: 2.75rem;
    }
`;

const ArticleWrapper = styled.article`
    max-width: 800px;
    margin: 0 auto;
    padding: 32px 16px 48px;

    @media (min-width: 768px) {
        padding: 48px 32px 80px;
    }

    @media (min-width: 1024px) {
        padding: 64px 48px 120px;
    }
`;

const ArticleContent = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    line-height: 180%;
    letter-spacing: 0.06em;
    color: ${theme.colors.black};

    h2 {
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.01em;
        font-size: 1.125rem;
        line-height: 1.2;
        margin: 32px 0 16px;
        color: ${theme.colors.darkerBlue};

        @media (min-width: 768px) {
            font-size: 1.375rem;
            margin: 48px 0 16px;
        }

        @media (min-width: 1280px) {
            font-size: 1.875rem;
        }
    }

    p {
        margin: 0 0 24px;
    }

    ul,
    ol {
        margin: 0 0 24px;
        padding-inline-start: 24px;

        li {
            margin-bottom: 12px;

            strong {
                color: ${theme.colors.darkerBlue};
            }
        }
    }

    a {
        color: ${theme.colors.blue};
        transition: opacity 0.3s ease-in-out;

        &:hover {
            opacity: 0.75;
        }
    }
`;

const BackLink = styled(CLink)`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${theme.colors.blue};
    margin-bottom: 32px;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.75;
    }

    &::before {
        content: '←';
    }
`;

type DataProps = {
    markdownRemark: {
        html: string;
        frontmatter: {
            title: string;
            slug: string;
            category: string;
            excerpt: string;
            featuredImage: {
                childImageSharp: {
                    gatsbyImageData: import('gatsby-plugin-image').IGatsbyImageData;
                };
            };
        };
    };
};

export default function BlogPost({ data }: PageProps<DataProps>) {
    const { frontmatter, html } = data.markdownRemark;
    const image = getImage(frontmatter.featuredImage?.childImageSharp?.gatsbyImageData);

    return (
        <Fragment>
            <HeroSection>
                {image && (
                    <GatsbyImage image={image} alt={frontmatter.title} style={{ gridArea: '1/1' }} />
                )}
                <HeroContent>
                    <CategoryBadge>{frontmatter.category}</CategoryBadge>
                    <HeroTitle>
                        <strong>{frontmatter.title}</strong>
                    </HeroTitle>
                </HeroContent>
            </HeroSection>
            <ArticleWrapper>
                <BackLink to="/blog/">Back to Blog</BackLink>
                <ArticleContent dangerouslySetInnerHTML={{ __html: html }} />
            </ArticleWrapper>
        </Fragment>
    );
}

export const Head = ({ data }: HeadProps<DataProps>) => {
    const { frontmatter } = data.markdownRemark;
    return (
        <Seo
            pathname={`blog/${frontmatter.slug}`}
            title={`${frontmatter.title} | Magic Smile Dental Blog`}
            description={frontmatter.excerpt}
        />
    );
};

export const query = graphql`
    query BlogPostBySlug($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                slug
                category
                excerpt
                featuredImage {
                    childImageSharp {
                        gatsbyImageData(
                            quality: 90
                            placeholder: BLURRED
                            layout: FULL_WIDTH
                        )
                    }
                }
            }
        }
    }
`;
