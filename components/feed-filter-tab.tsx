import clsx from 'clsx'
import React from 'react'

export const FeedFilterTab = (): JSX.Element => {
  const shallowLinks = [
    {
      label: 'All',
      filter: 'all'
    },
    {
      label: 'Following',
      filter: 'following'
    },
    {
      label: 'Newest',
      filter: 'newest'
    },
    {
      label: 'Popular',
      filter: 'popular'
    }
  ]

  return (
    <ul
      className={clsx(
        'inline-flex items-center gap-x-6 font-semibold',
        ' text-secondary-100 flex-wrap gap-y-2 text-sm'
      )}
    >
      {shallowLinks.map((link) => (
        <li key={link.filter}>
          <button
            type="button"
            className={clsx(
              'outline-none transition duration-75 ease-in-out',
              link.filter === 'all' ? 'text-primary' : 'hover:text-secondary-300'
            )}
          >
            {link.label}
          </button>
        </li>
      ))}
    </ul>
  )
}
