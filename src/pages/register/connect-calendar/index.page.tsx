import { Button, Heading, MultiStep, Text } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRight, Check } from "phosphor-react";
import { Container, Header } from "../styles";
import { AuthError, ConnectBox, ConnectItem } from "./styles";
export default function ConnectCalendar() {
  const router = useRouter();
  const session = useSession();

  const hasAuthError = !!router.query.error;
  const isAuthenticated = session.status === "authenticated";

  async function handleConnectCalendar() {
    await signIn("google");
  }

  return (
    <Container>
      <Header>
        <Heading as='strong'>Conecte sua agenda</Heading>
        <Text>
          Conecte o seu calendário para verificarmos automaticamente os
          horários disponíveis e os novos eventos à medida em que são agendados.
        </Text>
        <MultiStep size={4} currentStep={2} />

        <ConnectBox>
          <ConnectItem>
            <Text>Google Calendar</Text>
            {isAuthenticated ? (
              <Button size='sm' disabled>
                Conectado
                <Check />
              </Button>
            ) : (
              <Button variant='secondary' size='sm' onClick={handleConnectCalendar}>
                Conectar
                <ArrowRight />
              </Button>
            )}
          </ConnectItem>
          {hasAuthError && (
            <AuthError size='sm'>
              Falha ao se conectar ao Google, verifique se você habilitou as permissões de acesso ao Google Calendar.
            </AuthError>
          )}
          <Button type="submit" disabled={!isAuthenticated}>
            Próximo passo
            <ArrowRight />
          </Button>
        </ConnectBox>

      </Header>
    </Container>
  )
}