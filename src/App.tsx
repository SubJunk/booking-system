import { AppShell, Button, ColorScheme, ColorSchemeProvider, Group, Header, MantineProvider, Switch, useMantineTheme } from '@mantine/core';
import React from 'react';
import { useLocalStorage } from '@mantine/hooks';
import { IconSun, IconMoonStars } from '@tabler/icons';

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
  });
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }
  const theme = useMantineTheme();

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
              <Switch
                checked={colorScheme === 'dark'}
                onChange={() => toggleColorScheme()}
                size="lg"
                onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
                offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
              />
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
