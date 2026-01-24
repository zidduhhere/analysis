import React from "react";
import {
  Brain,
  Camera,
  Activity,
  Users,
  Utensils,
  Shield,
  Database,
  Wallet,
  CreditCard,
} from "lucide-react";

const HowSection: React.FC = () => {
  return (
    <section id="how" className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4 uppercase">
            How We're Doing This
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Hyphen is built as a{" "}
            <span className="text-white font-semibold">
              life-native health system
            </span>
            , not a traditional app. It works by understanding how you already
            live and translating that into meaningful health intelligence.
          </p>
        </div>

        <div className="space-y-16">
          {/* Alice AI */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center ring-2 ring-blue-500/20">
                      <Brain className="w-10 h-10 text-blue-400" />
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-zinc-400">
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Observes patterns & detects context</span>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Asks simple, relevant questions</span>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Learns your personal baseline</span>
                    </div>
                    <div className="flex items-center gap-3 bg-zinc-900 p-3 rounded-lg">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span>Explains in clear language</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                  01. Alice AI
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Your Proactive Health Assistant
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                At the center of Hyphen is{" "}
                <span className="text-white font-semibold">Alice</span>, our
                AI-based health assistant.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Alice does not behave like a chatbot or a coach. She observes
                patterns, detects context, and intervenes only when needed.
              </p>
              <div className="bg-zinc-950 border border-blue-500/20 rounded-xl p-4 text-sm text-zinc-300 italic">
                <span className="text-blue-400 font-semibold">Example:</span> If
                Alice notices time spent at a sports location, she confirms
                activity instead of assuming. If a meal image is uploaded, she
                analyzes it instead of asking for manual input.
              </div>
            </div>
          </div>

          {/* Food Recognition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-8 h-8 text-orange-400" />
                <h3 className="text-sm font-mono text-orange-400 uppercase tracking-widest">
                  02. Food Intelligence
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Photo-Based Recognition
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Hyphen includes{" "}
                <span className="text-white font-semibold">
                  optional photo-based food recognition
                </span>
                .
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Using computer vision and region-aware food models:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"></span>
                  <span>
                    Identifies individual food items from a single image
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"></span>
                  <span>
                    Breaks composite meals into components (e.g., appam, egg
                    curry, gravy)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"></span>
                  <span>
                    Estimates calories and nutritional load per component
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2"></span>
                  <span>
                    Adapts calculations based on regional cooking styles
                  </span>
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-4 italic">
                This feature is opt-in, designed for awareness—not obsession.
              </p>
            </div>
            <div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl" />
                <div className="relative">
                  <div className="aspect-square bg-zinc-900 rounded-2xl flex items-center justify-center mb-4">
                    <Camera className="w-16 h-16 text-orange-400/30" />
                  </div>
                  <div className="bg-zinc-900 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-bold">
                        Kerala Breakfast
                      </span>
                      <span className="text-orange-400 font-mono text-sm">
                        550 kcal
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-zinc-500">
                      <div>• Appam (2 pcs) - 180 kcal</div>
                      <div>• Egg Curry - 250 kcal</div>
                      <div>• Coconut Gravy - 120 kcal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern Recognition */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-xl">
                    <span className="text-zinc-400">Your Normal Sleep</span>
                    <span className="text-teal-400 font-bold">7.2h</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-xl">
                    <span className="text-zinc-400">Routine Stability</span>
                    <span className="text-green-400 font-bold">High</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-xl">
                    <span className="text-zinc-400">Recovery Pattern</span>
                    <span className="text-blue-400 font-bold">Consistent</span>
                  </div>
                  <div className="flex items-center justify-between bg-zinc-900 p-4 rounded-xl border border-yellow-500/20">
                    <span className="text-zinc-400">Today's Sleep</span>
                    <span className="text-yellow-400 font-bold">5.1h ⚠️</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="w-8 h-8 text-teal-400" />
                <h3 className="text-sm font-mono text-teal-400 uppercase tracking-widest">
                  03. Pattern Recognition
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Your Personal Baseline
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Behind the scenes, Hyphen runs a{" "}
                <span className="text-white font-semibold">
                  user-pattern recognition model
                </span>
                .
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Instead of comparing users to population averages, the system
                learns what is normal for{" "}
                <span className="text-white font-semibold">you</span>:
              </p>
              <ul className="space-y-2 text-zinc-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>Your routine stability</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>Your recovery and stress patterns</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  <span>Your nutrition and medication consistency</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-4 italic">
                Health signals are evaluated as deviations from your own
                baseline, not arbitrary targets.
              </p>
            </div>
          </div>

          {/* Professional Knowledge + AI */}
          <div className="bg-linear-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8 text-purple-400" />
              <h3 className="text-sm font-mono text-purple-400 uppercase tracking-widest">
                04. Professional Knowledge + AI
              </h3>
            </div>
            <h4 className="text-3xl font-bold text-white mb-6">
              Evidence-Based Intelligence
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-white font-semibold mb-3">Built on:</h5>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>
                      Data curated from professional doctors and nutritionists
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>Medical best-practice guidelines</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>Evidence-based nutrition frameworks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-purple-400" />
                    <span>AI-driven inference models</span>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-semibold mb-3">
                  AI is used to:
                </h5>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Personalize suggestions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Detect early trends</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Reduce noise</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Brain className="w-4 h-4 text-blue-400" />
                    <span>Avoid over-intervention</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-zinc-400 mt-6 text-center italic">
              Doctors remain part of the loop—not replaced by it.
            </p>
          </div>

          {/* Diet Profiling */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Utensils className="w-8 h-8 text-green-400" />
                <h3 className="text-sm font-mono text-green-400 uppercase tracking-widest">
                  05. Diet Profiling
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Realistic Recommendations
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Hyphen uses a{" "}
                <span className="text-white font-semibold">
                  diet-profiling algorithm
                </span>{" "}
                that considers:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                  <span>Regional food habits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                  <span>Household cooking patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                  <span>Cultural and seasonal context</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2"></span>
                  <span>
                    Lifestyle constraints (work hours, family routines)
                  </span>
                </li>
              </ul>
              <p className="text-zinc-400 mt-4">
                This allows the system to suggest adjustments that are{" "}
                <span className="text-white font-semibold">
                  realistic, not idealized
                </span>
                .
              </p>
            </div>
            <div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8">
                <div className="bg-zinc-900 rounded-xl p-6 mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="w-5 h-5 text-green-400" />
                    <span className="text-white font-semibold">
                      Your Profile
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-zinc-400">
                    <div className="flex justify-between">
                      <span>Region:</span>
                      <span className="text-white">South India</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cooking Style:</span>
                      <span className="text-white">Home-cooked</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Work Schedule:</span>
                      <span className="text-white">9-6 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Family Size:</span>
                      <span className="text-white">4 members</span>
                    </div>
                  </div>
                </div>
                <div className="bg-green-900/20 border border-green-500/20 rounded-xl p-4 text-sm text-green-100">
                  <div className="font-semibold mb-2">
                    ✓ Personalized Suggestion
                  </div>
                  <div className="text-xs">
                    Add 1 serving of seasonal greens to dinner (fits your
                    cooking routine)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Health Wallet */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl" />
                <div className="relative">
                  {/* Wallet Card Mockup */}
                  <div className="bg-linear-to-br from-indigo-600 to-indigo-800 rounded-2xl p-6 mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <div className="text-sm text-indigo-200 mb-6">
                        Balance
                      </div>
                      <div className="text-4xl font-bold text-white mb-8">
                        ₹24,000
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-indigo-200">
                          Benefits from health scores
                        </div>
                        <Wallet className="w-6 h-6 text-white/80" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-zinc-900 rounded-lg p-3 text-center">
                      <div className="text-xs text-zinc-500 mb-1">
                        View Details
                      </div>
                      <Shield className="w-4 h-4 text-indigo-400 mx-auto" />
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-3 text-center">
                      <div className="text-xs text-zinc-500 mb-1">Settings</div>
                      <Activity className="w-4 h-4 text-indigo-400 mx-auto" />
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-3 text-center">
                      <div className="text-xs text-zinc-500 mb-1">Block</div>
                      <CreditCard className="w-4 h-4 text-indigo-400 mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <Wallet className="w-8 h-8 text-indigo-400" />
                <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest">
                  06. Health Wallet
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Rewards for Healthy Living
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                Your{" "}
                <span className="text-white font-semibold">Health Wallet</span>{" "}
                accumulates benefits based on your health scores and consistent
                healthy behaviors.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                The wallet system incentivizes:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>
                  <span>Maintaining consistent health patterns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>
                  <span>Achieving personal health milestones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>
                  <span>Regular health check-ins and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2"></span>
                  <span>Preventive care engagement</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-4 italic">
                Redeem wallet balance for health services, insurance premium
                discounts, or wellness products.
              </p>
            </div>
          </div>

          {/* Insurance Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-8 h-8 text-blue-400" />
                <h3 className="text-sm font-mono text-blue-400 uppercase tracking-widest">
                  07. Digital Insurance Card
                </h3>
              </div>
              <h4 className="text-3xl font-bold text-white mb-4">
                Score-Based Benefits
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Your{" "}
                <span className="text-white font-semibold">
                  Digital Insurance Card
                </span>{" "}
                reflects benefits earned through your health scores.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Key features include:
              </p>
              <ul className="space-y-3 text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                  <span>Dynamic benefits based on health performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                  <span>View card details and claim status instantly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                  <span>Manage card settings and preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                  <span>Block/unblock card for security</span>
                </li>
              </ul>
              <p className="text-sm text-zinc-500 mt-4 italic">
                Better health scores unlock better insurance benefits—creating a
                virtuous cycle of wellness.
              </p>
            </div>
            <div>
              <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl" />
                <div className="relative">
                  {/* Insurance Card Mockup */}
                  <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-2xl p-6 mb-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-10 h-8 bg-white/20 rounded"></div>
                        <div className="space-y-1">
                          <div className="text-xs text-blue-100 font-mono">
                            0135 2110
                          </div>
                          <div className="text-xs text-blue-100 font-mono">
                            6770 1999
                          </div>
                        </div>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center mb-4">
                        <div className="w-12 h-1 bg-white/50 rounded"></div>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-xs text-blue-200 mb-1">
                            VALID TILL
                          </div>
                          <div className="text-sm text-white font-mono">
                            12/30
                          </div>
                          <div className="text-lg font-bold text-white mt-2">
                            ABI ALIF
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <Shield className="w-3 h-3 text-blue-400" />
                      <span>View Card Details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Activity className="w-3 h-3 text-blue-400" />
                      <span>Card Settings</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-3 h-3 text-blue-400" />
                      <span>Claim Status</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
