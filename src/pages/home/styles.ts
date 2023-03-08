import { Heading, styled, Text } from "@ignite-ui/react";

export const Container = styled('div', {
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  height: '100vh',
});

export const HeadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  position: 'absolute',

  [`${Heading}`]: {
    zIndex: 1,
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`${Text}`]: {
    zIndex: 1,
    marginTop: '$2',
    color: '$gray200',
  },
})

export const Hero = styled('div', {
  maxWidth: '480px',
  height: '580px',
  padding: '0 $10',
  position: 'relative',

  '.mask-image': {
    position: 'relative',
    height: '100%',
  },
});

export const Preview = styled('div', {
  paddingRight: '$8',
  overflow: 'hidden',

  '@media(max-width: 600px)': {
    display: 'none',
  }
});