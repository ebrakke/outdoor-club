import * as React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Menu } from '@material-ui/icons'

interface HeaderProps {
  title: string
}

const useStyles = makeStyles(theme => ({
  root: {
    height: 84,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.palette.grey[200],
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2)
  },
  brand: {
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}))

const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.brand} variant="h5" align="center">
        {title}
      </Typography>
      <Menu fontSize="large" />
    </div>
  )
}

export default Header
