import { useState, useEffect } from 'react';
import { Shield, CheckCircle, Search, FileText, Settings, Info, Menu, X, ChevronRight, Eye, Lock, Layers } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'Focus Areas', id: 'focus' },
    { name: 'Control Evaluation', id: 'evaluation' },
    { name: 'Active Evaluations', id: 'active' },
    { name: 'Methodology', id: 'methodology' },
    { name: 'Access & Scope', id: 'access' },
    { name: 'About', id: 'about' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 group"
            >
              <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-purple-600 group-hover:text-purple-700 transition-colors" />
              <span className="text-xl sm:text-2xl font-semibold text-gray-900 tracking-tight">Assurix</span>
            </button>

            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="pt-16 sm:pt-20">
        {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
        {currentPage === 'focus' && <FocusAreasPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'evaluation' && <EvaluationPage />}
        {currentPage === 'active' && <ActiveEvaluationsPage />}
        {currentPage === 'methodology' && <MethodologyPage />}
        {currentPage === 'access' && <AccessScopePage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

function HomePage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <div className="animate-fadeIn">
      <section className="relative bg-gradient-to-b from-white to-gray-50 pt-12 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 text-purple-700 text-sm font-medium mb-6 sm:mb-8 animate-slideDown">
              <Shield className="h-4 w-4 mr-2" />
              Independent Evaluation Initiative
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 tracking-tight animate-slideUp leading-tight">
              Evaluating how user controls and safeguards are presented
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Assurix examines how limits, controls, and safety features are surfaced and explained within regulated digital platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <button
                onClick={() => setCurrentPage('focus')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-sm hover:shadow-md"
              >
                Explore focus areas
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentPage('evaluation')}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm"
              >
                View evaluation approach
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Understanding control effectiveness</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              User safeguards are only effective if they are discoverable, understandable, and manageable. Assurix focuses on how platforms present responsible-use tools and ongoing account controls, with an emphasis on clarity and accessibility.
            </p>
            <p className="text-base text-gray-500 mt-4 font-medium">
              Our work is observational and evaluative, not prescriptive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: Settings,
                title: 'Responsible-use tools',
                description: 'How safety and self-management features are presented to users'
              },
              {
                icon: Search,
                title: 'Control discoverability',
                description: 'Assessment of how easily users can locate available controls'
              },
              {
                icon: Layers,
                title: 'Limit setting interfaces',
                description: 'Evaluation of configuration, adjustment, and communication workflows'
              },
              {
                icon: Lock,
                title: 'Ongoing account management',
                description: 'Analysis of how controls are maintained and revisited over time'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 sm:p-8 rounded-xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-purple-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-10 w-10 sm:h-12 sm:w-12 text-purple-600 mb-4 sm:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 mb-6">
                <Eye className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our approach</h2>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4">
                    Assurix provides a neutral oversight lens that examines how guardrails are presented and maintained within digital platforms. We focus on the usability and clarity of safety mechanisms without pushing an agenda.
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                    We are not a regulator, advocacy organization, compliance body, or consumer help service. Our evaluations are structured, independent, and designed to illuminate how control systems function in practice.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100">
                <button
                  onClick={() => setCurrentPage('methodology')}
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium group"
                >
                  Learn about our methodology
                  <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FocusAreasPage({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  const areas = [
    {
      title: 'Responsible-Use Tools',
      description: 'Evaluation of how safety and self-management tools are presented to users.',
      details: [
        'Visibility and placement within user interfaces',
        'Clarity of labeling and terminology',
        'Contextual explanations and help text',
        'Integration with primary user flows',
        'Consistency across different access points'
      ]
    },
    {
      title: 'Control Discoverability',
      description: 'Assessment of how easily users can locate and access available controls.',
      details: [
        'Navigation paths to control settings',
        'Search and filtering capabilities',
        'Visual prominence and signaling',
        'Progressive disclosure patterns',
        'Help and documentation accessibility'
      ]
    },
    {
      title: 'Limit Setting UX',
      description: 'Review of how limits are configured, adjusted, and communicated.',
      details: [
        'Available limit types and granularity',
        'Configuration workflow clarity',
        'Adjustment and modification processes',
        'Feedback and confirmation states',
        'Error handling and validation',
        'Temporary vs. permanent limit options'
      ]
    },
    {
      title: 'Ongoing Account Management',
      description: 'Analysis of how controls are maintained and revisited over time.',
      details: [
        'Periodic review prompts and reminders',
        'Change history and audit trails',
        'Bulk management capabilities',
        'Export and backup functionality',
        'Account lifecycle transitions',
        'Recovery and restoration options'
      ]
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Focus Areas</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Assurix evaluates specific aspects of control presentation and management within digital platforms. Our focus areas represent the key dimensions through which user safeguards are experienced.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 sm:p-10 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-100"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{area.title}</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">{area.description}</p>

                <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-100">
                  <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wide">Evaluation dimensions</h3>
                  <ul className="space-y-3">
                    {area.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center">
            <p className="text-gray-600 mb-6">Ready to explore our evaluation methodology?</p>
            <button
              onClick={() => setCurrentPage('evaluation')}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-sm"
            >
              View evaluation approach
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function EvaluationPage() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Control Evaluation</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Assurix applies structured analysis to understand how control systems are presented, explained, and managed within digital platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Evaluation Scope</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Each evaluation focuses on defined control categories and user interaction points. We examine the complete lifecycle of control presentation, from initial discovery through ongoing management.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Account registration flows',
                    'Settings and preferences',
                    'In-context control prompts',
                    'Notification management',
                    'Data and privacy controls',
                    'Time and usage limits',
                    'Content filtering options',
                    'Account modification workflows'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-gray-100">
                      <div className="h-2 w-2 bg-purple-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm sm:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Presentation Analysis</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Language Clarity',
                    description: 'Assessment of terminology, tone, and comprehensibility of control descriptions and instructions.',
                    points: [
                      'Use of plain language vs. technical jargon',
                      'Consistency of terminology across interfaces',
                      'Clarity of consequences and impacts',
                      'Reading level appropriateness'
                    ]
                  },
                  {
                    title: 'Placement Within Interfaces',
                    description: 'Evaluation of where controls appear in relation to primary user flows and decisions.',
                    points: [
                      'Proximity to relevant actions',
                      'Visual hierarchy and prominence',
                      'Timing of presentation',
                      'Integration vs. separation from main flows'
                    ]
                  },
                  {
                    title: 'Relationship to Primary Actions',
                    description: 'Analysis of how control options relate to and influence primary platform functionality.',
                    points: [
                      'Pre-action vs. post-action positioning',
                      'Friction and ease of access',
                      'Default states and opt-in vs. opt-out patterns',
                      'Reversibility and modification options'
                    ]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                    <ul className="space-y-2">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contextual Explanation</h2>
              <div className="bg-purple-50 rounded-xl p-6 sm:p-8 border border-purple-100">
                <p className="text-gray-700 leading-relaxed mb-6">
                  We evaluate how systems explain the purpose, function, and impact of available controls to users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      title: 'Purpose of controls',
                      description: 'Why a control exists and what user need it addresses'
                    },
                    {
                      title: 'Consequences of changes',
                      description: 'What happens when a control is adjusted or activated'
                    },
                    {
                      title: 'Time-based effects',
                      description: 'Duration, expiration, and renewal of control settings'
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 border border-purple-100">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ActiveEvaluationsPage() {
  const evaluations = [
    {
      id: 'CP-031',
      focus: 'Limit setting flow',
      category: 'Regulated digital platform',
      status: 'In progress',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'Comprehensive analysis of time and spending limit configuration workflows, including setup, modification, and override processes.',
      initiated: 'January 2026',
      estimatedCompletion: 'Q2 2026'
    },
    {
      id: 'CP-032',
      focus: 'Control visibility during account use',
      category: 'Digital service',
      status: 'Reviewing',
      statusColor: 'text-amber-700 bg-amber-50 border-amber-200',
      description: 'Evaluation of how control options are surfaced during active user sessions, including in-context prompts and persistent access mechanisms.',
      initiated: 'December 2025',
      estimatedCompletion: 'Q1 2026'
    },
    {
      id: 'CP-033',
      focus: 'Responsible gambling tool accessibility',
      category: 'Online gaming platform',
      status: 'In progress',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      description: 'Assessment of self-exclusion, deposit limits, and reality check features across multiple access points and device types.',
      initiated: 'February 2026',
      estimatedCompletion: 'Q2 2026'
    }
  ];

  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Active Evaluations</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Evaluations are conducted on a rolling basis. Each assessment follows our standardized methodology to ensure consistency and comparability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <Info className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Evaluation transparency</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Active evaluations represent ongoing work to assess control presentation and usability. Status indicators reflect the current phase of analysis. Full evaluation outputs are prepared following completion of structured review processes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {evaluations.map((evaluation, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 hover:border-purple-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl font-bold text-gray-900">{evaluation.id}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${evaluation.statusColor}`}>
                        {evaluation.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">{evaluation.focus}</h3>
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{evaluation.category}</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">{evaluation.description}</p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">Initiated</span>
                    <p className="text-sm text-gray-900 mt-1">{evaluation.initiated}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wide text-gray-500 font-medium">Est. completion</span>
                    <p className="text-sm text-gray-900 mt-1">{evaluation.estimatedCompletion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Evaluation pipeline</h3>
            <p className="text-gray-600 mb-4">
              Assurix maintains a structured pipeline of evaluations across different platform types and control categories. Our selection prioritizes areas where control presentation has significant user impact.
            </p>
            <p className="text-sm text-gray-500">
              Completed evaluations are documented and made available according to scope and category limitations. See Access & Scope for more information.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function MethodologyPage() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Methodology</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Assurix applies a structured, observational approach to evaluate how control systems are presented and managed within digital platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Observational Approach</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Assurix applies structured observation of control interfaces and flows. Our methodology emphasizes documentation and clarity assessment without behavioral inference or user scoring.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Direct interface examination</h4>
                    <p className="text-gray-600 text-sm">
                      We document control presentation as it appears to users across different access points, devices, and account states.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Flow and workflow analysis</h4>
                    <p className="text-gray-600 text-sm">
                      We trace the steps required to discover, configure, and modify control settings from multiple entry points.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Language and clarity review</h4>
                    <p className="text-gray-600 text-sm">
                      We assess the terminology, explanations, and contextual information provided to users.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Consistency</h2>
              <div className="bg-purple-50 rounded-xl p-6 sm:p-8 border border-purple-100">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Evaluations follow a standardized structure to support comparison across platforms and over time. Each evaluation applies the same framework to ensure methodological consistency.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Defined evaluation dimensions',
                    'Consistent documentation format',
                    'Standardized terminology',
                    'Repeatable observation protocols',
                    'Structured output templates',
                    'Version-controlled frameworks'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg border border-purple-100">
                      <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Evaluation Outputs</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Control Mapping',
                    description: 'Comprehensive documentation of available controls, their locations, and access paths.',
                    icon: Layers
                  },
                  {
                    title: 'Observed Clarity Notes',
                    description: 'Assessment of language, explanations, and contextual information provided to users.',
                    icon: FileText
                  },
                  {
                    title: 'Interface Documentation',
                    description: 'Structured capture of control presentation across different states and user journeys.',
                    icon: Eye
                  }
                ].map((output, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-purple-100 transition-colors">
                    <div className="flex items-start space-x-4">
                      <output.icon className="h-8 w-8 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{output.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{output.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do Not Do</h2>
              <div className="bg-red-50 rounded-xl p-6 sm:p-8 border border-red-100">
                <ul className="space-y-3">
                  {[
                    'Apply behavioral inference or predictive modeling',
                    'Score or rank platforms',
                    'Make recommendations or prescribe solutions',
                    'Assess regulatory compliance',
                    'Evaluate effectiveness through user outcomes',
                    'Provide enforcement or oversight functions'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <X className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AccessScopePage() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Access & Scope</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Understanding the availability and limitations of Assurix evaluations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Availability</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Some evaluation materials may be limited by scope or category. Availability depends on the nature of the platform evaluated and any applicable restrictions.
                </p>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Public summaries</h4>
                    <p className="text-gray-600 text-sm">
                      High-level findings and observations may be made available for completed evaluations where no restrictions apply.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Detailed documentation</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive evaluation outputs, including control mapping and interface documentation, may be provided to authorized parties.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Restricted materials</h4>
                    <p className="text-gray-600 text-sm">
                      Some evaluations may involve sensitive platform details that limit public distribution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Scope Boundaries</h2>
              <div className="bg-purple-50 rounded-xl p-6 sm:p-8 border border-purple-100">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Assurix evaluations focus specifically on control presentation and management interfaces. Our scope is intentionally limited to ensure clear, focused analysis.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                      Within scope
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Control interface design and placement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Language and explanation clarity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Discovery and access workflows</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Configuration and modification processes</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ongoing management capabilities</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <X className="h-5 w-5 text-red-600 mr-2" />
                      Outside scope
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Behavioral outcomes or effectiveness</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Regulatory compliance assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Technical implementation details</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Business model or revenue analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Comparative rankings or scoring</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Limitations</h2>
              <div className="bg-amber-50 rounded-xl p-6 sm:p-8 border border-amber-100">
                <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                  Assurix does not:
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Provide guidance or recommendations',
                      description: 'Our work is observational. We document what exists but do not prescribe what should be done.'
                    },
                    {
                      title: 'Assess compliance or enforcement',
                      description: 'We are not a regulatory body and do not evaluate adherence to legal or regulatory requirements.'
                    },
                    {
                      title: 'Replace regulatory oversight',
                      description: 'Assurix evaluations supplement but do not substitute for official oversight mechanisms.'
                    },
                    {
                      title: 'Offer consumer support services',
                      description: 'We do not provide assistance with individual account issues or platform-specific questions.'
                    }
                  ].map((item, index) => (
                    <li key={index} className="bg-white rounded-lg p-6 border border-amber-100">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Intended Use</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  Assurix evaluations are intended to provide structured observation and documentation of control presentation practices. They may be useful to policymakers, researchers, platform operators, and other parties interested in understanding how control systems are communicated and managed. Our outputs are informational in nature and should not be interpreted as endorsements, criticisms, or compliance determinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="animate-fadeIn">
      <section className="bg-gradient-to-b from-purple-50 to-white pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About Assurix</h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              An independent initiative examining how user controls and safeguards are presented within regulated digital environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Purpose</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  Assurix exists to examine how user controls and safeguards are surfaced within regulated digital environments. We focus on the presentation, clarity, and manageability of control systems.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective safeguards require more than technical implementation—they must be discoverable, understandable, and accessible to the users they are designed to protect. Assurix applies structured observation to evaluate these dimensions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our work aims to illuminate how control systems function in practice, providing documentation that can inform policy discussions, platform development, and research initiatives.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Independence</h2>
              <div className="bg-purple-50 rounded-xl p-6 sm:p-8 border border-purple-100">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Assurix operates independently and does not promote or discourage platform use. We maintain a neutral stance focused on observation and documentation rather than advocacy or enforcement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">No commercial affiliations</h4>
                    <p className="text-gray-600 text-sm">
                      We do not accept funding from platforms under evaluation or their competitors.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Methodological consistency</h4>
                    <p className="text-gray-600 text-sm">
                      All evaluations follow the same structured approach regardless of platform type or size.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Transparent limitations</h4>
                    <p className="text-gray-600 text-sm">
                      We clearly communicate the scope and boundaries of our work.
                    </p>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-purple-100">
                    <h4 className="font-semibold text-gray-900 mb-2">Observational focus</h4>
                    <p className="text-gray-600 text-sm">
                      We document what exists without prescribing solutions or making policy recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Are Not</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Not a regulator',
                    description: 'We do not have enforcement authority or assess regulatory compliance.'
                  },
                  {
                    title: 'Not an advocacy organization',
                    description: 'We do not campaign for specific policy positions or platform changes.'
                  },
                  {
                    title: 'Not a compliance or enforcement body',
                    description: 'We do not certify platforms or provide compliance validation.'
                  },
                  {
                    title: 'Not a consumer help service',
                    description: 'We do not assist with individual user issues or platform-specific support requests.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:border-purple-100 transition-colors">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Principles</h2>
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-gray-100">
                <ul className="space-y-4">
                  {[
                    'Structured observation over subjective judgment',
                    'Clarity and accessibility as evaluation priorities',
                    'Consistent methodology across all evaluations',
                    'Transparent communication of scope and limitations',
                    'Independence from commercial and advocacy interests',
                    'Documentation that supports informed discussion'
                  ].map((principle, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-base sm:text-lg">{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ setCurrentPage }: { setCurrentPage: (page: string) => void }) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-purple-400" />
              <span className="text-xl font-semibold text-white">Assurix</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Independent evaluation of user controls and safeguards within regulated digital platforms.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Evaluations</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('focus')} className="text-gray-400 hover:text-white transition-colors">
                  Focus Areas
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('evaluation')} className="text-gray-400 hover:text-white transition-colors">
                  Control Evaluation
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('active')} className="text-gray-400 hover:text-white transition-colors">
                  Active Evaluations
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('methodology')} className="text-gray-400 hover:text-white transition-colors">
                  Methodology
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => setCurrentPage('about')} className="text-gray-400 hover:text-white transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentPage('access')} className="text-gray-400 hover:text-white transition-colors">
                  Access & Scope
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Assurix provides informational evaluation of user controls and safeguards.
              <br className="hidden sm:block" />
              Content does not constitute regulatory, legal, or compliance advice.
            </p>
            <p className="text-gray-500 text-sm">
              © 2026 Assurix. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;