import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Grid, Paper, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
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
        <Paper elevation={3} className="budget-calculator-container">
          <Typography variant="h4" gutterBottom className="budget-typography-heading">
            Budget Calculator
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} className="budget-grid-item">
              <TextField
                label="Monthly Salary"
                type="number"
                fullWidth
                variant="outlined"
                value={income}
                onChange={handleIncomeChange}
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
              />
            </Grid>
            <Grid item xs={12} className="budget-grid-item">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="budget-button"
                onClick={() => console.log('Calculate EMI button clicked!')}
              >
                Calculate EMI
              </Button>
            </Grid>
          </Grid>
          <div className="budget-values">
            <Typography variant="h6" className="budget-typography-value">
              Savings: {savings.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="budget-typography-value">
              Groceries: {groceries.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="budget-typography-value">
              Utilities: {utilities.toFixed(2)}
            </Typography>
            <Typography variant="h6" className="budget-typography-value">
              Personal Expenses: {personalExpenses.toFixed(2)}
            </Typography>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default BudgetCalculator;
