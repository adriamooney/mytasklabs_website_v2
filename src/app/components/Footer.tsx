import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg"></div>
              <span className="text-white font-semibold">My Task Labs</span>
            </div>
            <p className="text-sm">
              Intelligent automation solutions for modern businesses.
            </p>
            <p className="text-xs mt-3">Based in Portland, OR<br />contact@mytasklabs.com
<br />503.660.3022<br /></p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/ai-workflow-audit" className="hover:text-white">AI Workflow Audit</Link></li>
              <li><Link to="/lead-automation" className="hover:text-white">Lead Automation</Link></li>
              <li><Link to="/team-coordination" className="hover:text-white">Team Coordination</Link></li>
              <li><Link to="/analytics" className="hover:text-white">Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/home-services" className="hover:text-white">Home Services</Link></li>
              <li><Link to="/professional-services" className="hover:text-white">Professional Services</Link></li>
              <li><Link to="/operations" className="hover:text-white">Operations</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          &copy; 2026 My Task Labs. All rights reserved. Business registered at 8 The Green, Suite B, Dover, DE 19901
        </div>
      </div>
    </footer>
  );
}
