import { Box, Typography, useTheme } from '@mui/material';
import { Header } from 'components/Header';
import { tokens } from 'assets/theme/theme';
import { StatBox } from 'components/StatBox/StatBox';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import { LineChart } from 'components/LineChart';

import { mockTransactions } from 'data/mockData';
import { BarChart } from 'components/BarChart';
import { ProgressCircle } from 'components/ProgressCircle/ProgressCircle';
import { GeographyChart } from 'components/Geography';

export const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
      </Box>
      <Box></Box>
      {/* Grid */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '140px',
          gap: '20px',
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.75}
            increase="+14%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="840,000"
            subtitle="Sales"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.55}
            increase="+34%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="12,240"
            subtitle="New Clients"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.45}
            increase="+4%"
          />
        </Box>
        <Box
          sx={{
            gridColumn: 'span 3',
            bgcolor: colors.primary[400],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <StatBox
            title="1,000,361"
            subtitle="Traffic"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
            progress={0.95}
            increase="+24%"
          />
        </Box>
        {/* Row 2 */}
        <Box gridRow="span 2" gridColumn="span 8">
          <Box>
            <Typography variant="h5">Revenue Generated</Typography>
            <Typography
              variant="h3"
              fontWeight="bold"
              color={colors.greenAccent[500]}
            >
              $59,342.32
            </Typography>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridRow="span 2"
          gridColumn="span 4"
          overflow="auto"
          bgcolor={colors.primary[400]}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[900]}`}
            color={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[900]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                bgcolor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box gridColumn="span 4" gridRow="span 2" bgcolor={colors.primary[400]}>
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
