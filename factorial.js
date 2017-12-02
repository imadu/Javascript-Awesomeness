function factorial(n){
	if (n > 18) {
		throw new Error("cannot generate factorial for numbers greater than 18");
	} else if(n < 0){
		throw new Error('n must be positive');
	}else if (n === 0) {
        return 1;
    }else if (typeof(n) !== 'number') {
		throw new Error ('input cannot be any other type than a number');
	} else if (n % 1 !== 0) {
		throw new Error('n cannot have decimals');
	}

	for (var i = n; --i;) {
		n *= i;
	}

	return n;
}

function test() {
    assert.shouldEqual(factorial(0), 1);
    assert.shouldEqual(factorial(1), 1);
    assert.shouldEqual(factorial(2), 2);
    assert.shouldEqual(factorial(6), 1);
    assert.shouldEqual(factorial(10), 3628800);
    assert.shouldEqual(factorial(10), 479001600);
    assert.shouldEqual(factorial(18), 6402373705728000);
    
    // Throw error for factorials greater than 18
    assert.shouldThrow(() => factorial(18));
    assert.shouldThrow(() => factorial(21));
    assert.shouldThrow(() => factorial(33));

    // Throw error for invalid input
    assert.shouldThrow(() => factorial('5'));
    assert.shouldThrow(() => factorial('15'));
    assert.shouldThrow(() => factorial(null));
    assert.shouldThrow(() => factorial());
    assert.shouldThrow(() => factorial({toString: () => '12'}));
    assert.shouldThrow(() => factorial({valueOf: () => 5}));
    assert.shouldThrow(() => factorial([12]));

    // Throw error on negative values
    assert.shouldThrow(() => factorial(-1));
    assert.shouldThrow(() => factorial(-10));
    assert.shouldThrow(() => factorial(-7));
    
    // Throw error on non-integers
    assert.shouldThrow(() => factorial(1.2));
    assert.shouldThrow(() => factorial(7.2));
    assert.shouldThrow(() => factorial(5.999999));
}

const assert = {
    shouldThrow(fn) {
        try {
            fn();
        } catch (e) {
            return;
        }
    
        throw new Error(`Expected function to throw error, but nothing was thrown`);
    },
    
    shouldEqual(a, b) {
        if (a !== b) {
            throw new Error(`Expected ${a} to be equal to ${b}`);
        }
    },
    
    shouldNotEqual(a, b) {
        if (a === b) {
            throw new Error(`Expected ${a} to NOT be equal to ${b}`);
        }
    },

    shouldBeTrue(a) {
        if (a !== true) {
            throw new Error(`Expected ${a} to be true, but it wasn't`);
        }
    },

    shouldBeFalse(a) {
        if (a !== false) {
            throw new Error(`Expected ${a} to be false, but it wasn't`);
        }
    },

    shouldBeOk(a) {
        if (!a) {
            throw new Error(`Expected ${a} to be ok, but it wasn't`);
        }
    },

    shouldNotBeOk(a) {
        if (!a) {
            throw new Error(`Expected ${a} to NOT be ok, but it was`);
        }
    },
}
