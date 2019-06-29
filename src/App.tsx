import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { PolynomialPage } from './components/polynomial-page/PolynomialPage'
import ImageAvatars from './components/ImageAvatars'


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: '#606060',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  fixedHeight: {
    height: 240,
  },
  borderless: {
    border:'none'
  },
}))

export default function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <ImageAvatars />
            </Grid>
            <Grid item xs>
              <PolynomialPage />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}
