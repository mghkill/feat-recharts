import { useForm } from "react-hook-form";
import { Container, ContainedForm, BoxField, StyledForm } from "./styles";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";
import { useUser } from "../../providers/users";

/* import toast from "react-hot-toast"; */
const LogIn = () => {
    const { signIn } = useUser(); 
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (data) => {
         signIn(data).catch((err) => toast.error("Algo deu errado tente novamente")); 
    }
    return (
        <Container>

            <ContainedForm>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <BoxField>
                        <TextField
                            sx={{
                                "& input:valid + fieldset": {
                                borderColor: "white",
                                borderWidth: 1,
                                borderRadius: 3,
                                height: 75,
                                },
                                filter: "drop-shadow(0px 4px 4px var(--preto-opacity))",
                                bgcolor: "var(--branco)",
                                borderRadius: 3,
                                height: 70,
                            }}
                            {...register("username", { required: true })}
                            aria-invalid={errors.username ? "true" : "false"}
                            id="outlined-username-input"
                            label="username *"
                            type="text"
                            error={errors.username?.type === "required"}
                            autoComplete="current-password"
                        />
                    </BoxField>
                    <BoxField>
                        <TextField
                            sx={{
                                "& input:valid + fieldset": {
                                borderColor: "white",
                                borderWidth: 1,
                                borderRadius: 3,
                                height: 75,
                                },
                                filter: "drop-shadow(0px 4px 4px var(--preto-opacity))",
                                bgcolor: "var(--branco)",
                                borderRadius: 3,
                                height: 70,
                            }}
                            {...register("password", { required: true })}
                            aria-invalid={errors.password ? "true" : "false"}
                            id="outlined-password-input"
                            label="password *"
                            type="text"
                            error={errors.password?.type === "required"}
                            autoComplete="current-password"
                        />
                    </BoxField>
                    <Button type="submit">Enviar</Button>
                </StyledForm>
            </ContainedForm>

        </Container>
    );
};

export default LogIn;