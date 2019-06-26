import { Button, FormControl, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exponents } from '../../lib/exponents';
import { setCoefficientNotation, setDegree, setDimensions, setExponents, setVariablesNotation } from '../../redux/actions';
import { TradicionalVsPedantic } from '../../redux/actionTypes';
import { AppState } from '../../redux/store';

const variablesNotationText = 'Select the notation the variables will have. '
    + 'Traditional notation is in the form x,y,z,... instead pedantic notation use '
    + 'subindices of x.'
const coefficientNotationText = 'Select the notation the coefficient will have. '
    + 'Traditional notation is in the form A,B,C,... instead pedantic notation use'
    + 'subindices of a.'
const degreeText = "Enter the polynomial's degree, "
    + 'the maximum of the sum of the exponentes the polynomial terms have.'
const dimensionsText = "Enter the polynomial's dimensions, "
    + 'the number of independent variables in the polynomial.'


export const Form = () => {

    const degree: number | undefined = useSelector((state: AppState) => state.degree)
    const dimensions: number | undefined = useSelector((state: AppState) => state.dimensions)
    const variablesNotation: string | undefined = useSelector((state: AppState) => state.variablesNotation)
    const coefficientNotation: string | undefined = useSelector((state: AppState) => state.coefficientNotation)


    const dispatch = useDispatch()

    const handleDimensionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDimensions(Number(event.target.value)))
    }
    const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDegree(Number(event.target.value)))
    }
    const handleCoefficientNotationChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        dispatch(setCoefficientNotation(event.target.value as TradicionalVsPedantic))
    }
    const handleVariablesNotationChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        dispatch(setVariablesNotation(event.target.value as TradicionalVsPedantic))
    }
    const makeTheBloodyPolynomialAtOnce = () => {
        dispatch(setExponents(exponents(dimensions, degree)))
    }
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 80,
            maxWidth: 80
        },
        firstTextField: {
            marginLeft: 0,
            marginRight: theme.spacing(1),
            width: 80,
            maxWidth: 80
        },
        select: {
            marginTop: theme.spacing(2)
        },
        dense: {
            marginTop: 19,
        },
        surly: {
            marginRight: theme.spacing(1)
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 80,
        },
        customWidth: {
            maxWidth: 300,
        },
        menu: {
            width: 200,
        },
        buttonGo: {
            marginLeft: theme.spacing(5),
            marginTop: theme.spacing(3)
        }
    }));

    const classes = useStyles()
    return <div>
        <Typography variant="h5" gutterBottom  style={{marginTop: 48}}>
            How
        </Typography>
        <div>Enter some parameters and press GO</div>
        <TextField
            id="dimensions"
            label="Dimensions"
            type="number"
            inputProps={{ min: "1", max: "5", step: "1" }}
            className={classes.firstTextField}
            value={dimensions}
            onChange={handleDimensionsChange}
            margin="normal"
            InputLabelProps={{ title: dimensionsText }}
        />
        <TextField
            id="degree"
            label="Degree"
            type="number"
            inputProps={{ min: "0", max: "9", step: "1" }}
            className={classes.textField}
            value={degree}
            onChange={handleDegreeChange}
            margin="normal"
            InputLabelProps={{ title: degreeText }}
        />
        <FormControl className={classes.surly} style={{ marginTop: 16, width: 160 }}>
            <InputLabel
                title={coefficientNotationText}
                htmlFor="coefficient-notation">Coefficient notation
            </InputLabel>
            <Select
                native
                value={coefficientNotation}
                onChange={handleCoefficientNotationChange}
                inputProps={{
                    name: 'coefficient-notation',
                    id: 'coefficient-notation',
                }}
            >
                <option value={'traditional'}>Traditional</option>
                <option value={'pedantic'}>Pedantic</option>
            </Select>
        </FormControl>
        <FormControl className={classes.surly} style={{ marginTop: 16, width: 160 }}>
            <InputLabel
                title={variablesNotationText}
                htmlFor="variables-notation">Variables notation
            </InputLabel>
            <Select
                native
                value={variablesNotation}
                onChange={handleVariablesNotationChange}
                inputProps={{
                    name: 'variables-notation',
                    id: 'variables-notation',
                }}
            >
                <option value={'traditional'}>Traditional</option>
                <option value={'pedantic'}>Pedantic</option>
            </Select>
        </FormControl>
        <Button
            className={classes.buttonGo}
            onClick={makeTheBloodyPolynomialAtOnce}>
            Go
        </Button>
    </div>
}
