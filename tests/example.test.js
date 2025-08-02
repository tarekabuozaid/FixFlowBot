/**
 * Example unit tests for FixFlowBot
 * This demonstrates basic Jest testing patterns
 */

// Example utility functions to test
const utils = {
  /**
   * Add two numbers
   * @param {number} a 
   * @param {number} b 
   * @returns {number}
   */
  add: (a, b) => a + b,

  /**
   * Check if a string is a valid email
   * @param {string} email 
   * @returns {boolean}
   */
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  /**
   * Format a date to YYYY-MM-DD
   * @param {Date} date 
   * @returns {string}
   */
  formatDate: (date) => {
    return date.toISOString().split('T')[0];
  }
};

// Tests
describe('Utils Functions', () => {
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(utils.add(2, 3)).toBe(5);
    });

    test('should handle negative numbers', () => {
      expect(utils.add(-1, 1)).toBe(0);
      expect(utils.add(-2, -3)).toBe(-5);
    });

    test('should handle decimal numbers', () => {
      expect(utils.add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('isValidEmail function', () => {
    test('should validate correct email formats', () => {
      expect(utils.isValidEmail('test@example.com')).toBe(true);
      expect(utils.isValidEmail('user.name@domain.co.uk')).toBe(true);
    });

    test('should reject invalid email formats', () => {
      expect(utils.isValidEmail('invalid-email')).toBe(false);
      expect(utils.isValidEmail('test@')).toBe(false);
      expect(utils.isValidEmail('@example.com')).toBe(false);
      expect(utils.isValidEmail('')).toBe(false);
    });
  });

  describe('formatDate function', () => {
    test('should format date correctly', () => {
      const date = new Date('2025-08-02T15:30:00.000Z');
      expect(utils.formatDate(date)).toBe('2025-08-02');
    });

    test('should handle different dates', () => {
      const date = new Date('2024-12-25T00:00:00.000Z');
      expect(utils.formatDate(date)).toBe('2024-12-25');
    });
  });
});

// Example test for async operations
describe('Async Operations', () => {
  test('should handle promises', async () => {
    const asyncFunction = () => Promise.resolve('success');
    
    const result = await asyncFunction();
    expect(result).toBe('success');
  });

  test('should handle timeouts', (done) => {
    setTimeout(() => {
      expect(true).toBe(true);
      done();
    }, 100);
  });
});

// Export utils for potential reuse
if (typeof module !== 'undefined' && module.exports) {
  module.exports = utils;
}
