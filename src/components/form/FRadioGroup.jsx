import { useFormContext, Controller } from 'react-hook-form';
import {
    Radio,
    RadioGroup,
    FormHelperText,
    FormControlLabel
} from '@mui/material';

const FRadioGroup = ({ name, options, ...other }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div>
                    <RadioGroup {...field} {...other}>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio />}
                                label={option.label}
                            />
                        ))}
                    </RadioGroup>
                    {error && <FormHelperText error>{error.message}</FormHelperText>}
                </div>
            )}
        />
    );
}

export default FRadioGroup;