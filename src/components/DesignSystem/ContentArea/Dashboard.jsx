// components/DesignSystem/ContentArea/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  HomeIcon,
  UsersIcon,
  ClockIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CubeIcon,
  SwatchIcon,
  ArrowTrendingUpIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  FireIcon,
  RocketLaunchIcon,
  EyeIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';
import ReactApexChart from 'react-apexcharts';

export function Dashboard() {
  const [timeRange, setTimeRange] = useState('month');
  const [theme, setTheme] = useState('light');
  
  // Detect theme from document or parent
  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    };
    
    updateTheme();
    
    // Create a MutationObserver to watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    return () => observer.disconnect();
  }, []);

  // Theme-aware colors
  const getChartColors = () => {
    return {
      textColor: theme === 'dark' ? '#E5E7EB' : '#374151',
      gridColor: theme === 'dark' ? '#374151' : '#E5E7EB',
      backgroundColor: theme === 'dark' ? '#1F2937' : '#FFFFFF'
    };
  };

  const colors = getChartColors();

  // Component Adoption Chart - Updated with theme support
  const adoptionChart = {
    series: [{
      name: 'Adoption Rate',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }],
    options: {
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false },
        toolbar: { show: false },
        background: 'transparent'
      },
      colors: ['#6366F1'],
      dataLabels: { enabled: false },
      stroke: { curve: 'smooth', width: 3 },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.2,
          stops: [0, 90, 100]
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: { 
          style: { 
            colors: colors.textColor,
            fontFamily: 'inherit'
          }
        },
        axisBorder: { show: false }
      },
      yaxis: {
        labels: { 
          style: { 
            colors: colors.textColor,
            fontFamily: 'inherit'
          },
          formatter: (val) => `${val}%`
        }
      },
      grid: { 
        borderColor: colors.gridColor,
        strokeDashArray: 4
      },
      tooltip: { 
        theme: theme,
        style: {
          fontFamily: 'inherit'
        }
      }
    }
  };

  // Component Usage Chart - Updated with theme support
  const usageChart = {
    series: [
      { name: 'Buttons', data: [44, 55, 41, 67, 22, 43] },
      { name: 'Inputs', data: [13, 23, 20, 8, 13, 27] },
      { name: 'Cards', data: [11, 17, 15, 15, 21, 14] },
      { name: 'Modals', data: [21, 7, 25, 13, 22, 8] }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: { show: false },
        background: 'transparent'
      },
      colors: ['#8B5CF6', '#10B981', '#3B82F6', '#F59E0B'],
      plotOptions: {
        bar: { 
          horizontal: false, 
          columnWidth: '55%', 
          borderRadius: 4,
          dataLabels: { position: 'top' }
        }
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          colors: [colors.textColor],
          fontFamily: 'inherit'
        }
      },
      xaxis: {
        categories: ['Project A', 'Project B', 'Project C', 'Project D', 'Project E', 'Project F'],
        labels: { 
          style: { 
            colors: colors.textColor,
            fontFamily: 'inherit'
          }
        },
        axisBorder: { show: false }
      },
      yaxis: {
        labels: { 
          style: { 
            colors: colors.textColor,
            fontFamily: 'inherit'
          },
          formatter: (val) => `${val}k`
        }
      },
      legend: { 
        position: 'top', 
        horizontalAlign: 'left',
        labels: {
          colors: colors.textColor,
          useSeriesColors: false
        }
      },
      grid: { 
        borderColor: colors.gridColor,
        strokeDashArray: 4
      },
      tooltip: { 
        theme: theme,
        style: {
          fontFamily: 'inherit'
        }
      }
    }
  };

  // Time Saved Chart - FIXED: Proper theme support for text
  const timeSavedChart = {
    series: [75],
    options: {
      chart: {
        type: 'radialBar',
        height: 350,
        background: 'transparent'
      },
      colors: ['#10B981'],
      plotOptions: {
        radialBar: {
          hollow: { 
            size: '70%',
            background: 'transparent'
          },
          track: {
            background: theme === 'dark' ? '#374151' : '#E5E7EB',
            strokeWidth: '100%'
          },
          dataLabels: {
            name: { 
              show: false 
            },
            value: {
              fontSize: '36px',
              fontWeight: 'bold',
              color: colors.textColor, // Dynamic color based on theme
              offsetY: 10,
              formatter: (val) => `${val}%`
            }
          }
        }
      },
      labels: ['Time Saved'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { height: 300 },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: { fontSize: '28px' }
              }
            }
          }
        }
      }]
    }
  };

  // KPI Cards Data
  const kpiCards = [
    {
      title: 'Active Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: <RocketLaunchIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      color: 'bg-blue-50 dark:bg-blue-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      description: 'Using design system'
    },
    {
      title: 'Components',
      value: '156',
      change: '+8 this month',
      trend: 'up',
      icon: <CubeIcon className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      color: 'bg-purple-50 dark:bg-purple-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      description: 'Total components'
    },
    {
      title: 'Designers',
      value: '18',
      change: '+3 new',
      trend: 'up',
      icon: <UsersIcon className="h-8 w-8 text-green-600 dark:text-green-400" />,
      color: 'bg-green-50 dark:bg-green-900/20',
      borderColor: 'border-green-200 dark:border-green-800',
      description: 'Active users'
    },
    {
      title: 'Time Saved',
      value: '340h',
      change: 'This month',
      trend: 'up',
      icon: <ClockIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />,
      color: 'bg-orange-50 dark:bg-orange-900/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      description: 'Development hours'
    }
  ];

  // Recent Activities
  const recentActivities = [
    {
      id: 1,
      title: 'New Component Added',
      description: 'Data Table component with sorting',
      project: 'Analytics Dashboard',
      time: '2 hours ago',
      icon: <SparklesIcon className="h-5 w-5 text-green-500 dark:text-green-400" />,
      type: 'addition'
    },
    {
      id: 2,
      title: 'Typography Updated',
      description: 'Added Body Text documentation',
      project: 'Design System',
      time: 'Yesterday',
      icon: <DocumentTextIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
      type: 'update'
    },
    {
      id: 3,
      title: 'Color Palette Extended',
      description: 'Added new accent colors',
      project: 'Brand Refresh',
      time: '2 days ago',
      icon: <SwatchIcon className="h-5 w-5 text-purple-500 dark:text-purple-400" />,
      type: 'update'
    },
    {
      id: 4,
      title: 'Usage Spike Detected',
      description: 'Button component usage increased 45%',
      project: 'All Projects',
      time: '3 days ago',
      icon: <FireIcon className="h-5 w-5 text-red-500 dark:text-red-400" />,
      type: 'trend'
    }
  ];

  // Top Used Components
  const topComponents = [
    { name: 'Button Variants', usage: 12450, change: '+12%', icon: <CubeIcon className="h-5 w-5 text-blue-500 dark:text-blue-400" /> },
    { name: 'Input Fields', usage: 9870, change: '+8%', icon: <CodeBracketIcon className="h-5 w-5 text-green-500 dark:text-green-400" /> },
    { name: 'Card Layouts', usage: 8450, change: '+15%', icon: <EyeIcon className="h-5 w-5 text-purple-500 dark:text-purple-400" /> },
    { name: 'Modal Dialogs', usage: 7230, change: '+5%', icon: <PuzzlePieceIcon className="h-5 w-5 text-orange-500 dark:text-orange-400" /> },
    { name: 'Navigation Bars', usage: 6540, change: '+20%', icon: <ArrowTrendingUpIcon className="h-5 w-5 text-red-500 dark:text-red-400" /> }
  ];

  // Project Adoption
  const projectAdoption = [
    { name: 'E-commerce Platform', adoption: 95, team: '12 members' },
    { name: 'Analytics Dashboard', adoption: 88, team: '8 members' },
    { name: 'Mobile App', adoption: 76, team: '6 members' },
    { name: 'Admin Portal', adoption: 92, team: '10 members' },
    { name: 'Marketing Site', adoption: 81, team: '5 members' }
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <HomeIcon className="h-10 w-10 text-primary-600 dark:text-primary-400" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Design System Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Monitor adoption, usage, and impact across all projects
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <span className="text-sm text-gray-600 dark:text-gray-400">Period:</span>
              <select 
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="bg-transparent border-none text-gray-900 dark:text-white focus:ring-0 cursor-pointer"
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="quarter">Last Quarter</option>
                <option value="year">Last Year</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiCards.map((card, index) => (
          <div key={index} className={`${card.color} ${card.borderColor} p-6 rounded-2xl border transition-colors duration-200`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{card.title}</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">{card.value}</p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                {card.icon}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">{card.description}</span>
              <span className={`text-sm font-medium ${card.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {card.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Adoption Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Adoption</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Growth over time</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <ArrowTrendingUpIcon className="h-4 w-4" />
              <span>+24% this month</span>
            </div>
          </div>
          <div className="text-gray-900 dark:text-white">
            <ReactApexChart 
              options={adoptionChart.options} 
              series={adoptionChart.series} 
              type="area" 
              height={350}
            />
          </div>
        </div>

        {/* Usage Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 transition-colors duration-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Component Usage</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Across projects (in thousands)</p>
            </div>
            <ChartBarIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="text-gray-900 dark:text-white">
            <ReactApexChart 
              options={usageChart.options} 
              series={usageChart.series} 
              type="bar" 
              height={350}
            />
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Time Saved - FIXED radial chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 lg:col-span-1 transition-colors duration-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Development Efficiency</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Time saved using design system</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-gray-900 dark:text-white">
              <ReactApexChart 
                options={timeSavedChart.options} 
                series={timeSavedChart.series} 
                type="radialBar" 
                height={250}
              />
            </div>
            <div className="text-center mt-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Average reduction in development time per component
              </p>
            </div>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 lg:col-span-1 transition-colors duration-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activities</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Latest updates in the system</p>
            </div>
            <ClockIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900 dark:text-white">{activity.title}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{activity.description}</p>
                  <span className="inline-block mt-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-600">
                    {activity.project}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Components & Projects */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 lg:col-span-1 transition-colors duration-200">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Components</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Most used across all projects</p>
          </div>
          <div className="space-y-4">
            {topComponents.map((component, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
                <div className="flex items-center gap-3">
                  {component.icon}
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{component.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{component.usage.toLocaleString()} uses</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{component.change}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h4 className="font-medium text-gray-900 dark:text-white mb-4">Project Adoption Rate</h4>
            <div className="space-y-3">
              {projectAdoption.map((project, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700 dark:text-gray-300">{project.name}</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">{project.adoption}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.adoption}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.team}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-2xl text-white dark:from-blue-600 dark:to-blue-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Design Consistency</p>
              <p className="text-2xl font-bold mt-1">98%</p>
              <p className="text-sm opacity-80 mt-2">Across all projects</p>
            </div>
            <SparklesIcon className="h-12 w-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white dark:from-green-600 dark:to-green-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Team Satisfaction</p>
              <p className="text-2xl font-bold mt-1">4.8/5</p>
              <p className="text-sm opacity-80 mt-2">Based on surveys</p>
            </div>
            <UsersIcon className="h-12 w-12 opacity-80" />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-2xl text-white dark:from-purple-600 dark:to-purple-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Bug Reduction</p>
              <p className="text-2xl font-bold mt-1">62%</p>
              <p className="text-sm opacity-80 mt-2">Since implementation</p>
            </div>
            <ArrowTrendingUpIcon className="h-12 w-12 opacity-80" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;