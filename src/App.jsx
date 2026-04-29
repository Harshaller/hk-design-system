import { useState } from 'react';
import { Sidebar } from './components/DesignSystem/Sidebar/Sidebar';
import { ColorsPalette } from './components/DesignSystem/ContentArea/ColorsPalette';
import { ColorsUsage } from './components/DesignSystem/ContentArea/ColorsUsage';
import { ColorsDataViz } from './components/DesignSystem/ContentArea/ColorsDataViz';
import { ColorsAccessibility } from './components/DesignSystem/ContentArea/ColorsAccessibility';
import { TypographyHeadings } from './components/DesignSystem/ContentArea/TypographyHeadings';
import { TypographyBodyText } from './components/DesignSystem/ContentArea/TypographyBodyText';
import { Buttons } from './components/DesignSystem/ContentArea/Buttons';
import { Dashboard } from './components/DesignSystem/ContentArea/Dashboard';
import { Spacing } from './components/DesignSystem/ContentArea/Spacing';
import { Layout } from './components/DesignSystem/ContentArea/Layout';
import { ThemeToggle } from './components/DesignSystem/ThemeToggle';
import { useTheme } from './hooks/useTheme';

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard'); // Default to Dashboard
  const { theme, toggleTheme } = useTheme();
  
  const renderContent = () => {
    switch(activeSection) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Colors-Palette':
        return <ColorsPalette />;
      case 'Colors-Usage':
        return <ColorsUsage />;
      case 'Colors-DataViz':
        return <ColorsDataViz />;
      case 'Colors-Accessibility':
        return <ColorsAccessibility />;
      case 'Typography-Headings':
        return <TypographyHeadings />;
      case 'Typography-BodyText':
        return <TypographyBodyText />;
      case 'Components-Buttons':
        return <Buttons />;
      case 'Spacing-Margin':
      case 'Spacing-Padding':
      case 'Spacing-Gap':
        return <Spacing activeSubSection={activeSection.split('-')[1]} />;
      case 'Layout-Grid':
      case 'Layout-Flexbox':
      case 'Layout-Container':
        return <Layout activeSubSection={activeSection.split('-')[1]} />;
      default:
        return <Dashboard />; // Fallback to Dashboard
    }
  };
  
  const getPageTitle = () => {
    const [section, subSection] = activeSection.split('-');
    return subSection ? `${section} - ${subSection}` : section;
  };
  
  return (
    <div className={`min-h-screen transition-colors ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex">
          <Sidebar 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
          
          <main className="flex-1 p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {getPageTitle()}
              </h1>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

