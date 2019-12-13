import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: (props: Props) => (props.variant === 'filled' ? 'hsl(47, 100%, 49%)' : 'transparent'),
    color: (props: Props) => (props.color ? theme.palette[props.color].main : ''),
    minWidth: 170,
    width: 'fit-content',
    height: 50,
    boxShadow: (props: Props) => (props.variant === 'default' ? '' : '2px 2px 2px rgba(0, 0, 0, 0.25)'),
    border: 'none',
  },
}))

type Props = {
  children: React.ReactChild
  variant?: 'filled' | 'outlined' | 'default'
  color?: 'primary'
}

const Button = (props: Props) => {
  const classes = useStyles(props)
  return (
    <button className={classes.root}>
      <Typography variant="h5">{props.children}</Typography>
    </button>
  )
}
Button.defaultProps = {
  variant: 'default',
}

export default Button
