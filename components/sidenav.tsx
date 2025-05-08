'use client';
import { cn } from '@/lib/utils';
import { LucideFileKey } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from './ui/button';

export const Sidenav = () => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebar = useRef(null);
  useEffect(() => {
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);
  return (
    <>
      {/* Mobile hamburger menu */}
      <div
        className={cn(
          'absolute left-5 lg:hidden z-50 transition-all duration-200',
          sidebarOpen ? 'bottom-5' : 'top-5'
        )}
      >
        <div className="flex items-center justify-center h-16">
          <Button
            onClick={e => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
          >
            <span className="sr-only">Toggle sidebar</span>
            {sidebarOpen ? (
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="4"
                  y1="4"
                  x2="20"
                  y2="20"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="4"
                  y1="20"
                  x2="20"
                  y2="4"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>
            )}
          </Button>
        </div>
      </div>
      {/* Mobile backdrop */}
      <div
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={cn(
          'fixed inset-0 border-r border-gray-200 sm:translate-x-0 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ',
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        aria-hidden="true"
      ></div>
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={cn(
          'fixed flex flex-col z-40 left-0 top-0 lg:static lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto lg:w-64 w-72 bg-white lg:sidebar-expanded:w-20 shrink-0 border-r border-gray-200 p-4 transition-all duration-200',
          sidebarOpen ? 'translate-x-0' : '-translate-x-72'
        )}
      >
        <div className="flex justify-between pr-3 sm:px-2">
          {/* Sidebar logo (expanded) */}
          <Link href="/">
            <span
              className={cn(
                'welcome-step text-2xl font-medium tracking-tighter text-black focus:outline-none focus:ring whitespace-nowrap cursor-pointer',
                sidebarExpanded ? 'lg:hidden' : 'block'
              )}
            >
              <Image
                src="/e.png"
                className="mt-2 mb-8"
                alt="logo"
                width={200}
                height={100}
              />
            </span>
          </Link>
          <Link href="/">
            <LucideFileKey
              className={cn(
                'mt-1 mb-8 h-8 w-8',
                !sidebarExpanded ? 'lg:hidden' : 'block'
              )}
            />
          </Link>
        </div>
        <div className="space-y-4">Link</div>
        {/* Expand/Collapse handler */}
        <div className="pt-3 lg:inline-flex mt-auto">
          <div className="flex-1" />
          <div className="px-3 py-2 justify-end">
            <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
              <span className="sr-only">Expand / collapse sidebar</span>
              <svg
                className={cn(
                  'w-6 h-6 hidden lg:block fill-current',
                  !sidebarExpanded ? 'rotate-0' : 'rotate-180'
                )}
                viewBox="0 0 24 24"
              >
                <path
                  d="M10.5 19.5L3 12M3 12L10.5 4.5M3 12H21"
                  stroke="#0F172A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
