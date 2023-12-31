import { FC, useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem} from '@mantine/core';
import {
  IconHome2,
  IconCalendarStats,
  IconUser,
  IconBrandTwitch,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useNavigate } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.white,
    opacity: 0.85,

    '&:hover': {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    '&, &:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background!,
        0.15
      ),
    },
  },
}));

interface NavbarLinkProps {
  icon: React.FC<unknown>;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon/>
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home',link:'/home' },
  { icon: IconBrandTwitch, label: 'form',link:'/form' },
  { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Account' ,link:'/profile'},
];

export function NavbarMinimalColored() {
  const [active, setActive] = useState(2);
  const nav =useNavigate()

  const links = mockdata.map((link, index) => (
    <NavbarLink
      icon={link.icon as FC<unknown>}
      label={link.label}
      active={index === active}
      onClick={() => {
        setActive(index)
        nav(link.link||'')
      }}
    />
  ));

  return (
      
    <Navbar
      height='100vh'
      width={{ base: 80 }}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
          .background,
      })}
    >
      <Center>
        <MantineLogo type="mark" inverted size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
         
        </Stack>
      </Navbar.Section>
    </Navbar>
 

  );
}