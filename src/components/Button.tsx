import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'hsl(47, 100%, 49%)',
    minWidth: 170,
    width: "fit-content",
    height: 50,
    boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
    border: "none"
  }
}))

type Props = {
  children: React.ReactChild
}

const Button = ({children}: Props) => {
  const classes = useStyles()
  return (
    <button className={classes.root}><Typography variant="h5">{children}</Typography></button>
  )
}

export default Button
