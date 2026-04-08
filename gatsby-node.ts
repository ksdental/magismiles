import { GatsbyNode } from 'gatsby';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as path from 'path';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            plugins: [new TsconfigPathsPlugin()],
        },
    });
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql<{
        allMarkdownRemark: {
            nodes: {
                frontmatter: {
                    slug: string;
                };
            }[];
        };
    }>(`
        query BlogPosts {
            allMarkdownRemark(
                filter: { fileAbsolutePath: { regex: "/content/blog/" } }
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                }
            }
        }
    `);

    if (result.errors || !result.data) {
        throw result.errors;
    }

    const blogPostTemplate = path.resolve('./src/templates/blog-post.tsx');

    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: `/blog/${node.frontmatter.slug}/`,
            component: blogPostTemplate,
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
};
