import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React from 'react';
import { BadgeTooltip } from '../badge-tooltip';

type Props = {
  id: string;
  icon: React.ReactNode;
  color: 'orange' | 'yellow' | 'blue' | 'cyan' | 'green' | 'indigo' | 'purple' | 'pink' | 'black';
  text?: string;
  description: React.ReactNode;
};

export const InfoBadge = ({ id, icon, color, text, description }: Props) => {
  const classes = clsx(
    color === 'orange' && 'bg-bluepipe-orange hover:ring-bluepipe-orange text-gray-0  hover:text-gray-0 ',
    color === 'yellow' && 'bg-bluepipe-yellow hover:ring-bluepipe-yellow text-gray-900  hover:text-gray-900 ',
    color === 'blue' && 'bg-bluepipe-blue hover:ring-bluepipe-blue text-gray-0  hover:text-gray-0 ',
    color === 'cyan' && 'bg-bluepipe-cyan hover:ring-bluepipe-cyan text-gray-0  hover:text-gray-0 ',
    color === 'green' && 'bg-bluepipe-green hover:ring-bluepipe-green text-gray-0  hover:text-gray-0 ',
    color === 'indigo' && 'bg-bluepipe-indigo hover:ring-bluepipe-indigo text-gray-0  hover:text-gray-0 ',
    color === 'purple' && 'bg-bluepipe-purple hover:ring-bluepipe-purple text-gray-0  hover:text-gray-0 ',
    color === 'pink' && 'bg-bluepipe-pink hover:ring-bluepipe-pink text-gray-900  hover:text-gray-900 ',
    color === 'black' && 'bg-gray-1000 hover:ring-bluepipe-gray-1000 text-gray-0  hover:text-gray-0 '
  );

  return (
    <BadgeTooltip content={description}>
      <Link
        to={`/docs/${id}`}
        className={clsx(
          'mr-1',
          'rounded',
          'py-1.5',
          'px-1.5',
          'inline-flex',
          'items-center',
          'justify-center',
          'text-sm',
          'no-underline',
          'gap-1.5',
          'hover:ring',
          'hover:ring-opacity-30',
          classes
        )}
      >
        {icon}
        {text && <span className="text-xs leading-[0.875rem]">{text}</span>}
      </Link>
    </BadgeTooltip>
  );
};

