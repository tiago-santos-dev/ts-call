import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { ConfirmForm, FormActions, FormError, FormHeader } from './styles'

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: 'O nome precisa de no mínimo 3 caracteres' }),
  email: z
    .string({ required_error: 'O e-mail é obrigatório' })
    .email({ message: 'Digite um e-mail válido' }),
  observations: z.string().nullable(),
})

type ConfirmFormData = z.infer<typeof confirmFormSchema>
export const ConfirmStep = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  })
  const handleConfirmStep: SubmitHandler<ConfirmFormData> = (data) => {
    console.log(data);
  }

  return (
    <ConfirmForm as='form' onSubmit={handleSubmit(handleConfirmStep)}>
      <FormHeader>
        <Text> <CalendarBlank /> 22 de fevereiro de 2023</Text>
        <Text><Clock /> 18:00 </Text>
      </FormHeader>

      <label>
        <Text size='sm'>Nome completo</Text>
        <TextInput
          {...register('name')}
          placeholder='Seu nome'
        />
        {errors.name && (
          <FormError size='sm'>{errors.name.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Endereço de e-mail</Text>
        <TextInput
          {...register('name')}
          type='email'
          placeholder='jhondoe@example.com'
        />
        {errors.email && (
          <FormError size='sm'>{errors.email.message}</FormError>
        )}
      </label>

      <label>
        <Text size='sm'>Observações</Text>
        <TextArea {...register('observations')} />
      </label>

      <FormActions>
        <Button
          variant='tertiary'
          type='button'
        >
          Cancelar
        </Button>
        <Button
          type='submit'
          disabled={isSubmitting}
        >
          Confirmar
        </Button   >
      </FormActions>
    </ConfirmForm>
  )
}
