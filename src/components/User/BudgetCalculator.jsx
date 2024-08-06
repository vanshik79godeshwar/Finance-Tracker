import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import './BudgetCalculator.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
});

const BudgetCalculator = () => {
  const [income, setIncome] = useState(0);
  const [rent, setRent] = useState(0);
  const [emi, setEmi] = useState(0);

  const handleIncomeChange = (e) => setIncome(Number(e.target.value));
  const handleRentChange = (e) => setRent(Number(e.target.value));
  const handleEmiChange = (e) => setEmi(Number(e.target.value));

  const calculateValues = () => {
    const newAmt = income - rent - emi;
    const savings = newAmt * 0.2;
    const groceries = newAmt * 0.2;
    const utilities = newAmt * 0.3;
    const personalExpenses = newAmt * 0.3;

    return { savings, groceries, utilities, personalExpenses };
  };

  const { savings, groceries, utilities, personalExpenses } = calculateValues();

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container maxWidth="sm" className="budget-calculator">
        <Paper elevation={6} className="calculator-container p-6 rounded-lg bg-transparent shadow-xl">
          <Typography variant="h4" gutterBottom className="text-center text-white">
            Budget Calculator
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Monthly Salary"
                type="number"
                fullWidth
                variant="outlined"
                value={income}
                onChange={handleIncomeChange}
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white' }}
              />
            </Grid>
            <Grid item xs={12} className="budget-grid-item">
              <TextField
                label="Rent"
                type="number"
                fullWidth
                variant="outlined"
                value={rent}
                onChange={handleRentChange}
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white' }}
              />
            </Grid>
            <Grid item xs={12} className="budget-grid-item">
              <TextField
                label="EMI"
                type="number"
                fullWidth
                variant="outlined"
                value={emi}
                onChange={handleEmiChange}
                InputLabelProps={{ className: 'text-gray-400' }}
                InputProps={{ className: 'text-white' }}
              />
            </Grid>
            <Grid item xs={12} className="budget-grid-item">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => console.log('Calculate EMI button clicked!')}
                className="bg-blue-500 hover:bg-blue-700"
              >
                Calculate
              </Button>
            </Grid>
          </Grid>
          <div className="values mt-6 p-4 rounded-lg bg-gray-800 shadow-md">
            <Typography variant="h6" className="text-blue-400">
              Savings: {savings.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="text-blue-500">
              Groceries: {groceries.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="text-blue-600">
              Utilities: {utilities.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="text-blue-700">
              Personal Expenses: {personalExpenses.toFixed(2)}
            </Typography>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default BudgetCalculator;
