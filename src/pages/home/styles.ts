import maskImage from '@/assets/mask.png';
import { Heading, styled, Text } from "@ignite-ui/react";

export const Container = styled('div', {
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  height: '100vh',
});

export const Hero = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: '680px',
  height: '680px',
  padding: '0 $10',

  backgroundImage: `url(${maskImage.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
  },
});

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  }
});