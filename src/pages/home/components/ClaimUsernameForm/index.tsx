import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Text, TextInput } from "@ignite-ui/react";
import { useRouter } from "next/router";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormAnnotation } from "./styles";

const ClaimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "É necessário informar ao menos 3 caracteres" })
    .regex(/^[a-z\\-]+$/i, { message: "É necessário informar apenas letras e hifens" })
    .transform((value) => value.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof ClaimUsernameFormSchema>

export function ClaimUsernameForm() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(ClaimUsernameFormSchema),
  });

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data;

    await router.push(`/register?username=${username}`);
  }

  return (
    <>
      <Form as='form' onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          {...register('username')}
          size='sm'
          prefix="ignite.com/"
          placeholder="seu-usuario"
        />
        <Button size='sm' type="submit" disabled={isSubmitting}>
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size='sm'>
          {errors.username ? errors.username.message : 'Informe seu nome de usuário'}
        </Text>
      </FormAnnotation>
    </>
  )
}