export function updateInputValue(e) {
	this.setState({ [e.target.id]: e.target.value });
}