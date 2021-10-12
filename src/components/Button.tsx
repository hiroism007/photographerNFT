import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Button as MaterialButton, Icon } from '@mui/material'
import { v4 } from 'uuid'
const uuid = v4

type Props = {
    onClick?: (args: any) => void
    onChange?: (args: any) => void
    text: string
    icon?: any
    color?: 'default' | 'gradient'
    type?: 'default' | 'upload'
    disabled?: boolean
    accept?: string
    fullWith?: boolean
}

export const Component = (props: Props) => {
    const svgIcon = props.icon ? (
        <Icon>
            <img src={props.icon} />
        </Icon>
    ) : null

    if (props.type === 'upload') {
        const id = uuid()
        return (
            <div>
                <input
                    accept={props.accept ? props.accept : undefined}
                    style={{ display: 'none' }}
                    id={id}
                    type="file"
                    onChange={props.onChange}
                />
                <label htmlFor={id}>
                    <MaterialButton variant="contained" component="span">
                        <ButtonText>{props.text}</ButtonText>
                    </MaterialButton>
                </label>
            </div>
        )
    }

    if (props.color === 'gradient') {
        return (
            <StyledButton
                onClick={props.onClick}
                endIcon={svgIcon}
                disabled={props.disabled}
                fullWidth={props.fullWith}
            >
                <StyledButtonText>{props.text}</StyledButtonText>
            </StyledButton>
        )
    } else {
        return (
            <DefaultButton
                onClick={props.onClick}
                endIcon={svgIcon}
                disabled={props.disabled}
                fullWidth={props.fullWith}
            >
                <ButtonText>{props.text}</ButtonText>
            </DefaultButton>
        )
    }
}

//------------------------------------------------------------------------------
// Styles
//------------------------------------------------------------------------------

const DefaultButton = styled(MaterialButton)`
    background: ${props => props.theme.palette.background.default};
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(128, 128, 128, 0.3);
    font-family: Libre Baskerville, serif;
`

const StyledButton = styled(MaterialButton)`
    background: radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
    border-radius: 3px;
    border: 0;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    font-family: Libre Baskerville, serif;
`

const ButtonText = styled('div')`
    color: ${props => props.theme.palette.text.secondary};
    margin: 5px;
    font-family: Libre Baskerville, serif;
`

const StyledButtonText = styled('div')`
    color: white;
    margin: 5px;
    font-family: Libre Baskerville, serif;
`
