import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Container, Form, FormError, Header } from "./styles";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "É necessário informar ao menos 3 caracteres" })
    .regex(/^[a-z\\-]+$/i, { message: "É necessário informar apenas letras e hifens" })
    .transform((value) => value.toLowerCase()),
  name: z.string().min(3, { message: "É necessário informar ao menos 3 caracteres" }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  async function handleRegister(data: RegisterFormData) {

  }
  return (
    <Container>
      <Header>
        <Heading as='strong'>Bem-vindo ao TS Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>
        <MultiStep size={4} currentStep={1} />
        <Form as='form' onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size='sm'>Nome de usuário</Text>
            <TextInput
              prefix="ignite.com/"
              placeholder="seu-usuário"
              {...register('username')}
            />
            {errors.username && (
              <FormError size='sm'>
                {errors.username.message}
              </FormError>
            )}
          </label>
          <label>
            <Text size='sm'>Nome completo</Text>
            <TextInput placeholder="Seu nome"  {...register('name')} />
            {errors.name && (
              <FormError size='sm'>
                {errors.name.message}
              </FormError>
            )}
          </label>
          <Button type='submit' disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}