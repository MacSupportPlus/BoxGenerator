const BoxCard = props => {
    const {backgroundColor} = props;
    console.log(backgroundColor)

    return <div style={{ margin: 5, backgroundColor: backgroundColor ,height: "300px", width: "300px", bordercolor: "black"}}

    />
}

export default BoxCard;