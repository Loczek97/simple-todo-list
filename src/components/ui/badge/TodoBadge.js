import React from 'react'

/***
 * @param {string} type - type of badge (priority, standard)
 * @param {string} children - text inside badge
 * @returns {JSX.Element}
 * @example
 * <Badge type="priority">priorytetowe</Badge>
 * <Badge type="standard">standardowe</Badge>
 */
export default function TodoBadge({ type, children }) {
    console.log(type)

    const switchType = () => {
        switch (type) {
            case 'priority':
                return 'bg-red-500'
            case 'standard':
                return 'bg-blue-500'
            default:
                return 'bg-blue-500'
        }
    }

    return (
        <div className={`badge ${switchType()} border-none outline-none text-white`}>{children}</div>
    )
}
