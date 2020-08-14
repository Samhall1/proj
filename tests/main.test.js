const Person = require("../src/person");

test('Person name is Gary', () => {
  const p = new Person('Gary', 24);
  expect(p.name).toBe('Gary');
});

test('Person age is 24', () => {
  const p = new Person('Gary', 24);
  expect(p.age).toBe(24);
});

test('Person can vote', () => {
  const p = new Person('Gary', 24);
  expect(p.canVote()).toBe(true);
});

test('Person is active', () => {
  const p = new Person('Gary', 24);
  p.exercise();
  p.exercise();
  p.exercise();
  expect(p.isActive()).toBe(true);
});

test('Person is reading', () => {
  const p = new Person('Gary', 24);
  p.readBook("Structure and Implementation of Computer Programs");
  p.readBook("The Little Schemer");
  p.readBook("Let Over Lambda");
  expect(p.isAvidReader()).toBe(true);
});
