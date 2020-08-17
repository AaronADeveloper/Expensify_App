import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("newId", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "newId",
    updates: {
      note: "new note value",
    },
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 98888,
    createdAt: 1000,
    notes: "last months rent",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("should setup add expense object with default values", () => {
  const expenseData = {
    description: " ",
    amount: 0,
    createdAt: 0,
    notes: " ",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
