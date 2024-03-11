export const Input = (props: any) => {
    return (
        <div className="content-fields">
            <h2>{props.dispayName}</h2>
            <input
                onChange={(e) => {
                    props.updateData(e.target)
                }}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                autoComplete='current-password'
                name={props.name}/>
        </div>
    );
};