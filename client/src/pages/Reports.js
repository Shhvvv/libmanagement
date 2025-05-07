import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

// Mock data - replace with API calls
const mockStats = {
  totalBooks: 1250,
  totalMembers: 450,
  activeLoans: 125,
  overdueBooks: 15,
};

const mockPopularBooks = [
  { title: 'The Great Gatsby', borrowCount: 45 },
  { title: '1984', borrowCount: 38 },
  { title: 'To Kill a Mockingbird', borrowCount: 32 },
  { title: 'Pride and Prejudice', borrowCount: 28 },
  { title: 'The Catcher in the Rye', borrowCount: 25 },
];

const mockOverdueBooks = [
  { title: 'The Hobbit', member: 'John Doe', daysOverdue: 5 },
  { title: 'Lord of the Rings', member: 'Jane Smith', daysOverdue: 3 },
  { title: 'Dune', member: 'Bob Johnson', daysOverdue: 2 },
];

function Reports() {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Reports
      </Typography>

      <Grid container spacing={3}>
        {/* Summary Statistics */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Summary Statistics
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Total Books
                  </Typography>
                  <Typography variant="h4">{mockStats.totalBooks}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Total Members
                  </Typography>
                  <Typography variant="h4">{mockStats.totalMembers}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Active Loans
                  </Typography>
                  <Typography variant="h4">{mockStats.activeLoans}</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box>
                  <Typography variant="subtitle1" color="textSecondary">
                    Overdue Books
                  </Typography>
                  <Typography variant="h4" color="error">
                    {mockStats.overdueBooks}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Popular Books */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Most Popular Books
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell align="right">Times Borrowed</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockPopularBooks.map((book) => (
                    <TableRow key={book.title}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell align="right">{book.borrowCount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        {/* Overdue Books */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Overdue Books
            </Typography>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Title</TableCell>
                    <TableCell>Member</TableCell>
                    <TableCell align="right">Days Overdue</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {mockOverdueBooks.map((book) => (
                    <TableRow key={book.title}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.member}</TableCell>
                      <TableCell align="right" sx={{ color: 'error.main' }}>
                        {book.daysOverdue}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reports; 