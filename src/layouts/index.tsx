import * as React from 'react'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '@material-ui/core/styles'

import Navbar from '../components/Navbar'
import theme from '../theme'
import { CssBaseline } from '@material-ui/core'

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string
      description: string
      keywords: string
    }
  }
}

const IndexLayout: React.FC = ({ children }) => {
  const data: StaticQueryProps = useStaticQuery(graphql`
    query IndexLayoutQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: data.site.siteMetadata.keywords }
        ]}
      />
      <Navbar title={data.site.siteMetadata.title} />
      <div>{children}</div>
    </ThemeProvider>
  )
}

export default IndexLayout
