import { useRouter } from 'next/router';
import { List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, MenuBook } from '@mui/icons-material';

type Values = '/dashboard' | '/projects';

interface Element {
  id: string;
  value: Values;
  label: string;
  icon: JSX.Element;
}

const ELEMENTS: Element[] = [
  {
    id: 'nav-dashboard',
    value: '/dashboard',
    label: 'Dashboard',
    icon: <Dashboard />,
  },
  {
    id: 'nav-projects',
    value: '/projects',
    label: 'Projects',
    icon: <MenuBook />,
  },
];

const Nav: React.FC = () => {
  const { pathname, push } = useRouter();
  const handleSelect = (value: Values): void => {
    push(value);
  };

  return (
    <List sx={{ width: '100%' }}>
      {ELEMENTS.map(({ id, value, label, icon }) => (
        <ListItemButton
          key={id}
          onClick={(): void => handleSelect(value)}
          selected={pathname === value}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText>{label}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default Nav;
