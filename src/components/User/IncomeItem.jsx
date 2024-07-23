import React from 'react';
import { dateFormat } from '../../utils/dateFormat';
import { bitcoin, book, calender, card, circle, clothing, comment, dollar, food, freelance, medical, money, piggy, stocks, takeaway, trash, tv, users, yt } from '../../utils/Icons';
import Button from '../Button';

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
  user
}) {
  const categoryIcon = () => {
    switch (category) {
      case 'salary':
        return money;
      case 'freelancing':
        return freelance;
      case 'investments':
        return stocks;
      case 'stocks':
        return users;
      case 'bitcoin':
        return bitcoin;
      case 'bank':
        return card;
      case 'youtube':
        return yt;
      case 'other':
        return piggy;
      default:
        return '';
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case 'education':
        return book;
      case 'groceries':
        return food;
      case 'health':
        return medical;
      case 'subscriptions':
        return tv;
      case 'takeaways':
        return takeaway;
      case 'clothing':
        return clothing;
      case 'travelling':
        return freelance;
      case 'other':
        return circle;
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center p-2 bg-White border border-gray-300 shadow rounded-3xl">
      <div className={`flex items-center text-5xl justify-center w-20 h-20 bg-A border-2 border-white rounded-2xl`}>
        {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>

      <div className="flex flex-col flex-1 ml-4">
        <h5 className=" font-mono text-lg font-bold relative  text-B">
          Title : {title}
          <span className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${indicatorColor}`} />
        </h5>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 text-zinc-700">
            <p className="flex items-center gap-2">
              {dollar} {amount}
            </p>
            <p className="flex items-center gap-2">
              {calender} {dateFormat(date)}
            </p>
            <p className="flex items-center gap-2">
              {comment} {description}
            </p>
          </div>
          <Button
            icon={trash}
            bPad="1rem"
            bg="bg-red-500 hover:bg-red-600 p-5 mb-5 rounded-full hover:shadow-lg transition-all ease-in-out"
            bRad="rounded"
            className="ml-auto  rounded"
            onClick={() => deleteItem(id, user)}
          />
        </div>
      </div>
    </div>
  );
}

export default IncomeItem;
