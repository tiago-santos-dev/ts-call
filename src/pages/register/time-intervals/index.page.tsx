import { Button, Checkbox, Heading, MultiStep, Text, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Container, Header } from "../styles";
import { IntervalBox, IntervalDay, IntervalInputs, IntervalItem, IntervalsContainer } from "./styles";
export default function TimeIntervals() {
  return (
    <Container>
      <Header>
        <Heading as='strong'>Quase lá</Heading>
        <Text>
          Defina o intervalo  horários que você está disponível em cada dia da semana.
        </Text>
        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form"	>
        <IntervalsContainer>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Segunda-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                type="time"
                size="sm"
                step={60}
              />
              <TextInput
                type="time"
                size="sm"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
          <IntervalItem>
            <IntervalDay>
              <Checkbox />
              <Text>Terça-feira</Text>
            </IntervalDay>
            <IntervalInputs>
              <TextInput
                type="time"
                size="sm"
                step={60}
              />
              <TextInput
                type="time"
                size="sm"
                step={60}
              />
            </IntervalInputs>
          </IntervalItem>
        </IntervalsContainer>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>

      </IntervalBox>
    </Container>
  )
}