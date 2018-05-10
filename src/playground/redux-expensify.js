import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT BY AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//SORT BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//SET START DATE
const setStartDate = (startDate) => ({  //No need to startdate = undefined because it is the default.
    type: 'SET_START_DATE',
    startDate
});

//SET END DATE
const setEndDate = (endDate) => ({  //No need to enddate = undefined because it is the default.
    type: 'SET_END_DATE',
    endDate
});

//Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
            // return state.filter((expense) => {
            //     return expense.id !== action.id;
            // })
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense; //Do nothing
                };
            });
        default: 
            return state;
    }
};


//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};


//Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
    // console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
const expenseThree = store.dispatch(addExpense({ description: 'Banana', amount: 50, createdAt: -5000 }));
// console.log(expenseOne);

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-999));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));
// store.dispatch(setEndDate());

const demoState = {
    expenses: [{
        id: 'hjhjkh',
        description: 'January Rent',
        note: 'This was my final payment.',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }

};
