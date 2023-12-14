import { useDoc } from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import React from 'react';
// import { useDocTOCwithTutorial } from "../components/tutorial-toc/index";
import { useHistory, useLocation } from '@docusaurus/router';

export const TOCItem = ({
  id,
  value,
  level,
  activeId,
  onIdChange
}: {
  id: string;
  value: string;
  level: number;
  activeId: string;
  onIdChange?: (id: string) => void;
}) => {
  React.useEffect(() => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              onIdChange(id);
            }
          });
        },
        {
          rootMargin: '0px 0px -80% 0px'
        }
      );

      observer.observe(targetElement);

      return () => {
        observer.unobserve(targetElement);
      };
    }
  }, [id]);

  return (
    <a
      href={`#${id}`}
      className={clsx(
        'bluepipe-toc-item',
        level === 2 && 'pl-3',
        level === 3 && 'pl-7',
        level === 4 && 'pl-11',
        level === 5 && 'pl-11',
        'py-1 pr-3',
        'hover:bg-gray-200/40 ',
        activeId === id &&
          ` text-gray-900 hover:text-gray-900 
                    bg-gray-100/50 
                    `,
        activeId !== id &&
          ` text-gray-500 hover:text-gray-900 
                      bg-opacity-0 
                    `,
        'hover:!text-gray-900 ',
        'rounded-lg',
        'transition-colors duration-200 ease-in-out',
        'block',
        'text-sm',
        'leading-6',
        'no-underline hover:no-underline'
      )}
      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  );
};

export const DocTOC = () => {
  const location = useLocation();
  const history = useHistory();

  const { toc, hasTOC, activeId, setActiveId } = useTOC();

  const onIdChange = id => {
    if (id !== `${location.hash ?? ''}`.replace('#', '')) {
      setActiveId(id);
      // history.replace({
      //     ...location,
      //     hash: `#${id}`,
      // });
      window.history.replaceState({}, '', `#${id}`);
    }
  };

  return (
    <div
      className={clsx(
        'hidden xl:block',
        'w-full',
        'sticky right-0 top-[80px]',
        'max-w-[280px]',
        'overflow-auto',
        'h-[calc(100vh-80px)]',
        'pl-3',
        'pr-3',
        'py-2',
        'border-l border-l-gray-100 ',
        !hasTOC && 'invisible'
      )}
    >
      <ul>
        {toc
          .filter(item => item.level < 5)
          .map(item => {
            return (
              <li key={item.id}>
                <TOCItem
                  id={item.id}
                  value={item.value}
                  activeId={activeId}
                  level={item.level}
                  onIdChange={onIdChange}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const useTOC = () => {
  const { hash } = useLocation();

  const baseActiveId = `${hash}`.replace('#', '');

  const [activeId, setActiveId] = React.useState<string | undefined>(baseActiveId);

  React.useEffect(() => {
    setActiveId(baseActiveId);
  }, [baseActiveId]);

  // const docTOC = useDocTOCwithTutorial();
  const { toc } = useDoc();

  const hasTOC = toc?.length > 0;

  return {
    toc,
    activeId,
    setActiveId,
    hasTOC
  };
};

