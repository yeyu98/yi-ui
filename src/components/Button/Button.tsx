// 类型btnType: Primary Default  Danger Link
// 大小Size: Small Large Normal
import React from 'React';
import classnames from 'classnames';

const enum ButtonSize {
    Small = 'sm',
    Large = 'lg'
}

const enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string,
    btnType?: ButtonType,
    size?: ButtonSize,
    disabled?: boolean,
    href?: string,
    children?: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        className,
        btnType,
        size,
        disabled,
        href,
        children
    } = props

    const buttonClass = classnames('btn', className, {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: (btnType === ButtonType.Link) && disabled
    })

    // 这里的link可以定义  大小以及类型吗？ 
    if(btnType === ButtonType.Link && href) {
        return <>
            <a  
                className={buttonClass}
                href={href}
            >{children}</a>
        </>
    } else {
        return <>
            <button  
                className={buttonClass}
                disabled={disabled}
            >{children}</button>
        </>
    }
}