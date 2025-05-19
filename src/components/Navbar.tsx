import React from 'react'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Dashboard', href: '/Dashboard', current: true },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-black text-white">
            <div className="flex h-20 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="SpaceX"
                    src="/spacex.svg"
                    className="h-8 w-auto "
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
                <div className="-mr-2 flex md:hidden">
                  <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={open ? 'true' : 'false'}
                  onClick={() => setOpen((prev) => !prev)}
                  >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                  </button>
                </div>
                {open && (
                  <div className="fixed inset-0 z-50 flex items-start justify-end md:hidden">
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                  />
                  <div className="relative z-10 mt-4 mr-4 w-56 rounded-lg bg-black shadow-lg ring-1 ring-white ring-opacity-10">
                    <button
                    className="absolute top-2 right-2 text-gray-400 hover:text-white"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú"
                    >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    </button>
                    <div className="space-y-1 px-4 py-6">
                    {navigation.map((item) => (
                      <a
                      key={item.name}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-base font-medium ${
                        item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => setOpen(false)}
                      >
                      {item.name}
                      </a>
                    ))}
                    </div>
                  </div>
                  </div>
                )}
            </div>
          </div>
    </div>
  )
}
