import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link } from "react-router-dom";

const MenuPosition = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    popUpBtn: {
      textDecoration: "none",
      color: "white",
      fontSize: 14,
    
      textTransform: "lowercase",
    },
    upperText: {
      textTransform: "uppercase",
    },
    link: {
      color: "black",
      fontSize: 14,
      textDecoration: "none",
    },
  };

  return (
    <div>
      <Button
        style={styles.popUpBtn}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <span style={styles.upperText}>C</span>ategoria
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
      
        <MenuItem>
          <Link to="/user-tipo/remera" style={styles.link}>
            Remera
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="user-tipo/pantalon" style={styles.link}>
            Pantalon
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/user-tipo/abrigo" style={styles.link}>
            Abrigo
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/user-tipo/pollera" style={styles.link}>
            Pollera
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuPosition;