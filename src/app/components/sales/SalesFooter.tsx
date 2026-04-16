import Link from 'next/link';

export function SalesFooter() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          <Link href="/privacy" className="text-sm hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm hover:text-white transition-colors">
            Terms of Service
          </Link>
        </div>
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          &copy; {new Date().getFullYear()} My Task Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
