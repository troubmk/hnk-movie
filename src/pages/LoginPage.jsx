import {useNavigate, useLocation} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Button, Stack, Typography } from '@mui/material';
import { FormProvider, FTextField } from '../components/form';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
    username: Yup.string().required("Username is required")
});
const defaultValues = {
    username: "",
};

const LoginPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
    });

    const {handleSubmit} = methods;

    const onSubmit = async (data) => {

        let from = location.state?.from?.pathname || "/";
        let username = data.username.trim();

        await auth.login(username);
        navigate(from, { replace: true });
    };

    return (
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} sx={{minWidth: "350px"}}>
                <Typography variant='h4'  sx={{ textAlign: "center", color: "primary.main" }}>
                    Login
                </Typography>
                <FTextField name="username" label="Username" sx={{
    "& .MuiInputBase-input": {
        color: "#fff",
    },
    "& .MuiInputLabel-root": {
        color: "#fff",
    },
}}/>
                <Button type="submit" variant="contained">
                    Login
                </Button>
            </Stack>
        </FormProvider>
    );
};

export default LoginPage;
