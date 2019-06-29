import { FormControl, InputLabel, makeStyles, Select, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCoefficientNotation, setDegree, setDimensions, setVariablesNotation, computeExponentsOn } from '../../redux/actions'
import { TradicionalVsPedantic } from '../../redux/actionTypes'
import { AppState } from '../../redux/store'
import SectionHeader from './SectionHeader'

//#region TootTips text
const variablesNotationText = 'Set the variables notation.\n'
    + 'Traditional notation is in the form x,y,z,... instead pedantic notation uses '
    + 'subindices of x.'
const coefficientNotationText = 'Set the coefficient notation.\n'
    + 'Traditional notation is in the form A,B,C,... instead pedantic notation uses '
    + 'subindices of a.'
const degreeText = "Enter the polynomial's degree.\n"
    + 'I.e. the maximum sum of the term exponents.'
const dimensionsText = "Enter the polynomial's dimensions.\n"
    + 'I.e. the number of independent variables.'
//#endregion

export const Form = () => {

    //#region Hooks

    const degree: number | undefined = useSelector((state: AppState) => state.degree)
    const dimensions: number | undefined = useSelector((state: AppState) => state.dimensions)
    const variablesNotation: string | undefined = useSelector((state: AppState) => state.variablesNotation)
    const coefficientNotation: string | undefined = useSelector((state: AppState) => state.coefficientNotation)

    const dispatch = useDispatch()

    //#endregion

    //#region Handlers

    const handleDimensionsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(computeExponentsOn(setDimensions, Number(event.target.value)))
    }
    const handleDegreeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        dispatch(computeExponentsOn(setDegree, Number(event.target.value)))
    }
    const handleCoefficientNotationChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        event.preventDefault()
        dispatch(setCoefficientNotation(event.target.value as TradicionalVsPedantic))
    }
    const handleVariablesNotationChange = (event: React.ChangeEvent<{ name?: string, value: unknown }>) => {
        event.preventDefault()
        dispatch(setVariablesNotation(event.target.value as TradicionalVsPedantic))
    }

    //#endregion

    //#region Styles

    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        title: {
            marginTop: 48
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
            marginTop: theme.spacing(2),
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
    }))
    const classes = useStyles()

    //#endregion

    //#region My Components

    const Header = () => <div>

        <SectionHeader
            title="How to get it?"
            pompadour="Change some parameters and look down, it is waiting for you there."
        />
        <br/>

    </div>

    const Dimensions = () => <span>

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
    </span>

    const Degree = () => <span>
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
    </span>

    const CoefficientNotation = () => <span>
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

    </span>

    const VariablesNotation = () => <span>
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
    </span>

    //#endregion

    //#region Render

    return <div>

        <Header />

        <Dimensions />

        <Degree />

        <CoefficientNotation />

        <VariablesNotation />

    </div>

    //#endregion

}
