import { useFormContext, Controller } from 'react-hook-form';
import {Switch, FormControlLabel} from '@mui/material';

const FSwitch = ({ name, label, ...other }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <FormControlLabel
                    control={<Switch {...field} checked={field.value} />}
                    label={label}
                    {...other}
                />
            )}
        />
    );
}

export default FSwitch;