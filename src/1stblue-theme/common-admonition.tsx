import clsx from 'clsx';
import React from 'react';
import { CautionIcon } from './icons/caution';
import { CommandLineIcon } from './icons/command-line';
import { InfoIcon } from './icons/info';
import { TipIcon } from './icons/tip';
import { NoteIcon } from './icons/note';
import { GithubIcon } from './icons/github';

type Props = {
  type:
    | 'caution'
    | 'command-line'
    | 'sourcecode'
    | 'info'
    | 'tip'
    | 'note'
    | 'additional'
    | 'danger'
    | 'info-tip';
  title?: React.ReactNode;
  children: React.ReactNode;
};

const icons = {
  danger: CautionIcon,
  caution: CautionIcon,
  'command-line': CommandLineIcon,
  sourcecode: GithubIcon,
  info: InfoIcon,
  tip: TipIcon,
  note: NoteIcon,
  additional: NoteIcon,
  'info-tip': TipIcon
};

const colorTextClasses = {
  danger: 'text-bluepipe-red',
  caution: 'text-[#F2800D]',
  'command-line': 'text-bluepipe-purple',
  sourcecode: 'text-bluepipe-pink',
  info: 'text-bluepipe-blue',
  'info-tip': 'text-bluepipe-blue',
  tip: 'text-bluepipe-green',
  note: 'text-bluepipe-cyan',
  additional: 'text-bluepipe-cyan'
};

const colorWrapperClasses = {
  danger: 'bg-bluepipe-red bg-opacity-10 border-l-bluepipe-red',
  caution: 'bg-[#F2800D]/10   bg-opacity-10 border-l-bluepipe-orange',
  'command-line': 'bg-bluepipe-purple bg-opacity-10 border-l-bluepipe-purple',
  sourcecode: 'bg-bluepipe-pink bg-opacity-10 border-l-bluepipe-pink',
  info: 'bg-bluepipe-blue/10  bg-opacity-10   border-l-bluepipe-blue',
  'info-tip': 'bg-bluepipe-blue/10  bg-opacity-10   border-l-bluepipe-blue',
  tip: 'bg-bluepipe-green bg-opacity-10 border-l-bluepipe-green',
  note: 'bg-bluepipe-cyan bg-opacity-10 border-l-bluepipe-cyan',
  additional: 'bg-bluepipe-cyan bg-opacity-10 border-l-bluepipe-cyan'
};

const titles = {
  danger: 'DANGER',
  caution: 'CAUTION',
  'command-line': 'COMMAND LINE',
  sourcecode: 'SOURCE CODE',
  info: 'INFORMATION',
  tip: 'TIP',
  note: 'NOTE',
  additional: 'ADDITIONAL INFO',
  'info-tip': 'INFORMATION'
};

export const Admonition = ({ type, title, children }: Props) => {
  const Icon = icons[type] ?? (() => null);
  const clsText = colorTextClasses[type] ?? 'tex-inherit';
  const clsWrapper = colorWrapperClasses[type] ?? 'bg-inherit';

  return (
    <div className={clsx('rounded-lg', 'admonition', `admonition-${type}`, 'mb-6', clsWrapper)}>
      <div
        className={clsx(
          'border-l-4',
          'border-l-solid',
          'border-l-inherit',
          'rounded-tl-lg',
          'rounded-bl-lg',
          'p-4',
          'flex flex-col',
          'gap-2 sm:gap-4'
        )}
      >
        {(title || titles[type]) && (
          <div
            className={clsx(
              'flex',
              'items-center',
              'gap-2',
              'text-xs sm:text-base 2xl:text-base 2xl:leading-7',
              'font-semibold',
              clsText
            )}
          >
            <Icon />
            <span className="uppercase">{title ?? titles[type] ?? ''}</span>
          </div>
        )}
        <div className={clsx('text-gray-0', 'text-base', 'last:mb-0')}>{children}</div>
      </div>
    </div>
  );
};

