import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

interface Props {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavigationDrawer = ({ drawerOpen, setDrawerOpen }: Props) => {
  const classes = useStyles();
  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    setDrawerOpen(open);
  };

  return (
    <div>
      <React.Fragment>
        <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button>
                {/* <ListItemText primary={`Buy & Hold`} /> */}
                <Link
                  to="/buy-and-hold"
                  style={{ textDecoration: "none", color: "inherit" }}
                >{`Buy & Hold`}</Link>
                {/* </ListItemText> */}
                <Button></Button>
              </ListItem>
            </List>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default NavigationDrawer;
