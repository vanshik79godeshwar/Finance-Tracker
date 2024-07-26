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
        <Paper elevation={3} className="calculator-container">
          <Typography variant="h4" gutterBottom>
            Budget Calculator
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Monthly Salary"
                type="number"
                fullWidth
                variant="outlined"
                value={income}
                onChange={handleIncomeChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Rent"
                type="number"
                fullWidth
                variant="outlined"
                value={rent}
                onChange={handleRentChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="EMI"
                type="number"
                fullWidth
                variant="outlined"
                value={emi}
                onChange={handleEmiChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => console.log('Calculate EMI button clicked!')}
              >
                Calculate EMI
              </Button>
            </Grid>
          </Grid>
          <div className="values">
            <Typography variant="h6">Savings: {savings.toFixed(2)}</Typography>
            <Typography variant="h6">Groceries: {groceries.toFixed(2)}</Typography>
            <Typography variant="h6">Utilities: {utilities.toFixed(2)}</Typography>
            <Typography variant="h6">Personal Expenses: {personalExpenses.toFixed(2)}</Typography>
          </div>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default BudgetCalculator;
