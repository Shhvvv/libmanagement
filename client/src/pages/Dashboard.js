import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Button,
    Box,
} from '@mui/material';
import {
    Book,
    People,
    SwapHoriz,
    Assessment,
} from '@mui/icons-material';

const DashboardCard = ({ title, value, icon, color }) => (
    <Paper
        sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 140,
            bgcolor: color,
            color: 'white',
        }}
    >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {icon}
            <Typography component="p" variant="h4">
                {value}
            </Typography>
        </Box>
        <Typography component="h2" variant="h6" sx={{ mt: 2 }}>
            {title}
        </Typography>
    </Paper>
);

function Dashboard() {
    const { user } = useSelector(state => state.auth);

    const AdminDashboard = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Books Management
                    </Typography>
                    <Button
                        component={Link}
                        to="/books"
                        variant="contained"
                        color="primary"
                        sx={{ m: 1 }}
                    >
                        Manage Books
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        Categories
                    </Typography>
                    <Button
                        component={Link}
                        to="/categories"
                        variant="contained"
                        color="primary"
                        sx={{ m: 1 }}
                    >
                        Manage Categories
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        User Management
                    </Typography>
                    <Button
                        component={Link}
                        to="/users"
                        variant="contained"
                        color="primary"
                        sx={{ m: 1 }}
                    >
                        Manage Users
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );

    const UserDashboard = () => (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        My Books
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ m: 1 }}
                    >
                        View Books
                    </Button>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" gutterBottom>
                        My Transactions
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ m: 1 }}
                    >
                        View Transactions
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );

    // This would typically come from an API
    const stats = {
        totalBooks: 1250,
        totalMembers: 450,
        activeLoans: 125,
        overdueBooks: 15,
    };

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" sx={{ mb: 4 }}>
                Welcome, {user?.firstName} {user?.lastName}
            </Typography>
            {user?.role === 'admin' ? <AdminDashboard /> : <UserDashboard />}
            <Grid container spacing={3} sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardCard
                        title="Total Books"
                        value={stats.totalBooks}
                        icon={<Book sx={{ fontSize: 40 }} />}
                        color="#1976d2"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardCard
                        title="Total Members"
                        value={stats.totalMembers}
                        icon={<People sx={{ fontSize: 40 }} />}
                        color="#2e7d32"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardCard
                        title="Active Loans"
                        value={stats.activeLoans}
                        icon={<SwapHoriz sx={{ fontSize: 40 }} />}
                        color="#ed6c02"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <DashboardCard
                        title="Overdue Books"
                        value={stats.overdueBooks}
                        icon={<Assessment sx={{ fontSize: 40 }} />}
                        color="#d32f2f"
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Dashboard; 