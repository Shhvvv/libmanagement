import React from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    makeStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import {
    Book as BookIcon,
    Category as CategoryIcon,
    People as PeopleIcon,
    Settings as SettingsIcon
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(3),
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    listItem: {
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}));

const MaintenanceItem = ({ icon, primary, secondary, to }) => {
    const classes = useStyles();
    return (
        <Link to={to} className={classes.link}>
            <ListItem button className={classes.listItem}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={primary} secondary={secondary} />
            </ListItem>
        </Link>
    );
};

const Maintenance = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" className={classes.title}>
                System Maintenance
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>
                            Library Management
                        </Typography>
                        <List>
                            <MaintenanceItem
                                icon={<BookIcon />}
                                primary="Books Management"
                                secondary="Add, edit, or remove books from the library"
                                to="/books"
                            />
                            <Divider />
                            <MaintenanceItem
                                icon={<CategoryIcon />}
                                primary="Categories Management"
                                secondary="Manage book categories and classifications"
                                to="/categories"
                            />
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>
                            User Management
                        </Typography>
                        <List>
                            <MaintenanceItem
                                icon={<PeopleIcon />}
                                primary="User Accounts"
                                secondary="Manage user accounts and permissions"
                                to="/users"
                            />
                            <Divider />
                            <MaintenanceItem
                                icon={<SettingsIcon />}
                                primary="System Settings"
                                secondary="Configure system parameters and settings"
                                to="/settings"
                            />
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Maintenance; 