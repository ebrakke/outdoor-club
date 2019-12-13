import * as React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { FluidObject } from 'gatsby-image'

import Page from '../components/Page'
import Layout from '../layouts'
import Hero from '../components/Hero'

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    padding: theme.spacing(2),
    '& h4': {
      paddingBottom: theme.spacing(3),
    },
  },
}))

type Section = {
  header: string
  body: string
}

type Props = {
  hero: {
    header: string
    image: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
  sections: Section[]
}
const IndexPageTemplate = (props: Props) => {
  const classes = useStyles()
  return (
    <Layout>
      <Page className={classes.root}>
        <Hero header={props.hero.header} image={props.hero.image} />
        {props.sections.map((s, i) => (
          <div className={classes.section} key={i}>
            <Typography variant="h4">{s.header}</Typography>
            <Typography>{s.body}</Typography>
          </div>
        ))}
      </Page>
    </Layout>
  )
}

type IndexProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        hero: {
          header: string
          image: {
            childImageSharp: {
              fluid: FluidObject
            }
          }
        }
        sections: Section[]
      }
    }
  }
}
const IndexPage = (props: IndexProps) => {
  const { frontmatter } = props.data.markdownRemark
  return <IndexPageTemplate hero={frontmatter.hero} sections={frontmatter.sections} />
}

export const query = graphql`
  query {
    markdownRemark(fields: { layout: { eq: "index" } }) {
      frontmatter {
        hero {
          header
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sections {
          header
          body
        }
      }
    }
  }
`

export default IndexPage
