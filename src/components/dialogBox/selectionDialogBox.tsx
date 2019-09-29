import * as React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide'
interface Props {
	openDialogBox?: any
	Title?: any
	requestLabel?: any
	Content?: any
	onClose?: any
}

function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class SelectionDialogBox extends React.Component<Props> {

	handleCloseDialogBox = () => {
		this.props.onClose()
	}
	render() {
		const { openDialogBox, Title, Content, onClose } = this.props

		return (
			<div>
				<Dialog
					disableBackdropClick={true}
					open={openDialogBox}
					TransitionComponent={Transition}
					keepMounted
					onClose={this.handleCloseDialogBox}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>
					<DialogTitle id="alert-dialog-title">{Title}
						<IconButton aria-label="Close" onClick={onClose}>
							<CloseIcon />
						</IconButton></DialogTitle>
					<DialogContent>
						<DialogContentText id="alert-dialog-description">
							{Content}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
					</DialogActions>
				</Dialog>
			</div>
		)
	}
}

export default SelectionDialogBox