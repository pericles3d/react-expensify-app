import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default test values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to amount', () => {
    const testState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(testState, { type: 'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const testText = 'test works';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: testText});
    expect(state.text).toBe(testText);
});

test('should set startDate filter', () => {
    const testStartDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: testStartDate});
    expect(state.startDate).toEqual(testStartDate);
});

test('should set endDate filter', () => {
    const testEndDate = moment();
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: testEndDate});
    expect(state.endDate).toEqual(testEndDate);
});