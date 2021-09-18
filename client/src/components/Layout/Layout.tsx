import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ThemeProvider, CssBaseline, Box } from '@material-ui/core';

import theme from '../../theme';
import TopBar from '../TopBar';
import LeftSidebar from '../Sidebars/LeftSidebar';
import RightSidebar from '../Sidebars/RightSidebar';
import { NON_AUTH_ROUTES } from '../../constants/routes';
import { RootState } from '../../store/types/state';

const Layout: React.FC = ({ children }) => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const { pathname } = useRouter();

  const shouldDisplayAuthContent = isAuth && !NON_AUTH_ROUTES.includes(pathname);

  return children ? (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box m="0 auto" width="50vw" height="200vh">
        {children}
      </Box>
      {shouldDisplayAuthContent && <LeftSidebar />}
      {shouldDisplayAuthContent && <RightSidebar />}
      {shouldDisplayAuthContent && <TopBar />}
    </ThemeProvider>
  ) : null;
};

export default Layout;
