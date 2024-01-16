'use client'

export default function Error ({error}: {error:Error} ){
    return (
        <div className="wrapPage">
            <h1>
                Ouuuups! Error is {error.message}
            </h1>
        </div>
    )

}