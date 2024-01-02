// UserFeedbackView.js
import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
    display: "flex",
    justifyContent: "center",
  },
  feedbackList: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SalesCounter = () => {
  const classes = useStyles();
  const [feedbackList, setFeedbackList] = useState([
    { id: 1, user: "John Doe", message: "Great service! Will use again." },
    {
      id: 2,
      user: "Jane Smith",
      message: "Excellent experience. Highly recommended.",
    },
    // Add more feedback items as needed
  ]);

  return (
    <Container component="main" maxWidth="md" className={classes.container}>
      <Typography variant="h4" align="center" gutterBottom>
        User Feedback
      </Typography>
      <List className={classes.feedbackList}>
        {feedbackList.map((feedback) => (
          <ListItem key={feedback.id}>
            <ListItemText
              primary={`${feedback.user}:`}
              secondary={feedback.message}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default SalesCounter;
