import {
  CircularProgress,
  Button as MuiButton,
  ButtonProps
} from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  loading?: boolean;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  loading = false,
  ...rest
}) => {
  return (
    <MuiButton {...rest}>
      {loading ? <CircularProgress color="inherit" size="2rem" /> : children}
    </MuiButton>
  );
};

export default Button;
