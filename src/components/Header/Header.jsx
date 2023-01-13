import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  logo: {
    width: 100,
    padding: "1em",
  },
});

export const Header = () => {
  const classes = useStyles();

  const logo =
    "https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";

  return (
    <div>
      <img src={logo} alt={logo} className={classes.logo} />
    </div>
  );
};
