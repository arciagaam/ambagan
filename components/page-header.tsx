import React from 'react'

type PageHeaderProps = {
    title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
    return (
        <div className="flex flex-col p-4 gap-5">

            <h1 className="text-2xl font-bold leading-none">{title}</h1>

            <hr />
        </div>
    )
}

export { PageHeader }