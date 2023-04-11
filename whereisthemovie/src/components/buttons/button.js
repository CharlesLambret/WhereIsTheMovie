
export default function BasicButton (props) {
    const {textebouton} = props;

    return (
        <button className="basic-button">
        <span className="basic-button__text">{textebouton}</span>
        </button>
    );
}