import React from 'react'
import clsx from 'clsx'

const Container = ({ children, className, id }) => {
    return (
        <div
            id={id}
            className={clsx(
                "w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-[160px] max-w-7xl",
                className
            )}
        >
            {children}
        </div>
    )
}

export default Container
