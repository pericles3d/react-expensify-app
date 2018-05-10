import { addExpense, editExpense, removeExpense} from '../../actions/expenses';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

test('should setup remove expense test object', () => {
    const action = removeExpense({ id: '123ABC' });
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123ABC"
    });
});

test('should setup edit expense', () => {
    const action = editExpense('123abc', { note: "new note" });
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123abc",
        updates: {
            note: "new note"
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        note: 'This was last months rent',
        createdAt: 1000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});