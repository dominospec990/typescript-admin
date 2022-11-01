import { Box } from '@mui/material';
import Header from '../../../components/Header/Header';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { mockDataTeam } from '../../../data/mockData';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1},
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
  },
  { field: 'phone', headerName: 'Phone', flex: 1 },
  { field: 'access', headerName: 'Access', flex: 1 },
];

const Team = () => {
  return (
    <div>
      <Box m="20px">
        <Header title="Team" subtitle="Manage Team Members" />
        <Box m="40px 0 0 0" height="75vh">
          <DataGrid columns={columns} rows={mockDataTeam} />
        </Box>
      </Box>
    </div>
  );
};

export default Team;
