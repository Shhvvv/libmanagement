const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

// @route   GET /api/reports/summary
// @desc    Get summary report
// @access  Private/Admin
router.get('/summary', protect, authorize('admin'), async (req, res) => {
    try {
        res.json({
            success: true,
            message: 'Summary report generated successfully'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/reports/transactions
// @desc    Get transactions report
// @access  Private/Admin
router.get('/transactions', protect, authorize('admin'), async (req, res) => {
    try {
        res.json({
            success: true,
            message: 'Transactions report generated successfully'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/reports/users
// @desc    Get users report
// @access  Private/Admin
router.get('/users', protect, authorize('admin'), async (req, res) => {
    try {
        res.json({
            success: true,
            message: 'Users report generated successfully'
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router; 