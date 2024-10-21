import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function Tag({ permalink, label, isActive }) {
  return (
    <Link
      href={permalink}
      className={clsx(
        'no-underline hover:no-underline',
        'text-xs',
        !isActive && 'bg-gray-100 ',
        !isActive && 'text-gray-600 ',
        'rounded',
        'py-1',
        'px-2',
        isActive && 'bg-gray-200 text-gray-500',
        isActive && 'dark-bg-gray-700 text-gray-300'
      )}
    >
      {label}
    </Link>
  );
}

