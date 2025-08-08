import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Clock, DollarSign, TrendingUp, Sparkles, ArrowRight, Info, Trophy, Zap, Target, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function RoiCalculator() {
  const [activeMode, setActiveMode] = useState<'time' | 'cost' | 'efficiency'>('time');
  const [inputs, setInputs] = useState({
    teamSize: 5,
    hoursPerWeek: 10,
    hourlyWage: 25,
    automationPercentage: 70,
    taskTimeBefore: 2,
    taskTimeAfter: 0.5,
    taskFrequency: 50
  });
  const [results, setResults] = useState({
    timeSaved: 0,
    costSaved: 0,
    efficiencyGain: 0
  });
  const [achievements, setAchievements] = useState<string[]>([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const modes = [
    { 
      id: 'time', 
      label: 'Time Saved', 
      icon: Clock, 
      color: 'from-primary to-primary/80',
      activeColor: 'from-primary to-primary/80'
    },
    { 
      id: 'cost', 
      label: 'Cost Saved', 
      icon: DollarSign, 
      color: 'from-secondary to-secondary/80',
      activeColor: 'from-secondary to-secondary/80'
    },
    { 
      id: 'efficiency', 
      label: 'Efficiency Gain', 
      icon: TrendingUp, 
      color: 'from-primary/80 to-secondary/80',
      activeColor: 'from-primary/80 to-secondary/80'
    }
  ];

  // Achievement thresholds
  const achievementThresholds = {
    time: { bronze: 1000, silver: 2000, gold: 5000 },
    cost: { bronze: 50000, silver: 100000, gold: 250000 },
    efficiency: { bronze: 50, silver: 75, gold: 90 }
  };

  // Calculate results based on inputs
  useEffect(() => {
    const calculations = {
      timeSaved: inputs.teamSize * inputs.hoursPerWeek * (inputs.automationPercentage / 100) * 52,
      costSaved: inputs.teamSize * inputs.hoursPerWeek * inputs.hourlyWage * (inputs.automationPercentage / 100) * 52,
      efficiencyGain: ((inputs.taskTimeBefore - inputs.taskTimeAfter) / inputs.taskTimeBefore) * 100
    };
    setResults(calculations);
    
    // Check for achievements
    checkAchievements(calculations);
  }, [inputs]);

  const checkAchievements = (newResults: any) => {
    const newAchievements: string[] = [];
    
    // Time achievements
    if (newResults.timeSaved >= achievementThresholds.time.gold) {
      newAchievements.push('⏰ Time Master');
    } else if (newResults.timeSaved >= achievementThresholds.time.silver) {
      newAchievements.push('⏰ Time Saver');
    } else if (newResults.timeSaved >= achievementThresholds.time.bronze) {
      newAchievements.push('⏰ Time Starter');
    }
    
    // Cost achievements
    if (newResults.costSaved >= achievementThresholds.cost.gold) {
      newAchievements.push('💰 Money Master');
    } else if (newResults.costSaved >= achievementThresholds.cost.silver) {
      newAchievements.push('💰 Money Saver');
    } else if (newResults.costSaved >= achievementThresholds.cost.bronze) {
      newAchievements.push('💰 Money Starter');
    }
    
    // Efficiency achievements
    if (newResults.efficiencyGain >= achievementThresholds.efficiency.gold) {
      newAchievements.push('⚡ Efficiency Master');
    } else if (newResults.efficiencyGain >= achievementThresholds.efficiency.silver) {
      newAchievements.push('⚡ Efficiency Pro');
    } else if (newResults.efficiencyGain >= achievementThresholds.efficiency.bronze) {
      newAchievements.push('⚡ Efficiency Starter');
    }

    // Check if we have new achievements
    const hasNewAchievements = newAchievements.some(achievement => !achievements.includes(achievement));
    if (hasNewAchievements) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    setAchievements(newAchievements);
  };

  const formatGBP = (num: number) => {
    if (num >= 1000000) return `£${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `£${(num / 1000).toFixed(0)}K`;
    return new Intl.NumberFormat('en-GB', { 
      style: 'currency', 
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatTime = (hours: number) => {
    if (hours >= 8760) return `${(hours / 8760).toFixed(1)} years`;
    if (hours >= 168) return `${(hours / 168).toFixed(0)} weeks`;
    if (hours >= 24) return `${(hours / 24).toFixed(0)} days`;
    return `${hours.toFixed(0)} hours`;
  };

  // Check if results exceed thresholds for dynamic CTA
  const showDynamicCTA = () => {
    return results.costSaved > 25000 || results.timeSaved > 1680; // £25K or >10 weeks
  };

  // Progress bar calculation
  const getProgressPercentage = (value: number, mode: string) => {
    const thresholds = achievementThresholds[mode as keyof typeof achievementThresholds];
    const maxValue = thresholds.gold;
    return Math.min((value / maxValue) * 100, 100);
  };

  // Confetti component
  const Confetti = () => (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -10,
            opacity: 1,
          }}
          animate={{
            y: window.innerHeight + 10,
            opacity: 0,
          }}
          transition={{
            duration: 3,
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      {showConfetti && <Confetti />}
      
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Automation ROI Explorer
            </h2>
          </div>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            Discover the real impact automation could have on your business. 
            Calculate time savings, cost reductions, and efficiency gains in seconds.
          </p>
        </motion.div>

        {/* Mode Selector */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-card p-2 rounded-xl border border-primary/20 shadow-lg">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => setActiveMode(mode.id as any)}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeMode === mode.id
                    ? 'text-white shadow-lg'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {activeMode === mode.id && (
                  <motion.div
                    layoutId="activeMode"
                    className={`absolute inset-0 bg-gradient-to-r ${mode.activeColor} rounded-lg`}
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <mode.icon className="h-5 w-5" />
                  {mode.label}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Input Panel */}
          <motion.div
            key={activeMode}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-xl border border-primary/20 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">
              {activeMode === 'time' && 'Calculate Time Savings'}
              {activeMode === 'cost' && 'Calculate Cost Savings'}
              {activeMode === 'efficiency' && 'Calculate Efficiency Gains'}
            </h3>

            <div className="space-y-6">
              {activeMode === 'time' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Team Size
                    </label>
                    <input
                      type="number"
                      value={inputs.teamSize}
                      onChange={(e) => setInputs({...inputs, teamSize: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Hours per Employee per Week on Repetitive Tasks
                    </label>
                    <input
                      type="number"
                      value={inputs.hoursPerWeek}
                      onChange={(e) => setInputs({...inputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Automation Percentage
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={inputs.automationPercentage}
                      onChange={(e) => setInputs({...inputs, automationPercentage: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-secondary mt-1">
                      <span>10%</span>
                      <span>{inputs.automationPercentage}%</span>
                      <span>90%</span>
                    </div>
                  </div>
                </>
              )}

              {activeMode === 'cost' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Team Size
                    </label>
                    <input
                      type="number"
                      value={inputs.teamSize}
                      onChange={(e) => setInputs({...inputs, teamSize: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Average Hourly Wage (£)
                    </label>
                    <input
                      type="number"
                      value={inputs.hourlyWage}
                      onChange={(e) => setInputs({...inputs, hourlyWage: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Hours per Week on Repetitive Tasks
                    </label>
                    <input
                      type="number"
                      value={inputs.hoursPerWeek}
                      onChange={(e) => setInputs({...inputs, hoursPerWeek: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Automation Percentage
                    </label>
                    <input
                      type="range"
                      min="10"
                      max="90"
                      value={inputs.automationPercentage}
                      onChange={(e) => setInputs({...inputs, automationPercentage: parseInt(e.target.value)})}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-secondary mt-1">
                      <span>10%</span>
                      <span>{inputs.automationPercentage}%</span>
                      <span>90%</span>
                    </div>
                  </div>
                </>
              )}

              {activeMode === 'efficiency' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Current Task Time (hours)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.taskTimeBefore}
                      onChange={(e) => setInputs({...inputs, taskTimeBefore: parseFloat(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Automated Task Time (hours)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.taskTimeAfter}
                      onChange={(e) => setInputs({...inputs, taskTimeAfter: parseFloat(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">
                      Tasks per Week
                    </label>
                    <input
                      type="number"
                      value={inputs.taskFrequency}
                      onChange={(e) => setInputs({...inputs, taskFrequency: parseInt(e.target.value) || 0})}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-primary focus:ring-2 focus:ring-primary focus:border-transparent text-center"
                      min="0"
                    />
                  </div>
                </>
              )}
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            key={`results-${activeMode}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card p-8 rounded-xl border border-primary/20 shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-6 text-primary">Your Results</h3>
            
            <AnimatePresence mode="wait">
              {activeMode === 'time' && (
                <motion.div
                  key="time-results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <Clock className="h-16 w-16 text-primary mx-auto mb-4" />
                    <motion.div 
                      key={results.timeSaved}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      {formatTime(results.timeSaved)}
                    </motion.div>
                    <p className="text-secondary">saved annually</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-secondary mb-1">
                      <span>Bronze</span>
                      <span>Silver</span>
                      <span>Gold</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercentage(results.timeSaved, 'time')}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary">
                      That's equivalent to <span className="text-primary font-semibold">
                      {Math.round(results.timeSaved / 8)} working days</span> per year
                    </p>
                  </div>
                </motion.div>
              )}

              {activeMode === 'cost' && (
                <motion.div
                  key="cost-results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <DollarSign className="h-16 w-16 text-primary mx-auto mb-4" />
                    <motion.div 
                      key={results.costSaved}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      {formatGBP(results.costSaved)}
                    </motion.div>
                    <p className="text-secondary">saved annually</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-secondary mb-1">
                      <span>Bronze</span>
                      <span>Silver</span>
                      <span>Gold</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercentage(results.costSaved, 'cost')}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary">
                      That's <span className="text-primary font-semibold">
                      {formatGBP(results.costSaved / 12)}</span> per month in savings
                    </p>
                  </div>
                </motion.div>
              )}

              {activeMode === 'efficiency' && (
                <motion.div
                  key="efficiency-results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  <div className="mb-6">
                    <TrendingUp className="h-16 w-16 text-primary mx-auto mb-4" />
                    <motion.div 
                      key={results.efficiencyGain}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl font-bold text-primary mb-2"
                    >
                      {results.efficiencyGain.toFixed(0)}%
                    </motion.div>
                    <p className="text-secondary">efficiency improvement</p>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-secondary mb-1">
                      <span>Bronze</span>
                      <span>Silver</span>
                      <span>Gold</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${getProgressPercentage(results.efficiencyGain, 'efficiency')}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg">
                    <p className="text-sm text-secondary">
                      Tasks now take <span className="text-primary font-semibold">
                      {((inputs.taskTimeBefore - inputs.taskTimeAfter) / inputs.taskTimeBefore * 100).toFixed(0)}% less time</span>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Achievements */}
            {achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Achievements Unlocked!</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {achievements.map((achievement, index) => (
                    <motion.span
                      key={achievement}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary/20 text-primary text-xs rounded-full"
                    >
                      <Star className="h-3 w-3" />
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Dynamic CTA */}
            {showDynamicCTA() && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-6 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-primary/20"
              >
                <p className="text-sm font-medium text-primary">
                  🎉 Looks like you could save big want to see how?
                </p>
              </motion.div>
            )}

            {/* Disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 pt-4 border-t border-primary/10"
            >
              <div className="flex items-start gap-2 text-xs text-secondary/70">
                <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                  Disclaimer: These results are estimates based on assumed automation efficiency and user input. 
                  Actual savings may vary. For a detailed assessment, book a free audit.
                </p>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 pt-6 border-t border-primary/20"
            >
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="h-5 w-5 text-primary" />
                <p className="text-sm text-secondary">Want a detailed breakdown?</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                Book Free Automation Audit
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
