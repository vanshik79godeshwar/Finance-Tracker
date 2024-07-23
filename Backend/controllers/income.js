const IncomeSchema = require("../Models/IncomeModel");

// Add income
exports.addIncome = async (req, res) => {
    const userId = req.user.id; // Correctly accessing the id field
    const { title, amount, category, description, date } = req.body;

    console.log(req.body);
    if (!title || !category || !description || !date) {
        console.log('All fields are required!');
        return res.status(400).json({ message: 'All fields are required!' });
    }

    if (amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        user: userId // Ensure this uses the id field correctly
    });

    console.log("from add-income", income);
    try {
        await income.save();
        console.log('Income Added');
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        console.error('Error adding income:', error); // Detailed error logging
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


// Get incomes
exports.getIncomes = async (req, res) => {
    const userId = req.user ? req.user.id : null;
    console.log('getIncomes userId:', userId);

    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing!' });
    }

    try {
        const incomes = await IncomeSchema.find({ user: userId }).sort({ createdAt: -1 });
        console.log('Fetched incomes:', incomes);
        res.status(200).json(incomes);
    } catch (error) {
        console.error('Error fetching incomes:', error);
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


// Delete income
exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    const userId = req.user ? req.user.id : null; // Ensure we're accessing the id correctly
    console.log("deleteIncome function id:", id);
    console.log("deleteIncome function userId:", userId);

    if (!userId) {
        return res.status(400).json({ message: 'User ID is missing!' });
    }

    try {
        const income = await IncomeSchema.findOneAndDelete({ _id: id, user: userId });
        if (!income) {
            return res.status(404).json({ message: 'Income not found' });
        }
        console.log("Income deleted:", income);
        res.status(200).json({ message: 'Income Deleted' });
    } catch (err) {
        console.error("Error deleting income:", err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

