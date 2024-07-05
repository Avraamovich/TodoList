type ButtonTypeProps = {
    title: string
    onClickHandler?: () => void
    className?: string
}

export const Button = ({title, onClickHandler, className}: ButtonTypeProps) => {
    return(
        <button onClick={onClickHandler} className={className}>{title}</button>
    )
}

