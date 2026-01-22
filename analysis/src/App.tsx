import './App.css'
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function App() {
  // Survey Data
  const physicalActivityData = [
    { name: 'Very active', value: 24.7, color: '#4CAF50' },
    { name: 'Moderately active', value: 14.1, color: '#2196F3' },
    { name: 'Slightly active', value: 8, color: '#FFC107' },
    { name: 'Not active', value: 3.5, color: '#FF9800' },
    { name: 'Mostly active', value: 50, color: '#F44336' }
  ]

  const healthExpensesData = [
    { name: 'Yes', value: 64, color: '#2196F3' },
    { name: 'Somewhat', value: 28.4, color: '#FF9800' },
    { name: 'No', value: 7.4, color: '#E0E0E0' }
  ]

  const healthCostReductionData = [
    { name: 'Somewhat', value: 23.5, color: '#2196F3' },
    { name: 'Not sure', value: 54.9, color: '#F44336' },
    { name: 'Not idea', value: 21.6, color: '#FF9800' }
  ]

  const dailyRoutineData = [
    { name: 'Working (9-5 Sunday)', value: 92, color: '#2196F3' },
    { name: 'Not mentioned', value: 3.7, color: '#FF9800' },
    { name: 'Home maker', value: 1.8, color: '#FFC107' },
    { name: 'Other', value: 2.8, color: '#9C27B0' }
  ]

  const routineConsistencyData = [
    { name: 'Often', value: 19.6, color: '#4CAF50' },
    { name: 'Sometimes', value: 58.8, color: '#2196F3' },
    { name: 'Rarely', value: 13.7, color: '#FFC107' },
    { name: 'Never', value: 7.8, color: '#F44336' }
  ]

  const routineBreakersData = [
    { name: 'Lack of motivation', value: 43.8, color: '#2196F3' },
    { name: 'Forgetting', value: 28.7, color: '#9C27B0' },
    { name: 'No clear benefits', value: 10.8, color: '#FF9800' },
    { name: 'Stress or tiredness', value: 16.7, color: '#F44336' }
  ]

  const trackingData = [
    { name: 'None (intake)', value: 59, count: 59 },
    { name: 'Physical activity (fitness, walking)', value: 48, count: 48 },
    { name: 'Food or calories', value: 51, count: 51 },
    { name: 'Sleep', value: 70, count: 70 },
    { name: 'I don\'t track anything', value: 62, count: 62 }
  ]

  const longTermBenefitsData = [
    { name: 'Maybe', value: 33.2, color: '#FF9800' },
    { name: 'No', value: 2, color: '#F44336' },
    { name: 'Yes', value: 64.7, color: '#2196F3' }
  ]

  const rewardedEffortsData = [
    { name: 'Yes', value: 30.4, color: '#2196F3' },
    { name: 'Sometimes', value: 38.2, color: '#FF9800' },
    { name: 'No', value: 31.4, color: '#F44336' }
  ]

  const keyStats = [
    { label: 'Of people are moderate - not active on weekdays', value: '82%', color: '#6366F1' },
    { label: 'Are not working out due to busy schedules', value: '50%', color: '#EC4899' },
    { label: 'At least track single health related intake parameter in their life', value: '50%', color: '#8B5CF6' },
    { label: 'People were interested in healthy activities on long-term benefits', value: '65%', color: '#3B82F6' },
    { label: 'Are concerned about the future health expenses', value: '64%', color: '#10B981' }
  ]

  const competitors = [
    {
      name: 'GOQii',
      description: 'GOQii focuses on active coaching, scheduled goals',
      status: 'rejected'
    },
    {
      name: 'Fittr',
      description: 'Focuses on structured fitness classes, community workouts, and offline online wellness experiences.',
      status: 'rejected'
    },
    {
      name: 'Healthify',
      description: 'Focuses on calorie tracking and nutrition-driven weight management, but does not link healthy behavior to real-world incentives beyond the app.',
      status: 'rejected'
    },
    {
      name: 'Cult.fit',
      description: 'Focuses on structured fitness classes, community workouts, and offline online wellness experiences.',
      status: 'rejected'
    }
  ]

  const COLORS = ['#2196F3', '#FF9800', '#4CAF50', '#F44336', '#9C27B0', '#FFC107', '#E0E0E0']

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <h1>Health & Fitness Analysis</h1>
        <p>Understanding the gap between health aspirations and daily realities</p>
      </header>

      {/* Problem Statement */}
      <section className="problem-statement">
        <h2>Problem Statement</h2>
        <div className="problem-content">
          <p>
            Most people want to be healthy, but today's health and fitness systems demand strict routines, 
            constant motivation, (seems expensive) and lifestyle changes that don't fit <strong>real 9-5 jobs</strong> and{' '}
            <strong>family life</strong>. As a result, people either give up or spend more on reactive healthcare because{' '}
            <strong>health isn't designed to quietly work</strong> with their everyday routine. People also have skeptical thoughts 
            about the costs of medical insurance which they never use.
          </p>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="key-stats">
        <h2>Key Insights</h2>
        <div className="stats-grid">
          {keyStats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
              <div className="stat-value" style={{ color: stat.color }}>{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Survey Results */}
      <section className="survey-results">
        <h2>Survey Results Analysis</h2>
        <p className="survey-note">Based on responses from 162 participants</p>
        
        <div className="charts-grid">
          {/* Physical Activity */}
          <div className="chart-container">
            <h3>Physical Activity on Weekdays</h3>
            <p className="chart-subtitle">182 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={physicalActivityData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {physicalActivityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Health Expenses Concern */}
          <div className="chart-container">
            <h3>Concerned About Future Health Expenses</h3>
            <p className="chart-subtitle">189 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={healthExpensesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {healthExpensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Health Cost Reduction */}
          <div className="chart-container">
            <h3>Would Healthy Life Reduce Health Costs?</h3>
            <p className="chart-subtitle">189 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={healthCostReductionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {healthCostReductionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Daily Routine */}
          <div className="chart-container">
            <h3>Daily Routine Description</h3>
            <p className="chart-subtitle">189 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dailyRoutineData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dailyRoutineData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Routine Consistency */}
          <div className="chart-container">
            <h3>Consistency with Health Routines</h3>
            <p className="chart-subtitle">186 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={routineConsistencyData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {routineConsistencyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Routine Breakers */}
          <div className="chart-container">
            <h3>What Usually Breaks Your Health Routine?</h3>
            <p className="chart-subtitle">157 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={routineBreakersData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {routineBreakersData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Tracking Habits */}
          <div className="chart-container full-width">
            <h3>What Do You Currently Track?</h3>
            <p className="chart-subtitle">147 responses (Select all that apply)</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trackingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-15} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#6366F1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Long Term Benefits */}
          <div className="chart-container">
            <h3>More Consistent with Clear Long-term Benefits?</h3>
            <p className="chart-subtitle">187 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={longTermBenefitsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {longTermBenefitsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Rewarded Efforts */}
          <div className="chart-container">
            <h3>Feel Daily Healthy Efforts Are Noticed or Rewarded?</h3>
            <p className="chart-subtitle">189 responses</p>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={rewardedEffortsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {rewardedEffortsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="data-collection">
        <h2>Collected Data</h2>
        <div className="collection-grid">
          <div className="collection-card">
            <div className="icon">👥</div>
            <h3>The custom analysis</h3>
            <p>The questionnaire of general theme</p>
          </div>
          <div className="collection-card">
            <div className="icon">🎥</div>
            <h3>Videos collected</h3>
            <p>The questionnaire of general theme of stakeholders</p>
          </div>
          <div className="collection-card">
            <div className="icon">🎤</div>
            <h3>Audio's Collected</h3>
            <p>The audio of conversation with the health professionals</p>
          </div>
          <div className="collection-card">
            <div className="icon">📊</div>
            <h3>Form Data</h3>
            <p>In the form every data and analysis is given</p>
          </div>
          <div className="collection-card">
            <div className="icon">🔗</div>
            <h3>Evidence Link</h3>
            <p>In the form every data and analysis is given</p>
          </div>
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="competitors">
        <h2>Competitor Analysis</h2>
        <p className="section-subtitle">162 people agree that health insurance should be related to health state</p>
        <p className="section-subtitle">132 people workouts or other health based activities came to stall due to busy schedules and stress (unwanted motivation)</p>
        
        <div className="competitors-grid">
          {competitors.map((competitor, index) => (
            <div key={index} className="competitor-card">
              <div className="competitor-header">
                <h3>{competitor.name}</h3>
                <span className="status-badge">{competitor.status === 'rejected' ? '❌' : '✅'}</span>
              </div>
              <p>{competitor.description}</p>
            </div>
          ))}
        </div>

        <div className="stakeholder-issues">
          <div className="issue-card">
            <h3>🏢 Insurance Agencies</h3>
            <ul>
              <li>False insurance claims on the diseases</li>
              <li>Increasing cost on the insurance causes client lose</li>
            </ul>
          </div>
          <div className="issue-card">
            <h3>👨‍⚕️ Doctors</h3>
            <ul>
              <li>Patient data is not completely accurate which causes false diagnosis</li>
              <li>Patient previous medical records and health records are misunderstood</li>
            </ul>
          </div>
          <div className="issue-card">
            <h3>👤 Consumers</h3>
            <ul>
              <li>No real-time data analysis available to see</li>
              <li>Active routine is hard to follow</li>
              <li>Insurance amounts are high, which are almost never claimed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Health & Fitness Analysis © 2026</p>
      </footer>
    </div>
  )
}

export default App
