import { useFormContext, Controller } from 'react-hook-form';
import {
    Checkbox,
    FormGroup,
    FormControlLabel
} from '@mui/material';

const FMultiCheckbox = ({ name, options, ...other }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => {
                const onSelected = (option) => {
                    const newValue = field.value.includes(option)
                        ? field.value.filter((value) => value !== option)
                        : [...field.value, option];

                    field.onChange(newValue);
                };

                return (
                    <FormGroup>
                        {options.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                control={
                                    <Checkbox
                                        checked={field.value.includes(option.value)}
                                        onChange={() => onSelected(option.value)}
                                        {...other}
                                    />
                                }
                                label={option.label}
                            />
                        ))}
                    </FormGroup>
                );
            }}
        />
    );
};

export default FMultiCheckbox;