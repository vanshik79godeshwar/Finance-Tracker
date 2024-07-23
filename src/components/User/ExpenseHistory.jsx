import React from 'react';
import { useGlobalContext } from '../../context/GlobalContext';

function History() {
    const { transactionHistory } = useGlobalContext();

    const history = transactionHistory();

    return (
        <div className="flex flex-col h-96 gap-4 overflow-y-auto border-2 border-orange-500 p-4 rounded-lg content">
            <h2 className=" text-2xl font-thin flex justify-center m-4 text-white">Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div 
                        key={_id} 
                        className="opacity-80 border-2  shadow-md p-4 rounded-lg flex justify-between items-center"
                    >
                        <p className={type === 'expense' ? 'text-red-500' : 'text-green-500'}>
                            <span className=' font-mono'>{title}</span>
                        </p>
                        <p className={type === 'expense' ? 'text-red-500' : 'text-green-500'}>
                            {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default History;
