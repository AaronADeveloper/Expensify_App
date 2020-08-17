import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[2].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("should not remove expenses if ID is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    desciption: "New expense",
    amount: "10000",
    createdAt: 100,
    note: "New note for new expense",
  };

  const action = {
    type: "ADD_EXPENSE",
    expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const amount = 1000000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("should not edit an expense", () => {
  const amount = 1000000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});