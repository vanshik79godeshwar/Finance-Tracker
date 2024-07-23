const IncomeSchema= require("../Models/IncomeModel")


exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date, user } = req.body;
    console.log(req.body);
    if (!title || !category || !description || !date || !user) {
        console.log('All fields are required!');
        
        return res.status(400).json({ message: 'All fields are required!' });
    }

    if (amount <= 0) {
        return res.status(400).json({ message: 'Amount must be a positive number!' });
    }

    const Income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date,
        user
    });
    console.log("from add-income",Income)
    try {
        await Income.save();
        console.log('Income Added')
        res.status(200).json({ message: 'Income Added' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


exports.getIncomes = async (req, res) =>{
    console.log('getIncomes')
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        console.log(incomes);
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message: 'Server Error'})
    }
}

exports.deleteIncome = async (req, res) =>{
    const {id} = req.params;
    console.log("deleteIncome function id:",id)
    IncomeSchema.findByIdAndDelete(id)
        .then((income) =>{
            res.status(200).json({message: 'Income Deleted'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Server Error'})
        })
}