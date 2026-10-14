import { useFormContext, Controller } from 'react-hook-form';
import { Checkbox, FormControlLabel } from '@mui/material';

const FCheckbox = ({ name, label, ...other }) => {
    const { control } = useFormContext();

    return (
        <FormControlLabel
            control={
                <Controller 
            name={name}
            control={control}
            render={({ field }) => (
                <Checkbox
                    {...field}  
                    checked={field.value}
                    {...other}
                />  
            )}
            />
            }
            {...other}
        />
    );
}

export default FCheckbox;

