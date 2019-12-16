const sum = function(a, b) {
    return a + b;
};

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(3, 2)).toBe(5);
});
