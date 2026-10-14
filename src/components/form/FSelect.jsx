import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

const FSelect = ({ name, label, options, ...other }) => {
    const { control } = useFormContext();   

    return (
        <Controller
            name={name} 
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    select
                    label={label}
                    {...field}
                    SelectProps={{ native: true }}
                    error={!!error}
                    helperText={error ? error.message : null}
                    {...other}
                >
                    <option value="" />
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            )}
        />
    );
}

export default FSelect;
