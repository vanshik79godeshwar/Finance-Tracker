const ExpenseSchema = require("../Models/ExpenseModel");

// Add expense
exports.addExpense = async (req, res) => {
    const userId = req.user ? req.user.id : null; // Correctly accessing the id field
    const { title, amount, category, description, date } = req.body;

    console.log(req.body);
    if (!title || !category || !description || !date) {
        console.log('All fields are required!');
        return res.status(400).json({ message: 'All fields are required!' });
    }

    if (amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    const expense = new ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
        user: userId // Ensure this uses the id field correctly
    });

    console.log("from add-expense", expense);
    try {
        await expense.save();
        console.log('Expense Added');
        res.status(200).json({ message: 'Expense Added' });
    } catch (error) {
        console.error('Error adding expense:', error); // Detailed error logging
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Get expenses
exports.getExpenses = async (req, res) => {
    const userId = req.user ? req.user.id : null;
    console.log('getExpenses userId:', userId);

    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing!' });
    }

    try {
        const expenses = await ExpenseSchema.find({ user: userId }).sort({ createdAt: -1 });
        console.log('Fetched expenses:', expenses);
        res.status(200).json(expenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// Delete expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null; // Ensure we're accessing the id correctly
    console.log("deleteExpense function id:", id);
    console.log("deleteExpense function userId:", userId);

    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing!' });
    }

    try {
        const expense = await ExpenseSchema.findOneAndDelete({ _id: id, user: userId });
        if (!expense) {
            return res.status(404).json({ message: 'Expense not found' });
        }
        console.log("Expense deleted:", expense);
        res.status(200).json({ message: 'Expense Deleted' });
    } catch (err) {
        console.error("Error deleting expense:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};
