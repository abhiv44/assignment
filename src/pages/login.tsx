import * as React from "react";
import Paper from '@material-ui/core/Paper'
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AppState } from '../features/redux/state/appState'
import { connect } from "react-redux";
import { userAuth } from '../features/redux/action/userAuth'
const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  paperStyle: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit
  },
});
type PropsWithStyles = WithStyles<"paperStyle" | "textField" | "button">;

interface loginProps {
  user?: any
  dispatch?: any
  history?: any
}
class UserLogin extends React.Component<loginProps & PropsWithStyles>{
  state = {
    userName: '',
    password: '',
    openSnackbar: false
  }
  componentDidMount() {
    this.props.dispatch(userAuth())
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClose = () => {
    this.setState({ open: false });
  }
  handleSubmit = () => {
    const newSubmit = {
      username: this.state.userName,
      password: this.state.password
    }
    newSubmit.username === this.props.user.user.username && newSubmit.password === this.props.user.user.password ?
      this.props.history.push('/gallery') : console.log('Invalid Credentials')
  }

  render() {
    return (
      <div className="mw6-ns center mt3 pa2">
        <Paper className={this.props.classes.paperStyle} elevation={2}>
          <div className="tc mw8-ns center pt2">
            <Typography component="h2" variant="headline" gutterBottom>
              Login
          </Typography>
          </div>
          <div>
            <div className="mw6-ns center pa2">
              <ValidatorForm onSubmit={this.handleSubmit} noValidate autoComplete="off">
                <TextValidator
                  label='Enter your Username'
                  name="userName"
                  type="text"
                  className={this.props.classes.textField}
                  value={this.state.userName}
                  onChange={this.handleChange}
                  validators={['required']}
                  errorMessages={['email is required']}
                  margin="normal"
                  variant="outlined"
                />
                <TextValidator
                  label="Enter your Password"
                  name="password"
                  type="password"
                  className={this.props.classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange}
                  validators={['required']}
                  errorMessages={['password is required']}
                  margin="normal"
                  variant="outlined"
                />
                <Button type="submit" variant="contained" color="primary" className={this.props.classes.button}>
                  Login
        </Button>
              </ValidatorForm>

            </div>
          </div>
        </Paper>
      </div>

    )
  }
}
function mapStatetoProps(state: AppState) {
  return {
    user: state.userAuth
  }
}
export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(UserLogin))