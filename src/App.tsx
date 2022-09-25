import { ActionIcon, AppShell, Button, ColorScheme, ColorSchemeProvider, Group, Header, MantineProvider } from '@mantine/core';
import React from 'react';
import { MoonStars, Sun } from 'tabler-icons-react';
import { useLocalStorage } from '@mantine/hooks';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <AppShell
          padding="md"
          header={<Header height={50} p="xs">{
            <Group position="right">
              <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
                {colorScheme === 'dark' ? <Sun size={16} /> : <MoonStars size={16} />}
              </ActionIcon>
            </Group>
          }</Header>}
          styles={(theme) => ({
            main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
          })}
        >
          <Group>
            <Button>New booking</Button>
            <Button>View bookings</Button>
          </Group>
          <Group mt="md">
            <Button>Manage resources</Button>
            <Button>Manage people</Button>
            <Button>Payment methods</Button>
            <Button>Travel charges</Button>
            <Button>Hourly charges</Button>
          </Group>
          <Group mt="md">
            <Button>Resource sheet</Button>
            <Button>People sheet</Button>
            <Button>Bookings report</Button>
          </Group>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
