// menuConfig.js
import { 
  SwatchIcon,
  DocumentTextIcon,
  CubeIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  EyeIcon,
  PaintBrushIcon,
  ArrowPathIcon,
  ArrowsPointingOutIcon,
  ViewColumnsIcon,
} from '@heroicons/react/24/solid';

export const menuItems = [
  { 
    id: 1, 
    name: 'Colors', 
    icon: SwatchIcon, 
    subsections: [
      { name: 'Palette', icon: SwatchIcon, section: 'Colors-Palette' },
      { name: 'Usage', icon: PaintBrushIcon, section: 'Colors-Usage' },
      { name: 'DataViz', icon: ChartBarIcon, section: 'Colors-DataViz' },
      { name: 'Accessibility', icon: EyeIcon, section: 'Colors-Accessibility' }
    ] 
  },
  { 
    id: 2, 
    name: 'Typography', 
    icon: DocumentTextIcon, 
    subsections: [
      { name: 'Headings', icon: DocumentTextIcon, section: 'Typography-Headings' },
      { name: 'Body Text', icon: DocumentTextIcon, section: 'Typography-BodyText' }
    ] 
  },
  { 
    id: 3, 
    name: 'Components', 
    icon: CubeIcon, 
    subsections: [
      { name: 'Buttons', icon: CubeIcon, section: 'Components-Buttons' },
    ] 
  },
  { 
    id: 4, 
    name: 'Spacing', 
    icon: ArrowsPointingOutIcon,
    subsections: [
      { name: 'Margin', icon: ArrowsPointingOutIcon, section: 'Spacing-Margin' },
      { name: 'Padding', icon: ArrowsPointingOutIcon, section: 'Spacing-Padding' },
      { name: 'Gap', icon: ArrowsPointingOutIcon, section: 'Spacing-Gap' }
    ] 
  },
  { 
    id: 5, 
    name: 'Layout', 
    icon: ViewColumnsIcon,
    subsections: [
      { name: 'Grid', icon: ViewColumnsIcon, section: 'Layout-Grid' },
      { name: 'Flexbox', icon: ViewColumnsIcon, section: 'Layout-Flexbox' },
      { name: 'Container', icon: ViewColumnsIcon, section: 'Layout-Container' }
    ] 
  }
];

// Quick access items (top of sidebar)
export const quickAccessItems = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: HomeIcon,
    section: 'Dashboard'
  }
];

// Bottom items (settings, documentation)
export const bottomItems = [
  {
    id: 'documentation',
    name: 'Documentation',
    icon: DocumentDuplicateIcon,
    badgeCount: 12,
    badgeColor: 'bg-purple-500',
    externalLink: '/docs'
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: Cog6ToothIcon,
    section: 'Settings'
  }
];

// Export all menu sections
export default {
  menuItems,
  quickAccessItems,
  bottomItems
};