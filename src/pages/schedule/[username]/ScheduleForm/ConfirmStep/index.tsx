import { Button, Text, TextArea, TextInput } from "@ignite-ui/react"
import { CalendarBlank, Clock } from "phosphor-react"
import { ConfirmForm, FormActions, FormHeader } from "./styles"

export const ConfirmStep = () => {

  const handleConfirmStep = () => {

  }

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmStep}>
      <FormHeader>
        <Text> <CalendarBlank /> 22 de fevereiro de 2023</Text>
        <Text><Clock /> 18:00 </Text>
      </FormHeader>

      <label>
        <Text size="sm">Nome completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>

      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="jhondoe@example.com" />
      </label>

      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
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
        >
          Confirmar
        </Button   >
      </FormActions>
    </ConfirmForm>
  )
}