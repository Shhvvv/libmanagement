import React, { useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Chip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

// Mock data - replace with API call
const mockTransactions = [
  {
    id: 1,
    bookTitle: 'The Great Gatsby',
    memberName: 'John Doe',
    issueDate: '2024-03-01',
    dueDate: '2024-03-15',
    status: 'Borrowed',
  },
  {
    id: 2,
    bookTitle: '1984',
    memberName: 'Jane Smith',
    issueDate: '2024-02-15',
    dueDate: '2024-03-01',
    status: 'Overdue',
  },
  {
    id: 3,
    bookTitle: 'To Kill a Mockingbird',
    memberName: 'Bob Johnson',
    issueDate: '2024-02-28',
    dueDate: '2024-03-14',
    status: 'Returned',
  },
  // Add more mock data as needed
];

function Transactions() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Borrowed':
        return 'primary';
      case 'Returned':
        return 'success';
      case 'Overdue':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Transactions
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {/* Handle add transaction */}}
        >
          New Transaction
        </Button>
      </Box>
      
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Book Title</TableCell>
                <TableCell>Member Name</TableCell>
                <TableCell>Issue Date</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockTransactions
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.bookTitle}</TableCell>
                    <TableCell>{transaction.memberName}</TableCell>
                    <TableCell>{transaction.issueDate}</TableCell>
                    <TableCell>{transaction.dueDate}</TableCell>
                    <TableCell>
                      <Chip
                        label={transaction.status}
                        color={getStatusColor(transaction.status)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={mockTransactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default Transactions; 