// import { CloudIcon } from "../icons/cloud";
import { HackathonAltIcon } from '../icons/hackathon-alt';
import {
  DocumentsIcon,
  IntegrationsIcon,
  TutorialIcon,
  ExamplesIcon,
  AwesomeIcon,
  // UseCasesIcon,
  ContributeIcon,
  RefineWeekIcon,
  HackathonsIcon,
  AboutUsIcon,
  StoreIcon,
  MeetIcon,
  BlogIcon
} from '../icons/popover';

export type NavbarPopoverItemType = {
  isPopover: true;
  label: string;
  items: {
    label: string;
    description: string;
    link: string;
    icon: React.FC;
  }[];
};

export type NavbarItemType = {
  isPopover?: false;
  label: string;
  icon?: React.FC;
  href?: string;
};

export type MenuItemType = NavbarPopoverItemType | NavbarItemType;

export const MENU_ITEMS: MenuItemType[] = [
    {
        isPopover: true,
        label: '产品',
        items: [
          {
            label: 'Cloud',
            description: 'Everything you need to get started.',
            link: '/docs/faq',
            icon: ExamplesIcon
          },
          {
            label: '解决方案',
            description: 'Ready-made snippets for your projects.',
            link: '/docs/examples',
            icon: RefineWeekIcon
          },
          {
            label: 'On Premise',
            description: 'Everything you need to get started.',
            link: '/docs/faq',
            icon: HackathonsIcon
          },
          {
            label: '测试集',
            description: 'Ready-made snippets for your projects.',
            link: '/docs/faq',
            icon: ContributeIcon
          }
        ]
      },
  {
    isPopover: true,
    label: '资源',
    items: [
        {
          label: 'Tutorial',
          description: 'Create your first Refine application.',
          link: '/docs/',
          icon: TutorialIcon
        },
        {
          label: 'Integrations',
          description: 'Discover the Refine ecosystem.',
          link: '/integrations',
          icon: IntegrationsIcon
        },
      {
        label: 'Documentation',
        description: 'Everything you need to get started.',
        link: '/docs/',
        icon: DocumentsIcon
      },

      {
        label: '博客',
        description: 'Articles about web development.',
        link: '/blog',
        icon: BlogIcon
      }
    ]
  },
  {
    isPopover: false,
    label: "连接器",
    href:  "/integrations",
},
  {
    isPopover: false,
    label: 'Pricing',
    href: '/pricing'
  }
  /*    {
        isPopover: false,
        label: "Hackathon",
        icon: HackathonAltIcon,
        href: "https://s.refine.dev/hackathon2",
    }, */
];

