import * as React from "react"
import { AppState } from '../features/redux/state/appState'
import { withStyles, WithStyles, withTheme } from '@material-ui/core/styles'
import { connect } from "react-redux"
import { selectNumberAction, selectedNumberAction, selectValueAction, openDialogBoxAction } from '../features/redux/action/dashboard'
import { SelectValidator, ValidatorForm } from 'react-material-ui-form-validator'
import MenuItem from '@material-ui/core/MenuItem'
import ProductImageGallery from '../components/imageGallery/imageGallery'
import Button from '@material-ui/core/Button'
import SelectionDialogBox from '../components/dialogBox/selectionDialogBox'
import Typography from '@material-ui/core/Typography'
interface dashBoardProps {
  selection?: any
  dispatch?: any
}
const styles = theme => ({
  formControl: {
    width: '-webkit-fill-available'
  },
  button: {
    margin: theme.spacing.unit,
  }
});
type PropsWithStyles = WithStyles<'formControl' | 'button'>

class UserDashBoard extends React.Component<PropsWithStyles & dashBoardProps>{
  componentDidMount() {
    this.props.dispatch(selectNumberAction())
  }
  handleSelection = event => {
    this.props.dispatch(selectValueAction(event.target.value))
    this.props.dispatch(selectedNumberAction(event.target.value))
  }
  handleClickOpenRequestDialogBox = () => {
    this.props.dispatch(openDialogBoxAction(true))
  }
  handleOnCloseDialogBox = () => {
    this.props.dispatch(openDialogBoxAction(false))
  }
  handleDialogBoxContent = () => {
    return (this.props.selection.selected || []).map(e => e).join(', ')
  }
  render() {
    const { selectNumber, selectValue, openDialogBox } = this.props.selection
    const selectValueData = (selectNumber || []).map((e, i) => {
      return <MenuItem key={i} value={e.id}>{e.id}</MenuItem>
    })
    const data = (selectNumber || []).filter((e, i) => selectValue && selectValue && i < selectValue)
      .map(e => { return ({ original: e.img, thumbnail: e.img }) })
    return (
      <div>
        <div className="pa4 flex">
          <SelectionDialogBox
            openDialogBox={openDialogBox}
            Title='Your Total Selected Numbers from Select Box.'
            onClose={this.handleOnCloseDialogBox}
            Content={this.handleDialogBoxContent()}
          />
          <div className="w-40 pa2">
            <ValidatorForm>
              <SelectValidator
                id="selectValue"
                label="Select Number"
                name="selectValue"
                className={this.props.classes.formControl}
                value={selectValue || ''}
                onChange={this.handleSelection}
              >
                {selectValueData}
              </SelectValidator>
            </ValidatorForm>
          </div>
          <div className="w-60 pa2">
            {selectValue ? <ProductImageGallery
              items={data} /> : <Typography variant='h4'>Select a Number From Select Box</Typography>}
            {selectValue ? <Button type="submit"
              onClick={this.handleClickOpenRequestDialogBox}
              variant="contained"
              color="primary"
              className={this.props.classes.button}>Finish</Button> : ''}
          </div>
        </div>
      </div>
    )
  }
}
function mapStatetoProps(state: AppState) {
  return {
    selection: state.selectNumberDATA
  }
}
export default connect(mapStatetoProps)(withStyles(styles, { withTheme: true })(UserDashBoard))