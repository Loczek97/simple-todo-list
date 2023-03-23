import React from 'react'

/***
 * @param {string} additionalClass - additional class to badge
 * @param {string} children - content of badge
 * @param {string} padding - padding of badge (sm, md, lg, xl, 2xl)
 * @returns {JSX.Element}
 * @constructor
 * @example
 * <PrimaryBadge additionalClass='badge-success' padding='lg'>Hello World</PrimaryBadge>
 */
export default function PrimaryBadge({ additionalClass, children, padding }) {
    const switchPadding = () => {
        switch (padding) {
            case 'sm':
                return 'px-2 py-1'
            case 'md':
                return 'px-6 py-3'
            case 'lg':
                return 'px-9 py-4'
            case 'xl':
                return 'px-12 py-6'
            case '2xl':
                return 'px-16 py-8'
            default:
                return null
        }
    }

    return (
        <div className={`badge outline-none ${switchPadding()} shadow border-none ${additionalClass}`}>{children}</div>
    )
}
