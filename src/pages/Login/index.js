
import { useForm } from "react-hook-form";
import { Container, ContainedForm, StyledForm, ContainedSvg } from "./styles";
import { Button, TextField } from "@mui/material";

/* import toast from "react-hot-toast"; */
const LogIn = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <Container>

            <ContainedForm>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        {...register("user", { required: true })}
                        aria-invalid={errors.user ? "true" : "false"}
                        id="outlined-password-input"
                        label="User *"
                        type="text"
                        error={errors.user?.type === "required"}
                        autoComplete="current-password"
                    />
                    {errors.user?.type === "required" ? (
                        <p role="alert">First name is required</p>
                    )
                        : (
                            <p role="alert" style={{ color: "transparent" }}>-</p>
                        )
                    }
               
                    <TextField
                        {...register("password", { required: true })}
                        aria-invalid={errors.password ? "true" : "false"}
                        id="outlined-password-input"
                        label="password *"
                        type="text"
                        error={errors.password?.type === "required"}
                        autoComplete="current-password"
                    />
                    {errors.password?.type === "required" ? (
                        <p role="alert">First name is required</p>
                    )
                        : (
                            <p role="alert" style={{ color: "transparent" }}>-</p>
                        )
                    }

                    <Button type="submit">Enviar</Button>
                </form>
            </ContainedForm>

        </Container>
    );
};

export default LogIn;