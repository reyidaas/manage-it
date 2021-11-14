import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from '@mui/material';
import { Add } from '@mui/icons-material';
import { useRouter } from 'next/router';

import { wrapper } from '../../../store';
import { getServerSidePropsWithAutologin } from '../../../util/autologin';
import { getProjectById, reset } from '../../../store/ducks/projects/actions';
import { RootState } from '../../../store/types/state';
import ROUTES from '../../../constants/routes';
import PageContainer from '../../../components/PageContainer';
import TaskDialog from '../../../components/Tasks/TaskDialog';
import TasksList from '../../../components/Tasks/TasksList';

const Project: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { query } = useRouter();
  const project = useSelector(
    (state: RootState) => state.project.openedProject,
  );
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(reset());
    },
    [],
  );

  useEffect(() => {
    dispatch(getProjectById(parseInt(query.id as string)));
  }, [query.id]);

  const toggleDialog = (): void => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    project && (
      <PageContainer>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={3}
        >
          <Typography variant="h6">{project.title}</Typography>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={toggleDialog}
          >
            Add task
          </Button>
        </Box>
        <TasksList projectId={project.id} />
        <TaskDialog
          open={open}
          onClose={toggleDialog}
          projectId={parseInt(query.id as string)}
        />
      </PageContainer>
    )
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  getServerSidePropsWithAutologin(true, ROUTES.LOGIN),
);

export default Project;
