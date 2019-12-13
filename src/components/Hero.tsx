import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { FluidObject } from 'gatsby-image'

import Button from './Button'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    height: 250,
    backgroundImage: (props: Props) => `url(${props.image.childImageSharp.fluid.src})`,
    backgroundPosition: 'center',
    color: theme.palette.grey[200],
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: theme.spacing(2),
    backgroundColor: 'hsla(0, 0%, 0%, 0.55)',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  donateButton: {
    marginTop: 'auto',
    marginBottom: theme.spacing(3),
  },
}))

type Props = {
  header: string
  image: {
    childImageSharp?: {
      fluid: FluidObject
    }
  }
}

export const Hero = (props: Props) => {
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
      <div className={classes.overlay}>
        <Typography variant="h5" align="center">
          {props.header}
        </Typography>
        <div className={classes.donateButton}>
          <Button>Donate</Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
