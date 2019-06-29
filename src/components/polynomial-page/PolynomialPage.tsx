import React from 'react'
import { Form } from './Form'
import { Typography } from '@material-ui/core'
import { Polynomial } from './Polynomial'
import { Matrix } from './Matrix'

const PageTitle = () => <Typography variant="h3" gutterBottom>Get your polynomial</Typography>

export const PolynomialPage = () => <div>

    <PageTitle />
    
    <Form />

    <Polynomial />

    <Matrix />

</div>
