import * as React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Img, { FluidObject } from 'gatsby-image'

import Page from '../components/Page'
import Layout from '../layouts'
import Hero from '../components/Hero'
import Button from '../components/Button'

const useStyles = makeStyles(theme => ({
  root: {},
  section: {
    padding: theme.spacing(2),
    '& h4': {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: 'column',
  },
  sectionImage: {
    height: 200,
    marginLeft: -1 * theme.spacing(2),
    marginRight: -1 * theme.spacing(2),
  },
  sectionAction: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    alignItems: 'center',
  },
}))

type Props = {
  hero: {
    header: string
    image?: {
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
            {s.image ? <Img className={classes.sectionImage} fluid={s.image.childImageSharp.fluid} /> : null}
            <Typography variant="h4">{s.header}</Typography>
            <Typography>{s.body}</Typography>
            {s.action ? (
              <div className={classes.sectionAction}>
                <Button variant="filled">{s.action.display}</Button>
                {s.action.learn ? <Button color="primary">Learn More</Button> : null}
              </div>
            ) : null}
          </div>
        ))}
      </Page>
    </Layout>
  )
}

type Section = {
  header: string
  body: string
  image?: {
    childImageSharp: {
      fluid: FluidObject
    }
  }
  action?: {
    display: string
    path: string
    learn?: string
  }
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
          action {
            display
            path
            learn
          }
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
