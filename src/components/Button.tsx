type ButtonTypeProps = {
    title: string
    onClickHandler?: () => void
}

export const Button = ({title, onClickHandler}: ButtonTypeProps) => {
    return(
        <button onClick={onClickHandler}>{title}</button>
    )
}

